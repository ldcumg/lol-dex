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
			<h1>금주의 무료 챔피언</h1>
			{rotation.map((champ) => (
				<ChampCard champ={champ} />
			))}
		</>
	);
};

export default RotationPage;
