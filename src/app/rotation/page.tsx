"use client";

import { Champion } from "@/types/Champion";
import { useEffect, useState } from "react";
import ChampCard from "@/components/detail/ChampCard";

const RotationPage = () => {
	const [rotation, setRotation] = useState<Champion[]>([]);
	const [error, setError] = useState<boolean>(false);

	useEffect(() => {
		fetch("api/rotation", {
			method: "GET",
		})
			.then((res) => {
				if (!res.ok) {
					setError(true);
					return;
				}

				return res.json();
			})
			.then(setRotation);
	}, []);

	if (error) throw new Error("로테이션 정보를 불러오지 못 했습니다.");

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
