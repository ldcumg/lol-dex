import { version } from "@/app/layout";
import BackButton from "@/components/BackButton";
import { BASE_URL } from "@/constant/baseUrl";
import { fetchChampionDetail } from "@/utils/serverApi";

export function generateMetadata({ params }: Props) {
	return {
		title: params.id,
		description: params.id,
	};
}

type Props = {
	params: {
		id: string;
	};
};

const DetailPage = async ({ params }: Props) => {
	const { id } = params;
	const champion = await fetchChampionDetail(id);

	return (
		<div className="px-[20vw] flex flex-col gap-[2vh]">
			<h1>{champion.name}</h1>
			<h4>{champion.title}</h4>
			<img
				className="mx-auto"
				src={`${BASE_URL}/cdn/${version}/img/champion/${champion.image.full}`}
				alt={`${champion.name} 이미지`}
				width={300}
				height={300}
			/>
			<p className="text-[--red]">{champion.lore}</p>
			<span className="text-[--red]">
				<h6>스탯</h6>
				<ol>
					<li>공격력 : {champion.info.attack}</li>
					<li>주문력 : {champion.info.magic}</li>
					<li>방어력 : {champion.info.defense}</li>
					<li>난이도 : {champion.info.difficulty}</li>
				</ol>
			</span>
			<BackButton />
		</div>
	);
};

export default DetailPage;
