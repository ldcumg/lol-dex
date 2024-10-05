import { Suspense } from "react";
import "./globals.css";
import Link from "next/link";
import Loading from "../components/Loading";
import "garlic-toast/style.css";
// import { fetchVersions } from "@/utils/serverApi";

export const version = "14.19.1";
// await fetchVersions();

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body>
				<nav className="text-[2vh] my-[2vh] md:text-[3vh] md:my-[4vh] flex place-content-evenly">
					<Link href="/">홈</Link>
					<Link href="/champions">챔피언 목록</Link>
					<Link href="/items">아이템 목록</Link>
					<Link href="/rotation">챔피언 로테이션</Link>
				</nav>
				<Suspense fallback={<Loading />}>{children}</Suspense>
			</body>
		</html>
	);
}
