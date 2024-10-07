import BackButton from "@/components/detail/BackButton";
import { BASE_URL } from "@/constant/baseUrl";
import { fetchChampionDetail } from "@/utils/serverApi";

type Props = {
	params: {
		id: string;
	};
};

export function generateMetadata({ params }: Props) {
	return {
		title: `${params.id} 상세정보`,
		description: `${params.id} 상세정보입니다.`,
	};
}

const DetailPage = async ({ params }: Props) => {
	const { id } = params;

	const champion = await fetchChampionDetail(id);
	return (
		<div className="px-[20vw] flex flex-col gap-[2vh]">
			<h1>{champion.name}</h1>
			<h4>{champion.title}</h4>
			<img
				className="mx-auto w-[45vw] h-[25vw]"
				src={`${BASE_URL}/cdn/img/champion/splash/${champion.id}_0.jpg`}
				alt={`${champion.name} 이미지`}
			/>
			<p className="text-[--red] text-[1.5vh]">{champion.lore}</p>
			<span className="text-[--red] text-[1.5vh]">
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
