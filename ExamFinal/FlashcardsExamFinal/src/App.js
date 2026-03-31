/**
 * Main application component for the flashcard app.
 * Manages deck loading, card shuffling, and renders the main UI.
 *
 * @returns {JSX.Element} The main flashcard application
 */

import {useState, useEffect} from 'react'
import { useFlashcardContext } from './context/FlashcardContext.js';
import FlashcardContextProvider from './context/FlashcardContext.js';
import CardList from './CardList.js';
import {shuffleCards, addFlags} from './utils/cardProcessing.js'
import Filter from './Filter.js'
import LabDeckSelector from './LabDeckSelector.js';

const DEFAULT_DECK_LINK = './nervous_system_questions.json';

function AppContent() {

  const { setCardArray } = useFlashcardContext();
  
  const [isLoading, setIsLoading] = useState(true);

  const [link, setLink] = useState(DEFAULT_DECK_LINK);

  // const link = "./skull_questions_restructured.json"
  
  useEffect(() => {
    console.log('Link in', link)
    if (!link) return;

    let isCancelled = false;
    setIsLoading(true);

    fetch(link)
    .then(response => response.json())
    .then(data => {
      if (isCancelled) return;
      const cardArray = Object.entries(data).map(([key, card], index) => {
        const candidateId = Number(card?.id ?? key);
        const normalizedId = Number.isNaN(candidateId) ? index + 1 : candidateId;
        return {
          ...card,
          id: normalizedId,
        };
      });
      const shuffledCardArray = shuffleCards(cardArray);
      addFlags(shuffledCardArray);
      setCardArray(shuffledCardArray);
      setIsLoading(false);
    })
    .catch(error => {
      if (isCancelled) return;
      console.error("Error fetching data:", error);
      setIsLoading(false);
    });

    return () => {
      isCancelled = true;
    };
  }, [setCardArray, link]);

  return (
    <>
      <div className='flex 
        justify-center items-center
        bg-blue-200
        w-full
        p-4
        shadow-md'> 
        <h1 className='m-0 box-border w-full px-3 text-center text-2xl font-bold sm:text-3xl'>Bio 264 Flashcards</h1>
      </div>
      <div className="flex box-border w-full max-w-[520px] flex-col items-stretch justify-center gap-2 px-3 py-2 sm:flex-row sm:items-center sm:px-0">
        <LabDeckSelector onSelection={setLink} />
        <Filter />
      </div>
      
      {isLoading ? (
        <div>Loading flashcards...</div>
      ) : (
        <CardList section="" />
      )}
    </>
  );
}

function App() {
  return (
    <div className='flex min-h-screen w-full max-w-full flex-col items-center overflow-x-hidden bg-slate-50'>
      <FlashcardContextProvider>
        <AppContent />
      </FlashcardContextProvider>
    </div>
  );
}

export default App;
