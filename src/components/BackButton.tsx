"use client";

import { useRouter } from "next/navigation";
import React from "react";

const BackButton = () => {
	const route = useRouter();
	return <button onClick={route.back}>뒤로가기</button>;
};

export default BackButton;
