import Link from "next/link";
import React from "react";
import DarkModeBtn from "./DarkModeBtn";

const Header = () => {
	return (
		<header className="text-[2vh] my-[2vh] md:text-[3vh] md:my-[4vh] flex place-content-evenly">
			<Link href="/">홈</Link>
			<Link href="/champions">챔피언 목록</Link>
			<Link href="/rotation">챔피언 로테이션</Link>
			<Link href="/items">아이템 목록</Link>
			<DarkModeBtn />
		</header>
	);
};

export default Header;
