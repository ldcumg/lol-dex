"use client";

import { useTheme } from "next-themes";

const DarkModeBtn = () => {
	const { theme, setTheme } = useTheme();

	return (
		<div>
			<button
				onClick={() => {
					setTheme(theme === "dark" ? "light" : "dark");
				}}>
				{theme === "dark" ? <div>라이트 모드</div> : <div>다크 모드</div>}
			</button>
		</div>
	);
};

export default DarkModeBtn;

