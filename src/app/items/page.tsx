import { BASE_URL } from "@/constant/baseUrl";
import { fetchItemList, fetchVersions } from "@/utils/serverApi";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "롤 아이템 목록",
	description: "롤 아이템 목록입니다.",
};

const ItemPage = async () => {
	const items = await fetchItemList();
	const version = await fetchVersions();

	return (
		<>
			<h2>아이템 목록</h2>
			<div className="custom-grid">
				{items.map((item) => {
					return (
						<div key={item[0]} className="card">
							<Image
								src={`${BASE_URL}/cdn/${version}/img/item/${item[1].image.full}`}
								alt={`${item[1].name} 이미지`}
								height={80}
								width={80}
							/>
							<h4 className="text-[--red]">{item[1].name}</h4>
							<p className="px-[2vw]">{item[1].plaintext}</p>
						</div>
					);
				})}
			</div>
		</>
	);
};

export default ItemPage;
