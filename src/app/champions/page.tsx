import { fetchChampionList } from "@/utils/serverApi";
import type { Metadata } from "next";
import ChampCard from "@/components/ChampCard";

export const metadata: Metadata = {
	title: "롤 챔피언 목록",
	description: "롤 챔피언 목록입니다.",
};

const ChampionsPage = async () => {
	const allChamps = await fetchChampionList();
	return (
		<>
			{allChamps.map((champ) => {
				return <ChampCard champ={champ} />;
			})}
		</>
	);
};

export default ChampionsPage;
