/**
 * Context provider for managing selected items in the application.
 *
 * @typedef {object} SelectionContextProviderProps
 * @property {React.ReactNode} children - Child components that will have access to the context
 * 
 * @returns {JSX.Element} A context provider component
 */

import { createContext, useContext, useState, useEffect } from "react";

const SelectionContext = createContext(0);

const EMPTY_ITEM = {};

function traverseChildren(children, parentID = null) {
    if (!children) return [];
    let childItems = [];
    for (const child of children) {
        childItems.push({ ...child, parentID });
        if (child.children?.length > 0) {
            childItems.push(...traverseChildren(child.children, child.id));
        }
    }
    return childItems;
}

function traverseJSON(sections) {
    if (!sections || !Array.isArray(sections)) return [];
    let items = [];
    for (const section of sections) {
        if (section.data?.length > 0) {
            items.push(...traverseChildren(section.data, null));
        }
    }
    return items;
}

export default function SelectionContextProvider({ children, initialSelectedItem = EMPTY_ITEM, data }) {

    const [selectedItem, setSelected] = useState(initialSelectedItem)
    const [allItems, setAllItems] = useState([])

    useEffect(() => {
        if (data?.sections) {
            const items = traverseJSON(data.sections);
            setAllItems(items);
            const first = items.find(item => {
                const type = String(item.type ?? '').toLowerCase();
                return item.load || (type && type !== 'none');
            });
            if (first) setSelected(first);
        }
    }, [data]);

    return <SelectionContext.Provider value={{ selectedItem, setSelected, allItems }}>{ children }</SelectionContext.Provider>
}

/**
 * Hook to access the selection context.
 * 
 * @returns {object} An object containing selectedItem and setSelected function
 * @throws {Error} If used outside of SelectionContextProvider
 */
export function useSelectionContext() {
  return useContext(SelectionContext);
}