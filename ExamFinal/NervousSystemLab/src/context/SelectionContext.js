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

export default function SelectionContextProvider({ children, initialSelectedItem = {}, data }) {

    // Hooks
    const [selectedItem, setSelected] = useState(initialSelectedItem)
    const [allItems, setAllItems] = useState([])

// Define outside the component to avoid recreation on every render
    const traverseChildren = (children, parentID = null) => {
        if (!children) return [];

        let childItems = [];

        for (const child of children) {
            childItems.push({
                ...child,
                parentID: parentID,
            });

            if (child.children && child.children.length > 0) {
                childItems.push(...traverseChildren(child.children, child.id));
            }
        }

        return childItems;
    };


const traverseJSON = (sections) => {
  if (!sections || !Array.isArray(sections)) return [];

  let items = [];

  for (const section of sections) {
    if (section.data?.length > 0) {
      items.push(...traverseChildren(section.data, null));
    }
  }

  return items;
};

// Inside your component:
useEffect(() => {
  console.log("Data in context provider:", data);
  if (data?.sections) {                          // ← check for sections
    const allItems = traverseJSON(data.sections); // ← pass data.sections
    console.log("ITEMS:", allItems);
    // const initialItem = allItems.find(item => item.id === initialSelectedItem.id);
    // setSelected(initialItem || initialSelectedItem);
    setAllItems(allItems);
  }
}, [data, initialSelectedItem]);

    // Provider
    return <SelectionContext.Provider value = {{ selectedItem, setSelected, allItems }}>{ children }</SelectionContext.Provider>

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