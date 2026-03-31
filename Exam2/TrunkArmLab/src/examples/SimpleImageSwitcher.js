import React from 'react';
import { useSelectionContext } from '../context/SelectionContext';

// Simple example showing how to change images based on SectionMenu selection
export default function SimpleImageSwitcher() {
    const { selectedItem } = useSelectionContext();

    // Define your image data - map selection IDs to image sets
    const getImageData = (selectionId) => {
        switch(selectionId) {
            case 'ethmoid-bone':
                return {
                    title: 'Ethmoid Bone',
                    images: [
                        { src: '/path/to/ethmoid-anterior.jpg', name: 'Anterior View' },
                        { src: '/path/to/ethmoid-posterior.jpg', name: 'Posterior View' },
                        { src: '/path/to/ethmoid-lateral.jpg', name: 'Lateral View' },
                        { src: '/path/to/ethmoid-3d.jpg', name: 'Ethmoid Bone 3D' }
                    ],
                    sound: '/path/to/ethmoid-sound.wav'
                };
            
            case 'maxilla-bone':
                return {
                    title: 'Maxilla Bone',
                    images: [
                        { src: '/path/to/maxilla-anterior.jpg', name: 'Anterior View' },
                        { src: '/path/to/maxilla-posterior.jpg', name: 'Posterior View' },
                        { src: '/path/to/maxilla-lateral.jpg', name: 'Lateral View' }
                    ],
                    sound: '/path/to/maxilla-sound.wav'
                };
            
            case 'mandible-bone':
                return {
                    title: 'Mandible Bone',
                    images: [
                        { src: '/path/to/mandible-anterior.jpg', name: 'Anterior View' },
                        { src: '/path/to/mandible-posterior.jpg', name: 'Posterior View' },
                        { src: '/path/to/mandible-lateral.jpg', name: 'Lateral View' }
                    ],
                    sound: '/path/to/mandible-sound.wav'
                };
            
            default:
                return {
                    title: 'No Selection',
                    images: [],
                    sound: null
                };
        }
    };

    // Get current data based on selection
    const currentData = getImageData(selectedItem);

    return (
        <div className="image-switcher">
            <h2>{currentData.title}</h2>
            
            {/* Show images if any exist */}
            {currentData.images.length > 0 ? (
                <div className="image-container">
                    {currentData.images.map((img, index) => (
                        <div key={index} className="image-item">
                            <img 
                                src={img.src} 
                                alt={img.name}
                                style={{ width: '200px', height: '200px', objectFit: 'cover' }}
                            />
                            <p>{img.name}</p>
                        </div>
                    ))}
                </div>
            ) : (
                <p>Please select an item from the menu</p>
            )}

            {/* Audio player */}
            {currentData.sound && (
                <audio controls>
                    <source src={currentData.sound} type="audio/wav" />
                </audio>
            )}

            {/* Debug info */}
            <div style={{ marginTop: '20px', padding: '10px', backgroundColor: '#f0f0f0' }}>
                <p><strong>Selected ID:</strong> {selectedItem}</p>
                <p><strong>Images:</strong> {currentData.images.length}</p>
            </div>
        </div>
    );
}

// Example of how to use this in your main App.js
export function AppWithImageSwitcher() {
    return (
        <div>
            {/* Your existing SectionMenu */}
            <SectionMenu 
                week1={week1Data} 
                week2={week2Data}
                selectedItem={selectedItem}
                onSelect={setSelectedItem}
            />
            
            {/* Your existing components */}
            <SimpleImageSwitcher />
            
            {/* Or use with your existing ImgWindow */}
            <ImgWindowWithSwitcher />
        </div>
    );
}

// Example showing how to integrate with your existing ImgWindow component
function ImgWindowWithSwitcher() {
    const { selectedItem } = useSelectionContext();

    // Convert selection to your ImgWindow format
    const getImgWindowData = (selectionId) => {
        const dataMap = {
            'ethmoid-bone': {
                imgs: [
                    { imageLink: '/path/to/ethmoid-anterior.jpg', name: 'Anterior View' },
                    { imageLink: '/path/to/ethmoid-posterior.jpg', name: 'Posterior View' },
                    { imageLink: '/path/to/ethmoid-lateral.jpg', name: 'Lateral View' },
                    { imageLink: '/path/to/ethmoid-3d.jpg', name: 'Ethmoid Bone 3D' }
                ],
                itemName: 'Ethmoid Bone',
                sound: '/path/to/ethmoid-sound.wav'
            }
            // Add more mappings as needed
        };

        return dataMap[selectionId] || {
            imgs: [],
            itemName: 'No Selection',
            sound: null
        };
    };

    const currentData = getImgWindowData(selectedItem);

    // Use your existing ImgWindow component
    return (
        <div>
            {currentData.imgs.length > 0 ? (
                <ImgWindow 
                    imgData={{ imgs: currentData.imgs }}
                    itemName={currentData.itemName}
                    sound={currentData.sound}
                />
            ) : (
                <div>Please select an item from the menu</div>
            )}
        </div>
    );
}

