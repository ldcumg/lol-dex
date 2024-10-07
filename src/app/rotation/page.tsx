"use client";

import { Champion } from "@/types/Champion";
import { useEffect, useState } from "react";
import ChampCard from "@/components/ChampCard";
// import "garlic-toast/style.css";
// import { toast, ToastContainer } from "garlic-toast";

const RotationPage = () => {
	const [rotation, setRotation] = useState<Champion[]>([]);

	useEffect(() => {
		try {
			fetch("api/rotation", {
				method: "GET",
			})
				.then((res) => res.json())
				.then(setRotation);
		} catch (error) {
			console.error(error);
			// toast.error("데이터를 불러오지 못 했습니다.");
		}
	}, []);

	return (
		<>
			{/* <ToastContainer isFold position="t-l" time={5000} /> */}
			<h2>챔피언 로테이션</h2>
			<div className="custom-grid">
				{rotation.map((champ) => (
					<ChampCard champ={champ} key={champ.key} />
				))}
			</div>
		</>
	);
};

export default RotationPage;
