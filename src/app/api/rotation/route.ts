import { fetchChampionList } from "@/utils/serverApi";
import { NextResponse } from "next/server";

const API_KEY = process.env.NEXT_PUBLIC_RIOT_API_KEY;

/** 주간 무료 챔피언 목록을 가져오는 함수 */
export const GET = async () => {
	// 무료 챔피언들의 id리스트 불러오기
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

	// 전체 챔피언 목록에서 무료 챔피언 id에 해당하는 챔피언 목록 찾아내기
	const championList = await fetchChampionList();
	
	const freeChampions = championList.filter((champ) =>
		freeChampionIds.includes(Number(champ.key))
	);

	return NextResponse.json(freeChampions);
};
