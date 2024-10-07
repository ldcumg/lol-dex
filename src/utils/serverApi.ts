"use server";

import { BASE_URL } from "@/constant/baseUrl";
import { Champion } from "@/types/Champion";
import { ItemInfo } from "@/types/Item";

export const fetchVersions = async (): Promise<number> => {
	const response = await fetch(`${BASE_URL}/api/versions.json`, {
		method: "GET",
	});
	const versions = await response.json();

	return versions[0];
};

export const fetchChampionList = async (): Promise<Champion[]> => {
	const version = await fetchVersions();

	const response = await fetch(
		`${BASE_URL}/cdn/${version}/data/ko_KR/champion.json`,
		{
			method: "GET",
			next: {
				revalidate: 86400,
			},
		}
	);
	console.log("response", response.ok);
	const { data } = await response.json();

	return Object.values(data);
};

export const fetchChampionDetail = async (id: string): Promise<Champion> => {
	const version = await fetchVersions();

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
	data: Record<string, ItemInfo>;
};

export const fetchItemList = async (): Promise<Array<[string, ItemInfo]>> => {
	const version = await fetchVersions();

	const response = await fetch(
		`${BASE_URL}/cdn/${version}/data/ko_KR/item.json`,
		{
			method: "GET",
			cache: "no-store",
		}
	);
	const { data }: beforeItems = await response.json();
	console.log("data", data);
	const items = Object.entries(data).filter((i) => i[1].maps[21]);

	return items;
};
