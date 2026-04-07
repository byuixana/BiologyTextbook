/**
 * A slide-in menu component that displays tree views for one or more sections.
 *
 * @typedef {object} SectionMenuProps
 * @property {Array<{id: string, title: string, data: Array}>} sections - Sections from lab_data.json
 *
 * @returns {JSX.Element} A slide-in menu with one tree view per section
 */
import React from 'react';
import { useState, useEffect } from 'react';
import SelectionContextProvider from './context/SelectionContext.js'
import SectionTreeView from './SectionTreeView.js'
import { HiMenu } from 'react-icons/hi';
import { createPortal } from 'react-dom';

function MobileMenu({ sections, onMainMenu }){
    const [open, setOpen] = useState(false)

    const menu = (
    <React.Fragment>
        {/* Hamburger button */}
        <button
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            className="z-50 bg-white rounded p-2 shadow transition"
            style={{ position: "fixed", left: "1rem", top: "1rem" }}
        >
            <HiMenu size={20} color={"black"}/>
        </button>

        {/* Backdrop — tap outside drawer to close */}
        {open && (
            <div
                onClick={() => setOpen(false)}
                style={{
                    position: "fixed", inset: 0,
                    backgroundColor: "rgba(0,0,0,0.45)",
                    zIndex: 999
                }}
            />
        )}

        {/* Slide-in drawer */}
        <aside
            className="flex flex-col top-0 left-0 w-72 bg-[#1a5e80] shadow-xl overflow-y-auto"
            style={{
                position: "fixed",
                height: "100vh",
                transform: open ? 'translateX(0)' : 'translateX(-100%)',
                transition: 'transform 300ms ease-in-out',
                zIndex: 1000
            }}
        >
            {/* Drawer header with close button — sticky so it stays visible while nav scrolls */}
            <div className="flex flex-col gap-2 px-4 py-3 border-b border-white/20 sticky top-0 bg-[#1a5e80] z-10">
                <button onClick={onMainMenu} className="block w-full text-center px-4 py-2 bg-white hover:bg-gray-100 text-[#1a5e80] font-semibold rounded-lg shadow text-sm">Main Menu</button>
                <div className="flex items-center justify-between">
                <span className="text-white font-semibold text-base">Menu</span>
                <button
                    onClick={() => setOpen(false)}
                    aria-label="Close menu"
                    className="flex items-center justify-center w-8 h-8 rounded-full bg-white/20 hover:bg-white/40 transition"
                >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18"/>
                        <line x1="6" y1="6" x2="18" y2="18"/>
                    </svg>
                </button>
                </div>
            </div>

            <nav className='w-full'>
                {sections.map(section => (
                    <SectionTreeView key={section.id} className="tree" section={section.title} data={section.data} />
                ))}
            </nav>
        </aside>
    </React.Fragment>
    )
    return createPortal(menu, document.body);
}

function DesktopMenu({ sections, onMainMenu }){
    return (
        <aside className="flex flex-col h-full w-72 bg-[#1a5e80] shadow-md overflow-auto">
            <div className="px-4 py-3 border-b border-white/20">
                <button onClick={onMainMenu} className="block w-full text-center px-4 py-2 bg-white hover:bg-gray-100 text-[#1a5e80] font-semibold rounded-lg shadow text-sm">Main Menu</button>
            </div>
            <nav className='w-full flex-1'>
                {sections.map(section => (
                    <SectionTreeView key={section.id} className="tree" section={section.title} data={section.data} />
                ))}
            </nav>
        </aside>
    )
}

export default function SectionMenu({ sections, onMainMenu }){

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 850);
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <>
            {isMobile ? <MobileMenu sections={sections} onMainMenu={onMainMenu} /> : <DesktopMenu sections={sections} onMainMenu={onMainMenu} />}
        </>
    )
}