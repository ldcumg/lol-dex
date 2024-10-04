export type Item = {
	name: string;
	description: string;
	colloq: string;
	plaintext: string;
	from: string[];
	into: string[];
	image: {
		full: string;
		sprite: string;
		group: string;
		x: number;
		y: number;
		w: number;
		h: number;
	};
	gold: {
		base: number;
		purchasable: boolean;
		total: number;
		sell: number;
	};
	tags: string[];
	maps: {
		[mapId: number]: boolean;
	};
	stats: {
		FlatMovementSpeedMod: number;
	};
};
