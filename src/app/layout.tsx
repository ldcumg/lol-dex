import { Suspense } from "react";
import "./globals.css";
import Loading from "../components/Loading";
import type { Metadata } from "next";
import DarkModeProvider from "@/components/layout/DarkModeProvider";
import Header from "@/components/layout/Header";

export const metadata: Metadata = {
	title: "챔피언 로테이션",
	description: "무료 챔피언 목록입니다.",
};

type Props = Readonly<{ children: React.ReactNode }>;

const RootLayout = ({ children }: Props) => {
	return (
		<html lang="ko">
			<body className="dark:bg-black dark:text-white">
				<DarkModeProvider>
					<Header />
					<Suspense fallback={<Loading />}>{children}</Suspense>
				</DarkModeProvider>
			</body>
		</html>
	);
};

export default RootLayout;
