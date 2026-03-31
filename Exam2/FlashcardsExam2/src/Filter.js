/**
 * A filter component that allows users to select cards by answer.
 * Provides options to select all, deselect all, or filter by specific answers.
 *
 * @returns {JSX.Element} A filter dropdown with card answer options
 */

import { useFlashcardContext } from './context/FlashcardContext.js';
import { useMemo } from 'react';

export default function Filter(){
    const { cardArray, selectedCardIds, setCardSelection } = useFlashcardContext();

    const nameOptions = useMemo(() => {
        const grouped = new Map();

        cardArray
            .filter(card => Number.isFinite(card.id))
            .slice()
            .sort((a, b) => a.id - b.id)
            .forEach(card => {
                const name = card.answer || card.question || `Card #${card.id}`;
                if (!grouped.has(name)) {
                    grouped.set(name, []);
                }
                grouped.get(name).push(card.id);
            });

        return Array.from(grouped.entries(), ([name, ids]) => ({ name, ids }));
    }, [cardArray])

    function handleSelectionChange(event) {
        const selectedValues = Array.from(event.target.selectedOptions, opt => opt.value);
        
        // Handle special options
        if (selectedValues.includes('__SELECT_ALL__')) {
            const allIds = cardArray.map(card => card.id);
            setCardSelection(allIds);
            return;
        }
        
        if (selectedValues.includes('__DESELECT_ALL__')) {
            setCardSelection([]);
            return;
        }
    
        const idsToEnable = Array.from(
            new Set(
                nameOptions
                    .filter(option => selectedValues.includes(option.name))
                    .flatMap(option => option.ids)
            )
        );

        setCardSelection(idsToEnable); 
        // This replaces the set, immediately removing cards not in these IDs.
    };


    // This will change whenever selection or cardArray changes.
    const selectedValues = useMemo(() => {
        return nameOptions
            .filter(option => option.ids.some(id => selectedCardIds.has(id)))
            .map(option => option.name);
    }, [nameOptions, selectedCardIds]);

        
    return (
        <form className="flex w-full min-w-0 max-w-full flex-row items-center justify-end gap-1 p-1 sm:w-2/5">
            <label htmlFor="cards-select" className="
                flex
            box-border
            min-w-0
            shrink-0
                items-center
                justify-center
            overflow-hidden
            text-ellipsis
                text-center
                text-sm sm:text-base
            whitespace-nowrap
                p-1
                text-white 
                bg-blue-500 
                outline-blue-500
                outline
                h-7 sm:h-8
                basis-[38%] sm:basis-[40%]
            ">Cards</label>
            <select 
                id="cards-select"
                multiple 
                size="1"
                className="
                hide-selected-count 
                box-border
                max-w-full
                flex-1
                w-0
                text-sm sm:text-base
                p-1
                outline-blue-500
                outline
                h-7 sm:h-8
                min-w-0
                overflow-hidden
                text-ellipsis
                whitespace-nowrap
                "
                value={ selectedValues }

                onChange={handleSelectionChange}
            >
                <option value="__SELECT_ALL__">Select All</option>
                <option value="__DESELECT_ALL__">Deselect All</option>
                {nameOptions.map(option => (
                    <option key={option.name} value={option.name}>
                        {option.name}
                    </option>
                ))}
            </select>
        </form>
    );
}