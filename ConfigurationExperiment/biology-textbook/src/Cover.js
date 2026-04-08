import { useLab } from './lib/context/LabContext';
import labs from './labs';

export default function Cover({img_src}){

    const { setSelectedLab } = useLab();

    return (
        <div className="h-screen w-screen bg-stone-200 flex items-start justify-start overflow-hidden">
            {/* Inner group — image drives the height, menu stretches to match */}
            <div className="flex items-stretch">
                <img
                    src={img_src || process.env.PUBLIC_URL + '/Bio264L_SpiralCover_cropped.webp'}
                    alt="Bio 264 Lab Manual Cover"
                    className="max-h-screen w-auto"
                    style={{ maxWidth: 'calc(100vw - 6rem)' }}
                />
                <div className="w-24 sm:w-40 md:w-56 lg:w-64 flex-shrink-0 flex flex-col overflow-y-auto border-l border-blue-300" style={{ backgroundColor: '#0a1f44' }}>
                    {Object.entries(labs).map(([key, lab]) => (
                        <div key={key} onClick={() => setSelectedLab(key)} className="border-b border-blue-300 px-1 py-2 sm:px-2 sm:py-3 md:px-3 md:py-4 lg:px-4 lg:py-5 cursor-pointer hover:bg-blue-900 flex items-center">
                            <h2 className="text-[10px] sm:text-xs md:text-sm font-semibold text-white leading-tight">{lab.name}</h2>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}