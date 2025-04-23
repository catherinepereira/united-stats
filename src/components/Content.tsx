"use client"
import Map from "@/components/Map";
import StatBox from "@/components/StatBox";
import { Stat } from "@/data/statdefinition";
import { useState } from "react";

const ContentSection: React.FC = () => {
    const [selectedStat, setSelectedStat] = useState<Stat | undefined>(undefined);

    const onSelectStat = (stat: Stat | undefined): void => {
        console.log("Selecting stat")
        if (stat === selectedStat) return;
        console.log("Selected stat")
        setSelectedStat(stat)
    }
    
    return (
        <div className="flex gap-6">
            <div className="basis-2/3 my-10 ml-10">
                <Map selectedStat={selectedStat}/>
                {/* <StatList selectedStat={selectedStat}/> */}
            </div>
            <div className="basis-1/3 my-10 mr-10">
                <StatBox selectedStat={selectedStat} onSelectStat={onSelectStat} />
            </div>
        </div>
    )
};

export default ContentSection;