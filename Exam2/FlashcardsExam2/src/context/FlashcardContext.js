/**
 * Context provider for managing flashcard state, filtering, and navigation.
 * Handles card array, current index, selected cards, and filtering logic.
 *
 * @typedef {object} FlashcardContextProviderProps
 * @property {React.ReactNode} children - Child components that will have access to the context
 * 
 * @returns {JSX.Element} A context provider component for flashcard state
 */

import { createContext, useContext, useState, useEffect } from "react";

const FlashcardContext = createContext(null);

export default function FlashcardContextProvider({ children }) {
    // State - cardArray will be set from App.js
    const [cardArray, setCardArray] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedCardIds, setSelectedCardIds] = useState(new Set()); // For filtering

    // Get filtered cards (apply selection filter and filter out known cards)
    const getFilteredCards = () => {
        return cardArray.filter((card) => 
            selectedCardIds.has(card.id) && !card.isKnown
        )
    };

    const filteredCards = getFilteredCards();

    // Automatically select all cards when cardArray changes (new deck)
    // and reset the filter so the dropdown reflects the current cards.
    useEffect(() => {
        if (cardArray.length > 0) {
            // Select all cards by default for the new deck
            const allIds = cardArray.map(card => card.id);
            setSelectedCardIds(new Set(allIds));
            // also reset index in case it was outside new bounds
            setCurrentIndex(0);
        }
    }, [cardArray]);

    // Create a new set for the deck each time, so the list in select remains the same. 
    const markCardAsKnown = (cardData) => {
        setSelectedCardIds((prev) => {
            const newSet = new Set(prev);
            newSet.delete(cardData.id);
            return newSet
        })
    }

    // Reset index when filtered cards change
    useEffect(() => {
        if (filteredCards.length > 0 && currentIndex >= filteredCards.length) {
            setCurrentIndex(0);
        } else if (filteredCards.length === 0 && currentIndex > 0) {
            setCurrentIndex(0);
        }
    }, [filteredCards.length, currentIndex]);

    // Navigation functions
    const nextCard = () => {
        if (filteredCards.length === 0) return;
        setCurrentIndex((prev) => {
            if (prev >= filteredCards.length - 1) {
                return 0; // Wrap around to first card
            }
            return prev + 1;
        });
    };
    // Get current card from filtered cards
    const currentCard = filteredCards.length > 0 && currentIndex < filteredCards.length 
        ? filteredCards[currentIndex] 
        : null;

    // Filtering functions
    const setCardSelection = (cardIds) => {
        setSelectedCardIds(new Set(cardIds));
        setCurrentIndex(0); // Reset to first card when filtering changes
    };

    const clearSelection = () => {
        const allIds = cardArray.map(card => card.id);
        setSelectedCardIds(new Set(allIds));
        setCurrentIndex(0);
    };



    const value = {
        // Data
        cardArray,
        setCardArray,
        filteredCards,
        currentCard,
        currentIndex,
        setCurrentIndex,
        selectedCardIds,
        // Navigation
        nextCard,
        // Filtering
        setCardSelection,
        clearSelection,
        // Card management
        markCardAsKnown,
    };

    return (
        <FlashcardContext.Provider value={value}>
            {children}
        </FlashcardContext.Provider>
    );
}

/**
 * Hook to access the flashcard context.
 * 
 * @returns {object} An object containing cardArray, filteredCards, currentCard, navigation functions, and filtering functions
 * @throws {Error} If used outside of FlashcardContextProvider
 */
export function useFlashcardContext() {
    const context = useContext(FlashcardContext);
    if (!context) {
        throw new Error("useFlashcardContext must be used within FlashcardContextProvider");
    }
    return context;
}