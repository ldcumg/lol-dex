import { BASE_URL } from "@/constant/baseUrl";
import { fetchItemList } from "@/utils/serverApi";
import Image from "next/image";
import { version } from "../layout";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "아이템 목록",
	description: "아이템 목록입니다.",
};

const ItemPage = async () => {
	const items = await fetchItemList();
	return (
		<>
			{items.map((item) => {
				return (
					<div key={JSON.stringify(item.into)}>
						<Image
							src={`${BASE_URL}/cdn/${version}/img/item/${item.image.full}`}
							alt={`${item.name} 이미지`}
							height={80}
							width={80}
						/>
						<h4>{item.name}</h4>
					</div>
				);
			})}
		</>
	);
};

export default ItemPage;
