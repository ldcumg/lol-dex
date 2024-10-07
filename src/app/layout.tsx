import { Suspense } from "react";
import "./globals.css";
import Link from "next/link";
import Loading from "../components/Loading";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "챔피언 로테이션",
	description: "무료 챔피언 목록입니다.",
};

type Props = Readonly<{
	children: React.ReactNode;
}>;

const RootLayout = ({ children }: Props) => {
	return (
		<html lang="ko">
			<body>
				<header className="text-[2vh] my-[2vh] md:text-[3vh] md:my-[4vh] flex place-content-evenly">
					<Link href="/">홈</Link>
					<Link href="/champions">챔피언 목록</Link>
					<Link href="/rotation">챔피언 로테이션</Link>
					<Link href="/items">아이템 목록</Link>
				</header>
				<Suspense fallback={<Loading />}>{children}</Suspense>
			</body>
		</html>
	);
};

export default RootLayout;
