/**
 * A component that renders different content types based on the selected item.
 * Displays ImgWindow, VideoPlayer, or Lecture components depending on the item type.
 *
 * @returns {JSX.Element} A content window that renders the appropriate component
 */

import { useState, useEffect, useRef } from 'react'
import VideoPlayer from './VideoPlayer.js'
import ImgWindow from './ImgWindow.js'
import Lecture from './Lecture.js'
import { useSelectionContext } from './context/SelectionContext.js'

export default function ContentWindow(){
    const { selectedItem, setSelected, allItems } = useSelectionContext();
    const [toastMessage, setToastMessage] = useState('');
    
    const toastTimeout = useRef(null);

    const showToast = (message) => {
        if (toastTimeout.current) clearTimeout(toastTimeout.current);
        setToastMessage(message);
        toastTimeout.current = setTimeout(() => setToastMessage(''), 2000);
    }

const clickHandlerPrev = () => {
    const curItemIndex = allItems.findIndex(item => item.id === selectedItem.id);

    if (curItemIndex <= 0) {
        showToast('No previous item');
        return;
    }

    // Walk backwards to find the nearest non-"none" item
    let prevIndex = curItemIndex - 1;
    while (prevIndex >= 0 && allItems[prevIndex]?.type === "none") {
        prevIndex--;
    }

    if (prevIndex <= 0) {
        showToast('No previous item');
        return;
    }

    setSelected(allItems[prevIndex]);
};

const clickHandlerNext = () => {
    const curItemIndex = allItems.findIndex(item => item.id === selectedItem.id);

    if (curItemIndex === -1) {  // ← only block if item not found
        return;
    }

    // Walk forwards to find the nearest non-"none" item
    let nextIndex = curItemIndex + 1;
    while (nextIndex < allItems.length && allItems[nextIndex]?.type === "none") { // ← < not >=
        nextIndex++;
    }

    if (nextIndex >= allItems.length) {
        showToast('No next item');
        return;
    }

    setSelected(allItems[nextIndex]);
}
    
    useEffect(() => {
        console.log('Selection updated:', selectedItem);
    }, [selectedItem]);

    function renderContent() {
        if (selectedItem?.type === 'img'){
            return <ImgWindow />
        }
        else if (selectedItem?.type === 'video'){
            return <VideoPlayer />
        }
        else {
            return <Lecture />
            
        }
    }

        // Early return if no item
    if (!selectedItem) {
        return <div className="bg-red-50 w-64 h-10">Select and item</div>; // or return <div>Select an item</div>
    } 

    let src = "https://cdnapisec.kaltura.com/p/1157612/sp/115761200/embedIframeJs/uiconf_id/41338032/partner_id/1157612?iframeembed=true&playerId=kaltura_player&entry_id=1_fon44m6t&flashvars[localizationCode]=en&amp;flashvars[sideBarContainer.plugin]=true&amp;flashvars[sideBarContainer.position]=left&amp;flashvars[sideBarContainer.clickToClose]=true&amp;flashvars[chapters.plugin]=true&amp;flashvars[chapters.layout]=vertical&amp;flashvars[chapters.thumbnailRotator]=false&amp;flashvars[streamSelector.plugin]=true&amp;flashvars[EmbedPlayer.SpinnerTarget]=videoHolder&amp;flashvars[dualScreen.plugin]=true&amp;flashvars[Kaltura.addCrossoriginToIframe]=true&amp;&wid=1_mbz6ioam";
        return (
        
    <div className="relative w-full h-full">
        {toastMessage && (
        <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-black text-white px-4 py-2 rounded z-20">
            {toastMessage}
        </div>
    )}

     <button className="absolute left-0 top-1/2 -translate-y-1/2 z-10
     bg-[#1a5e80] text-white p-2 rounded
        w-6
        h-24
     m-2"
     onClick={clickHandlerPrev}>
            <svg width="10" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="mx-auto">
                <polyline points="15 18 9 12 15 6" />
            </svg>
    </button>

                {renderContent()}

            <button className="absolute right-0 top-1/2 -translate-y-1/2 z-10
     bg-[#1a5e80] text-white p-2 rounded
        w-6
        h-24
     m-2"
     onClick={clickHandlerNext}>
            <svg width="10" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="mx-auto">
                <polyline points="9 18 15 12 9 6" />
            </svg>
    </button>

  </div>
    )
}