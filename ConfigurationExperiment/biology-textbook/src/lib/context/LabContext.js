import { createContext, useContext, useState } from 'react';

const LabContext = createContext(null);

export function LabProvider({ children }) {
    const [selectedKey, setSelectedLab] = useState(null);

    return (
        <LabContext.Provider value={{ selectedKey, setSelectedLab }}>
            {children}
        </LabContext.Provider>
    );
}

export function useLab() {
    return useContext(LabContext);
}
