import { fetchChampionList } from "@/utils/serverApi";
import { NextResponse } from "next/server";

const API_KEY = process.env.NEXT_PUBLIC_RIOT_API_KEY;

export const GET = async () => {
	const response = await fetch(
		"https://kr.api.riotgames.com/lol/platform/v3/champion-rotations",
		{
			method: "GET",
			headers: {
				"X-Riot-Token": API_KEY ?? "",
			},
		}
	);
	const { freeChampionIds } = await response.json();
	const championList = await fetchChampionList();
	const freeChampions = championList.filter((champ) =>
		freeChampionIds.includes(Number(champ.key))
	);

	return new NextResponse(JSON.stringify(freeChampions), {
		status: 200,
		headers: {
			"Content-Type": "application/json",
		},
	});
};
