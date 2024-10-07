"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const DarkModeBtn = () => {
	const [mounted, setMounted] = useState<boolean>(false);
	const { theme, setTheme } = useTheme();
	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		return null;
	}
	
	return (
		<div>
			<button
				onClick={() => {
					setTheme(theme === "dark" ? "light" : "dark");
				}}>
				<div>{theme === "dark" ? "라이트 모드" : "다크 모드"}</div>
			</button>
		</div>
	);
};

export default DarkModeBtn;
