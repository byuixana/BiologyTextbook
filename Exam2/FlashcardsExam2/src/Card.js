/**
 * A flashcard component that displays question and answer with flip animation.
 * Shows an image, question on the front, and answer on the back with navigation buttons.
 *
 * @typedef {object} CardProps
 * @property {object} cardData - Card data object containing question, answer, and img_src
 * @property {string} cardData.question - Question text displayed on the front
 * @property {string} cardData.answer - Answer text displayed on the back
 * @property {string} cardData.img_src - Image source URL for the card
 * @property {function} moveNext - Callback function to move to the next card
 * @property {number|string} resetTrigger - Trigger value that resets the card state when changed
 * 
 * @returns {JSX.Element} A flipable flashcard component
 */

import {useState, useEffect} from 'react';
import { useFlashcardContext } from './context/FlashcardContext.js';

export default function Card({cardData, moveNext, resetTrigger}){
    const { selectedCardIds } = useFlashcardContext();
    const { markCardAsKnown } = useFlashcardContext();
    const [isFlipped, setFlipped] = useState(false)
    const [correct, setCorrect] = useState(false)
    console.log("Card", cardData)
    // Reset state whenever the index changes
    useEffect(() => {
        setFlipped(false);
        setCorrect(false);
    }, [resetTrigger]);
    
    // Get question and answer from cardData
    const question = cardData?.question
    const answer = cardData?.answer
    const rawImg = cardData?.img_src ?? cardData?.img ?? cardData?.image
    const img = typeof rawImg === 'string' ? rawImg.trim() : ''
    const hasImage = img.length > 0

    return (
        <div
            onClick={() => setFlipped(false)}
            className="relative mx-auto max-w-[480px]
            aspect-[9/16] origin-center transition-transform duration-[600ms] 
            [transform-style:preserve-3d] outline outline-1 outline-blue-500
            rounded shadow-sm"
            style={{ width: 'min(94vw, 480px, calc(78vh * 9 / 16))', transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)' }}
        >
        
            {/* Front Side */}
            <div
                onClick={(e) => {
                    e.stopPropagation();
                    setFlipped(true);
                }}
                style={{ backfaceVisibility: 'hidden' }}
                 className="absolute inset-0 flex h-full w-full flex-col items-center justify-center bg-white rounded p-4 cursor-pointer sm:p-6"
            >
                {hasImage && (
                <img
                    src={img}
                    alt="Question"
                    className="w-full max-h-96 mb-4 rounded overflow-hidden object-contain"
                    style={{ width: '100%', aspectRatio: '9 / 16' }}
                />
                )}
                <div className="w-full flex-1 flex items-center justify-center text-center text-lg sm:text-xl">{question}</div>
            </div>

            {/* Back Side */}
            <div
                style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
                className="absolute inset-0 flex flex-col items-center justify-center bg-white rounded p-4 sm:p-6"
            >
                {hasImage && (
                <img
                    src={img}
                    alt="Answer"
                    className="w-full max-h-96 mb-4 rounded overflow-hidden object-contain"
                    style={{ width: '100%', aspectRatio: '9 / 16' }}
                />
                )}
                <div className="text-center text-lg sm:text-xl mb-4">{answer}</div>

                <div className={`flex flex-row flex-wrap justify-center ${isFlipped ? 'visible' : 'hidden'}`}>
                    <button
                        className="m-2 h-fit w-fit rounded-full bg-green-500 p-1.5 font-bold sm:p-2"
                        onClick={(e) => {
                            e.stopPropagation();
                            setCorrect(true);
                            markCardAsKnown(cardData);
                            moveNext();
                        }}
                    >
                                                <svg width="72" height="72" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="sm:h-[90px] sm:w-[90px]">
                          <path d="M 30 50 L 42 62 L 70 34" fill="none" stroke="white" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                    <button
                                                className="m-2 h-fit w-fit rounded-full bg-red-500 p-1.5 font-bold sm:p-2"
                        onClick={(e) => {
                            e.stopPropagation();
                            setCorrect(false);
                            if (selectedCardIds.size === 1) {
                                // If this is the last card and they got it wrong, flip it back to the front instead of moving next (which would cause an infinite loop of blank cards)
                                setFlipped(false);
                                setCorrect(false);
                                return;
                            }
                            moveNext();
                        }}
                    >
                        <svg width="72" height="72" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="sm:h-[90px] sm:w-[90px]">
                            <path d="M 32 32 L 68 68 M 68 32 L 32 68" fill="none" stroke="white" strokeWidth="6" strokeLinecap="round"/>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    )
    
}