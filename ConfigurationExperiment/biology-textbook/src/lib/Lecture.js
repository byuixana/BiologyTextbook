/**
 * A component that displays lecture content in an iframe.
 * Loads HTML pages from the selected item's buttons.
 *
 * @returns {JSX.Element} An iframe displaying lecture content
 */

import { useState, useEffect } from 'react'
import { useSelectionContext } from './context/SelectionContext.js';

export default function Lecture(){
    const { selectedItem } = useSelectionContext();
    const [pageSource, setSource] = useState('')

    useEffect(() => {
        const newSource = selectedItem?.load || selectedItem?.child_items?.[0]?.load;
        setSource(newSource)
    }, [selectedItem])

    return (
        <div className="w-full h-full">
            <iframe 
                src={pageSource} 
                className="w-full h-full"
                style={{border: "none"}}
                allowFullScreen 
                title="4_1_1_intro_bone_anat"
            />
        </div>
    )
}