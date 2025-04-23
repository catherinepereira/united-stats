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
	type: DataType;
	numericalRange?: {
		min: number;
		max: number;
	};
}

export const Stats: { [key in Stat]: StatDefinition } = {
	[Stat.MedianHomePrice]: {
		name: "Median Home Price",
		type: DataType.Numerical,
	},
	[Stat.StatePopulation]: {
		name: "State Population",
		type: DataType.Numerical,
	},
	[Stat.AveragePrecipitation]: {
		name: "Average Precipitation",
		type: DataType.Numerical,
	},
};
