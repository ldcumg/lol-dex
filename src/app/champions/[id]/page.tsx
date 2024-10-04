import { version } from "@/app/layout";
import { BASE_URL } from "@/constant/baseUrl";
import { fetchChampionDetail } from "@/utils/serverApi";
import Image from "next/image";

type Props = {
	params: {
		id: string;
	};
};

export function generateMetadata({ params }: Props) {
	console.log("params", params);
	return {
		title: params.id,
		description: params.id,
	};
}

const DetailPage = async ({ params }: Props) => {
	const { id } = params;
	const champion = await fetchChampionDetail(id);
	return (
		<div>
			<h1>{champion.name}</h1>
			<h3>{champion.title}</h3>
			<Image
				src={`${BASE_URL}/cdn/${version}/img/champion/${champion.image.full}`}
				alt={`${champion.name} 이미지`}
				width={300}
				height={300}
			/>
		</div>
	);
};

export default DetailPage;
