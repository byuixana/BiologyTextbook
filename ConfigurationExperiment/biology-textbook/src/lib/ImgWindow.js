/**
 * A component that displays images with navigation buttons and audio playback.
 * Allows users to switch between different image views and play associated audio.
 *
 * @returns {JSX.Element} An image viewer with navigation buttons and audio controls
 */

import { useState, useEffect } from 'react';
import { FaVolumeUp } from 'react-icons/fa';
import { useSelectionContext } from './context/SelectionContext.js';

export default function ImgWindow(){
    const { selectedItem } = useSelectionContext();

    const [img, setImg] = useState(null);

    // Reset the displayed image whenever the selected item changes
    useEffect(() => {
        const firstImg = selectedItem?.buttons?.[0]?.img;
        setImg(typeof firstImg === 'string' ? firstImg : null);
    }, [selectedItem]);

    // Functions
    function playSound(){
        const sound = selectedItem?.sound;
        if (!sound) return;
        const audio = new Audio();
        audio.src = sound;
        audio.load();
        audio.play().catch(err => {
            console.error('Audio playback failed:', err, '| src:', audio.src);
        });
    }

    // vars and helpers
    const buttons = selectedItem?.buttons || []

    // JSX
        return (
                <div className="w-full h-screen overflow-hidden flex items-center flex-col bg-black"
                >
                    <div className="flex flex-wrap gap-2 px-6 pt-4 pb-2 w-full justify-center">
                        {
                                buttons.map( (button, index) => {
                                    return button.label ? (
                                        <button className="bg-gray-600 hover:bg-gray-300 px-3 py-1 min-h-7 w-auto max-w-full text-white text-sm leading-tight whitespace-normal break-words rounded" key={index} onClick={() => button.img ? setImg(button.img) : null}>
                                            {button.label}
                                        </button>
                                    ) : null;
                                })

                            }
                            <button
                            onClick={() => playSound()}
                            className='w-auto min-h-7 bg-gray-600 py-2 px-4 flex justify-center rounded'>
                                <FaVolumeUp size={20} color={"white"} padding={0} margin={0}/>
                            </button>
                    </div>
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2 text-white">{ selectedItem?.label }</div>
                    </div>
                    <div className="w-full max-w-5xl h-[65vh] px-4 flex items-center justify-center overflow-hidden">
                        { img ? (
                            <img className="max-w-full max-h-full w-auto h-auto object-contain" key={img} src={img} alt={selectedItem?.label || 'image'} />
                        ) : (
                            <div className="text-white">No image available</div>
                        )}
                    </div>
                </div>
    )

}
