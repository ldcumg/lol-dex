import { version } from "@/app/layout";
import { BASE_URL } from "@/constant/baseUrl";
import { Champion } from "@/types/Champion";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
	champ: Champion;
};

const ChampCard = ({ champ }: Props) => {
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
};

export default ChampCard;
