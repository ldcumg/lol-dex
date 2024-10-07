import { Suspense } from "react";
import "./globals.css";
import Link from "next/link";
import Loading from "../components/Loading";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "왜 안되니",
	description: "클라이언트 사이드 아니잖아",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="ko">
			<body>
				<header className="text-[2vh] my-[2vh] md:text-[3vh] md:my-[4vh] flex place-content-evenly">
					<Link href="/">홈</Link>
					<Link href="/champions">챔피언 목록</Link>
					<Link href="/items">아이템 목록</Link>
					<Link href="/rotation">챔피언 로테이션</Link>
				</header>
				<Suspense fallback={<Loading />}>{children}</Suspense>
			</body>
		</html>
	);
}
