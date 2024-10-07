import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import fioraImage from "@/public/assets/fiora.webp";
import jinxImage from "@/public/assets/jinx.webp";
import teemoImage from "@/public/assets/teemo.webp";

export const metadata: Metadata = {
	title: "리그 오브 레전드 정보 앱",
	description: "Riot Games API를 활용하여 챔피언과 아이템 정보를 제공합니다.",
};

const Home = () => {
	return (
		<div className="flex flex-col items-center gap-[2vh] mt-[5vh]">
			<h1>리그 오브 레전드 정보 앱</h1>
			<p className="text-gray-500">
				Riot Games API를 활용하여 챔피언과 아이템 정보를 제공합니다.
			</p>
			<Link href="/champions" className={linkStyle}>
				<Image src={fioraImage} height={500} width={500} alt="피오라 이미지" />
				<p className={pStyle}>챔피언 목록 보기</p>
			</Link>
			<Link href="/rotation" className={linkStyle}>
				<Image src={jinxImage} height={500} width={500} alt="징크스 이미지" />
				<p className={pStyle}>금주 로테이션 확인</p>
			</Link>
			<Link href="/items" className={linkStyle}>
				<Image src={teemoImage} height={500} width={500} alt="티모 이미지" />
				<p className={pStyle}>아이템 목록 보기</p>
			</Link>
		</div>
	);
};

export default Home;

const linkStyle = "flex flex-col items-center gap-[1vh]";
const pStyle = "text-[--gold] text-[2vh]";
