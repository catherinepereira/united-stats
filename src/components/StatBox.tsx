"use client"
import { Stat, StatDefinition, Stats } from "@/data/statdefinition";

type Props = {
    selectedStat: Stat | undefined;
    onSelectStat: (stat: Stat | undefined) => void;
};

const StatBox: React.FC<Props> = ({selectedStat, onSelectStat}) => {
    const stats = Object.values(Stat).map((stat) => [stat, Stats[stat]]) as [Stat, StatDefinition][];

    const filteredStats = stats.filter((stat) => {
        if (selectedStat === undefined) return true;
        return selectedStat === stat[0]; // go by name instead
    });

    return (
        <div className="border border-gray-300 p-4 rounded-2xl bg-white shadow-lg">
            {/* Title */}
            <h1 className="text-3xl font-light text-black">Stats</h1>

            {/* Search Bar */}
            <form className="max-w-sm mx-left mt-4">   
                <label form="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only">Search</label>
                <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg className="w-4 h-4 text-[#3696E3]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                        </svg>
                    </div>
                    <input type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for a stat..." required />
                </div>
            </form>
        
            {/* Stats List */}
            <div className="mt-6">
                <div className="flex-col flex gap-2">
                    {stats.map(([stat, def], _) => (
                        <button key={stat} className="mr-2 mb-2 px-3 py-1 text-sm bg-[#3696E3]/15 text-[#3696E3] rounded-lg" 
                            onClick={() => {
                                if (selectedStat === stat) {
                                    onSelectStat(undefined)
                                } else {
                                    onSelectStat(stat)
                                }
                            }}>
                            {def.name}
                        </button>
                    ))}
                </div>
            </div> 
        </div>
    );
};

export default StatBox;
