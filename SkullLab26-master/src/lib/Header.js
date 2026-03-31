/**
 * A header component that displays a section title.
 *
 * @typedef {object} HeaderProps
 * @property {string} sectionTitle - The title to display in the header
 * 
 * @returns {JSX.Element} A header with the section title
 */

export default function Header({sectionTitle}){
    return (
    <header className="flex justify-center 
    bg-[#1a5e80]
    items-center w-screen min-h-9 h-16">
            <h1 id='sectionTitle'
            className="font-bold text-white"> {sectionTitle} </h1>
    </header>
    )
}
