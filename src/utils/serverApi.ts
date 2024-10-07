"use server";

import { BASE_URL } from "@/constant/baseUrl";
import { Champion } from "@/types/Champion";
import { ItemInfo } from "@/types/Item";

export const fetchVersions = async (): Promise<number> => {
	const response = await fetch(`${BASE_URL}/api/versions.json`, {
		method: "GET",
	});

	if (!response.ok) {
		throw new Error("버전 정보를 불러오지 못 했습니다.");
	}

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

	if (!response.ok) {
		throw new Error("챔피언 리스트를 불러오지 못 했습니다.");
	}

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

	if (!response.ok) {
		throw new Error("챔피언 상세정보를 불러오지 못 했습니다.");
	}

	const { data } = await response.json();

	return data[id];
};

type AllItems = {
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

	if (!response.ok) {
		throw new Error("로테이션 챔피언 정보를 불러오지 못 했습니다.");
	}

	const { data }: AllItems = await response.json();
	const items = Object.entries(data).filter((i) => i[1].maps["21"]);

	return items;
};
