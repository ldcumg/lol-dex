"use server";

import { version } from "@/app/layout";
import { BASE_URL } from "@/constant/baseUrl";
import { Champion } from "@/types/Champion";
import { Item } from "@/types/Item";

export const fetchVersions = async (): Promise<number> => {
	const response = await fetch(`${BASE_URL}/api/versions.json`, {
		method: "GET",
	});
	const versions = await response.json();

	return versions[0];
};

export const fetchChampionList = async (): Promise<Champion[]> => {
	const response = await fetch(
		`${BASE_URL}/cdn/${version}/data/ko_KR/champion.json`,
		{
			method: "GET",
			next: {
				revalidate: 86400,
			},
		}
	);
	const { data } = await response.json();

	return Object.values(data);
};

export const fetchChampionDetail = async (id: string): Promise<Champion> => {
	const response = await fetch(
		`${BASE_URL}/cdn/${version}/data/ko_KR/champion/${id}.json`,
		{
			method: "GET",
		}
	);
	const { data } = await response.json();

	return data[id];
};

type beforeItems = {
	data: Record<string, Item>;
};

export const fetchItemList = async (): Promise<Item[]> => {
	const response = await fetch(
		`${BASE_URL}/cdn/${version}/data/ko_KR/item.json`,
		{
			method: "GET",
			cache: "no-store",
		}
	);
	const { data }: beforeItems = await response.json();
	const items = Object.values(data).filter((i) => i.maps[21]);

	return items;
};
