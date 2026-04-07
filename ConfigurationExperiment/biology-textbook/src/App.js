import './App.css';
import { useState, useEffect } from 'react';
import { LabProvider, useLab } from './lib/context/LabContext';
import Cover from './Cover';
import SectionMenu from './lib/SectionMenu';
import ContentWindow from './lib/ContentWindow';
import SelectionContextProvider from './lib/context/SelectionContext';
import labs from './labs';

function LabPlayer() {
  const { selectedKey, setSelectedLab } = useLab();
  const [labData, setLabData] = useState(null);

  useEffect(() => {
    if (!selectedKey) return;
    setLabData(null);
    fetch(process.env.PUBLIC_URL + '/' + labs[selectedKey].file)
      .then(r => r.json())
      .then(setLabData);
  }, [selectedKey]);

  if (!labData) return <div className="flex items-center justify-center h-screen">Loading...</div>;

  return (
    <SelectionContextProvider data={labData}>
      <div className="flex h-screen overflow-hidden">
        <SectionMenu sections={labData.sections} onMainMenu={() => setSelectedLab(null)} />
        <div className="flex-1 overflow-hidden">
          <ContentWindow />
        </div>
      </div>
    </SelectionContextProvider>
  );
}

function AppContent() {
  const { selectedKey } = useLab();
  return selectedKey ? <LabPlayer /> : <Cover />;
}

function App() {
  return (
    <LabProvider>
      <AppContent />
    </LabProvider>
  );
}

export default App;
