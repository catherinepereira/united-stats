"use client"
import { Stat } from "@/data/statdefinition";
import { geoAlbersUsa, geoPath, GeoPermissibleObjects, scaleQuantize } from "d3";
import { useEffect, useState } from "react";
import combinedData from "../data/combined-data.json";
import usStates from "../data/us-states.json";

type Props = {
    selectedStat: Stat | undefined;
};


const Map: React.FC<Props> = ({selectedStat}) => {
    const [domainRange, setDomainRange] = useState<[number, number]>([0, 100]);

    const features = usStates.features;
    const data = combinedData;

    useEffect(() => {
        if (!selectedStat) return;
        const getDomainRange = (stat: Stat): [number, number] => {
            const allValues = data.map((state) => state[stat]);
            return [Math.min(...allValues), Math.max(...allValues)];
        }
        setDomainRange(getDomainRange(selectedStat))
    }, [data, selectedStat])

    const colorScale = scaleQuantize<string>()
        .domain(domainRange)
        .range(["#CDE5F8", "#9BCBF1", "#3696E3", "#1B4B72", "#0E2639"])
       // .range(["#F0A29A", "#E87467",  "#E04534", "#A83427", "#70231A", "#38120D"]); // Light to Dark

    const getColor = (state: string): string => {
        if (!selectedStat) return colorScale(0);

        const stateData = data.find((v) => v.State === state);
        if (!stateData) return colorScale(0);
        
        return colorScale(stateData[selectedStat]);
    };

    return (
        <div>
            <svg viewBox="0 0 800 500" style={{ width: "100%", height: "auto" }}>
                {features.map((feature, index) => (
                    <path
                        key={index}
                        className="hover:fill-black transition hover:cursor-pointer hover:stroke-black"
                        d={geoPath().projection(geoAlbersUsa().scale(800).translate([400, 250]))(feature as GeoPermissibleObjects) || ""}
                        fill={getColor(feature.properties.NAME)}
                        stroke="white"
                        strokeWidth={0.5}
                    />
                ))}
            </svg>
        </div>
    );
};

export default Map;
