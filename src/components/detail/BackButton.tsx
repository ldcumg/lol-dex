"use client";

import { useRouter } from "next/navigation";
import React from "react";

const BackButton = () => {
	const route = useRouter();
	return <button className="mx-auto rounded w-[10vw] text-[2vh]" onClick={route.back}>뒤로가기</button>;
};

export default BackButton;
