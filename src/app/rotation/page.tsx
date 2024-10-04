"use client";

import { BASE_URL } from "@/constant/baseUrl";
import { Champion } from "@/types/Champion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { version } from "../layout";
import Link from "next/link";

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
		<div>
			{rotation.map((champ) => {
				return (
					<Link href={`/champions/${champ.id}`} key={champ.key}>
						<Image
							src={`${BASE_URL}/cdn/${version}/img/champion/${champ.image.full}`}
							alt={`${champ.name} 이미지`}
							width={80}
							height={80}
						/>
						<h4>{champ.name}</h4>
					</Link>
				);
			})}
		</div>
	);
};

export default RotationPage;
