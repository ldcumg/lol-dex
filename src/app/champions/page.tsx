import { BASE_URL } from "@/constant/baseUrl";
import { fetchChampionList } from "@/utils/serverApi";
import Image from "next/image";
import { version } from "../layout";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "롤 챔피언 목록",
	description: "롤 챔피언 목록입니다.",
};

const ChampionsPage = async () => {
	const allChamps = await fetchChampionList();
	return (
		<>
			{allChamps.map((champ) => {
				return (
					<Link href={`/champions/${champ.id}`} key={champ.key}>
						<Image
							src={`${BASE_URL}/cdn/${version}/img/champion/${champ.image.full}`}
							alt={`${champ.name} 이미지`}
							width={80}
							height={80}
						/>
						<h4>{champ.name}</h4>
					</Link>
				);
			})}
		</>
	);
};

export default ChampionsPage;
