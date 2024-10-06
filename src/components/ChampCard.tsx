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
		<Link href={`/champions/${champ.id}`} className="card">
			<Image
				src={`${BASE_URL}/cdn/${version}/img/champion/${champ.image.full}`}
				alt={`${champ.name} 이미지`}
				width={100}
				height={100}
				priority
			/>
			<h4 className="text-[--red]">{champ.name}</h4>
			<p className="px-[2vw]">{champ.title}</p>
		</Link>
	);
};

export default ChampCard;
