"use client";

import { ThemeProvider } from "next-themes";

const DarkModeProvider = ({ children }: { children: React.ReactNode }) => {
	return <ThemeProvider attribute="class">{children}</ThemeProvider>;
};

export default DarkModeProvider;
