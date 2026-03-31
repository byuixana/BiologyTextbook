import { useEffect, useState } from 'react'

const moduleLinks = {
    'Skull': './skull_questions.json',
    'Arm': './arm_questions.json',
    'Trunk': './trunk_questions.json',
    'Leg and Joints': './leg_joints_questions.json'
}

const moduleNames = Object.keys(moduleLinks)

export default function LabDeckSelector({ onSelection }){
    const [selectedModule, setSelectedModule] = useState(moduleNames[0] ?? '')

    // const selectLink = (selection) => {
    //     setCurLink(selection);
    // }

    useEffect(() => {
        if (!selectedModule) return;
        onSelection(moduleLinks[selectedModule]);
    }, [onSelection, selectedModule]);

    const handleSelection = (e) => {
        setSelectedModule(e.target.value);
    }

    return (
        <div className="flex w-full min-w-0 max-w-full flex-row items-center justify-start gap-1 p-1 sm:w-3/5">
            <label htmlFor="deck-select" className="
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
                basis-[40%] sm:basis-[38%]
            ">Select a Deck</label>
            <select
                id="deck-select"
                value={selectedModule}
                onChange={handleSelection}
                className="hide-selected-count 
                        box-border
                    flex-1
                    w-0
                        text-sm sm:text-base
                        p-1
                        outline-blue-500
                        outline
                        h-7 sm:h-8
                        ml-0
                        mr-0
                        min-w-0
                        max-w-full
                        overflow-hidden
                        text-ellipsis
                        whitespace-nowrap">
                {/* Generates an option in the select menu for each key */}
                    {moduleNames.map(name => (
                        <option key={name} value={name}>
                            {name}
                        </option>
                    ))
                }
            </select>
        </div>
    )
    
}

