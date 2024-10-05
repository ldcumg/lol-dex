"use client";

import { Champion } from "@/types/Champion";
import { useEffect, useState } from "react";
import ChampCard from "@/components/ChampCard";

const RotationPage = () => {
	const [rotation, setRotation] = useState<Champion[]>([]);

	useEffect(() => {
		fetch("api/rotation", {
			method: "GET",
		})
			.then((res) => res.json())
			.then(setRotation);
	}, []);

	return (
		<>
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
