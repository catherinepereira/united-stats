"use client";

import { geoAlbersUsa, geoPath, GeoPermissibleObjects, scaleQuantize } from "d3";
import combinedData from "../data/combined-data.json";
import usStates from "../data/us-states.json";


const USChoropleth: React.FC = () => {
    const features = usStates.features;

    const data = combinedData;

    const colorScale = scaleQuantize<string>()
        .domain([0, 1000000])
        .range(["#FFEDA0", "#FED976", "#FEB24C", "#FD8D3C", "#FC4E2A", "#E31A1C"]);

    const getColor = (state: string) => {
        return colorScale(data[state]["AveragePrecipitation"]);
    };

    return (
        <div>
            <h1>US Choropleth Map</h1>
            <svg viewBox="0 0 800 500" style={{ width: "100%", height: "auto" }}>
                {features.map((feature, index) => (
                <path
                    key={index}
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

export default USChoropleth;
