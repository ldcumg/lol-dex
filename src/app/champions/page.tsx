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
			<h2>챔피언 목록</h2>
			<div className="custom-grid">
				{allChamps.map((champ) => {
					return <ChampCard champ={champ} key={champ.key} />;
				})}
			</div>
		</>
	);
};

export default ChampionsPage;
