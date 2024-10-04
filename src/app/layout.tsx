import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link";
// import "garlic-toast/style.css";
// import { fetchVersions } from "@/utils/serverApi";

const geistSans = localFont({
	src: "./fonts/GeistVF.woff",
	variable: "--font-geist-sans",
	weight: "100 900",
});
const geistMono = localFont({
	src: "./fonts/GeistMonoVF.woff",
	variable: "--font-geist-mono",
	weight: "100 900",
});

export const version = "14.19.1";
// await fetchVersions();

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
				<nav className="text-[5vh] my-[4vh] flex place-content-evenly">
					<Link href="/">홈</Link>
					<Link href="/champions">챔피언 목록</Link>
					<Link href="/items">아이템 목록</Link>
					<Link href="/rotation">챔피언 로테이션</Link>
				</nav>
				{children}
			</body>
		</html>
	);
}
