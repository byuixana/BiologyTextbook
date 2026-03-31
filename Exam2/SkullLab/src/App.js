/**
 * Main application component that loads data and renders the header, menu, and content window.
 *
 * @returns {JSX.Element} The main app component with header, menu, and content
 */

import { useState, useEffect } from 'react'
import './App.css';
import Header from './lib/Header.js'
import SectionMenu from './lib/SectionMenu.js';
import ContentWindow from './lib/ContentWindow.js';
import SelectionContextProvider from './context/SelectionContext.js';

function App() {

  const [data, setData] = useState(null)
  const [initialSelectedItem, setInitialSelectedItem] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await fetch('./lab_data.json');
            const json = await response.json()
            setData(json)
            console.log('json', json)
            // Use the first non-empty leaf in the first section as the default selection
            const firstSectionData = json.sections?.[0]?.data
            const firstItem = firstSectionData?.[1]
            console.log("first item", firstItem)
            setInitialSelectedItem(firstItem)
        } catch (error){
            console.error("Could not fetch lab_data.json:", error)
        }
    }

    fetchData()

    }, [])

  // Only render the provider once we have both data and initial selected item
  if (!data || !initialSelectedItem) {
    return <div>Loading...</div>
  }

  return (
    <SelectionContextProvider initialSelectedItem={initialSelectedItem} data={data}>
        <div className="flex flex-col h-screen">
            <Header sectionTitle={data.title}/>
            <div className="flex flex-1 overflow-hidden">
                <SectionMenu sections={data.sections} />
                <div className="flex-1 overflow-auto">
                    <ContentWindow />
                </div>
            </div>
        </div>
    </SelectionContextProvider>
  );
}

export default App;

