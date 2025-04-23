"use client"
import { Stat, StatDefinition, Stats } from "@/data/statdefinition";
import { useState } from "react";


const StatBox: React.FC = () => {
    const [selectedStat, setSelectedStat] = useState<Stat | undefined>(undefined);
    const stats = Object.values(Stat).map((stat) => [stat, Stats[stat]]) as [Stat, StatDefinition][];

    const filteredStats = stats.filter((stat) => {
        if (selectedStat === undefined) return true;
        return selectedStat === stat[0]; // go by name instead
    });

    return (
        <div className="border border-gray-700 p-4 rounded-2xl bg-gray-900 shadow-lg">
            {/* Title */}
            <h2 className="text-lg font-semibold text-white">Stats</h2>


            {/* Search Bar */}

        
            {/* Stats List */}
            <div className="mt-2">
                <div className="flex flex-wrap">
                    {stats.map(([stat, def], _) => (
                    <p key={stat} className="mr-2 mb-2 px-3 py-1 text-sm bg-cyan-500/15 text-cyan-300 rounded-md">
                        {def.name}
                    </p>
                    ))}
                </div>
            </div> 
        </div>
    );
};

export default StatBox;
