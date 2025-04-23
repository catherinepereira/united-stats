export enum Stat {
	MedianHomePrice = "MedianHomePrice",
	StatePopulation = "StatePopulation",
	AveragePrecipitation = "AveragePrecipitation",
}

export enum DataType {
	Numerical,
	Categorical,
}

export interface StatDefinition {
	name: string;
	filePath: string;
	type: DataType;
}

export const Stats: { [key in Stat]: StatDefinition } = {
	[Stat.MedianHomePrice]: {
		name: "Median Home Price",
		filePath: "median-home-price", // make sure year is specified here somewhere
		type: DataType.Numerical,
	},
	[Stat.StatePopulation]: {
		name: "State Population",
		filePath: "state-population",
		type: DataType.Numerical,
	},
	[Stat.AveragePrecipitation]: {
		name: "Average Precipitation",
		filePath: "average-precipitation",
		type: DataType.Numerical,
	},
};
