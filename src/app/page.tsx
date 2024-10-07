import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "리그 오브 레전드 정보 앱",
	description: "Riot Games API를 활용하여 챔피언과 아이템 정보를 제공합니다.",
};

const Home = () => {
	return (
		<div>
			<h1>리그 오브 레전드 정보 앱</h1>
			<p className="text-gray-500">
				Riot Games API를 활용하여 챔피언과 아이템 정보를 제공합니다.
			</p>
		</div>
	);
};

export default Home;
