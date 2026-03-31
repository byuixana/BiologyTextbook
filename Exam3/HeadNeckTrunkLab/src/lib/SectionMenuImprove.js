/**
 * A slide-in menu component that displays a tree view for section navigation.
 *
 * @typedef {object} SectionMenuImproveProps
 * @property {object|Array<object>} data - Section data object with title and data array, or array of section items
 * @property {string} [data.title] - Section title (if data is an object)
 * @property {Array<object>} [data.data] - Array of section items (if data is an object)
 * @property {object} selectedItem - Currently selected item from the tree
 * @property {function} onSelect - Callback function when an item is selected
 * 
 * @returns {JSX.Element} A slide-in menu with tree navigation
 */

import { useState, useEffect } from 'react';
import SelectionContectProvider from '../context/SelectionContext.js'
import SectionTreeView from './SectionTreeView.js'
import { HiMenu } from 'react-icons/hi';
import { createPortal } from 'react-dom';

export default function SectionMenuImprove({ data, selectedItem, onSelect }){

    //Is the menu open?
    const [open, setOpen] = useState(false)
    
    // Hooks

    //Helpers
    // week 1 and 2 will be dictionaries with names
    console.log("Rendering with open =", open)
    const menu = (
        <React.Fragment>
                <button
                    onClick={() => {
                        console.log("Button clicked, open is:", open);
                        setOpen(true)}}
                    className="z-50 bg-white rounded p-2 transition "
                    style = {{
                        position: "fixed",
                        left: "1rem",
                        top: "1rem"
                    }}
                    >
                        <HiMenu size={20} color={"black"}/>
                </button> 
                    {/* Handles transition for slide-in menu */}
                    <aside
                    className="top-0 left-0 h-full w-64 bg-white shadow-md z-50 transform transition-transform duration-300"
                        style={{ 
                            position: "fixed",
                            transform: open ? 'translateX(0)' : 'translateX(-100%)',
                            transition: 'transform 300ms ease-in-out',
                            height: "100vh",
                            zIndex: 1000
                        }}>
                        <button
                            onClick={() => {
                                setOpen(false)}}
                            className="bg-white rounded p-2 transition"
                            style = {{
                                position: 'absolute',
                                right: 0,
                                border: 'none',
                                borderRadius: '4px',
                            }}
                            >
                            <svg width="16" height="12" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                        </button> 

                        <nav>
                            <SelectionContectProvider value={{ selectedItem, setSelected : onSelect}}>
                                <SectionTreeView 
                                    className="tree" 
                                    section={ data?.title || "Section" } 
                                    data={ Array.isArray(data) ? data : (data?.data || []) }
                                />
                            </SelectionContectProvider>
                        </nav>  
                       
                    </aside>
                
        </React.Fragment>
    )
    return createPortal(menu, document.body);
}