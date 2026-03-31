/**
 * A component that displays the current flashcard from the filtered card list.
 * Handles navigation and displays a single card at a time.
 *
 * @typedef {object} CardListProps
 * @property {string} section - Section identifier (currently unused)
 * 
 * @returns {JSX.Element} A card list component displaying the current card
 */

import Card from './Card.js';
import { useFlashcardContext } from './context/FlashcardContext.js';

export default function CardList({ section }){
    const { 
        filteredCards, 
        currentCard, 
        currentIndex, 
        nextCard
    } = useFlashcardContext();

    // Navigate to next card
    const handleNext = () => {
        nextCard();
    };

    if (!currentCard || filteredCards.length === 0) {
        return (
            <div className='flex flex-col w-full h-full items-center justify-center'>
                <div>No cards available</div>
            </div>
        );
    }

    return(
        <div className='flex flex-col w-full h-full items-center justify-start overflow-visible'>
            <div className='flex flex-row items-center justify-center'>
                {/* Optional: Add navigation buttons or other controls here */}
            </div>

            <Card 
                key={currentIndex}
                cardData={currentCard}
                resetTrigger={currentIndex}
                moveNext={handleNext}
            />
        </div>
    );
}