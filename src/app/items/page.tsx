import { BASE_URL } from "@/constant/baseUrl";
import { fetchItemList } from "@/utils/serverApi";
import Image from "next/image";
import { version } from "../layout";

const ItemPage = async () => {
	const items = await fetchItemList();

	return (
		<>
			{items.map((item) => {
				return (
					<>
						<Image
							src={`${BASE_URL}/cdn/${version}/img/item/${item.image.full}`}
							alt={`${item.name} 이미지`}
							height={80}
							width={80}
						/>
						<h4>{item.name}</h4>
					</>
				);
			})}
		</>
	);
};

export default ItemPage;
