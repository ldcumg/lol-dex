"use client";

import { useRouter } from "next/navigation";
import { startTransition } from "react";

type Props = {
	error: Error & { digest?: string };
	reset: () => void;
};

const Error = ({ error, reset }: Props) => {
	const { refresh } = useRouter();

	return (
		<div className="flex flex-col items-center mt-[20vh] gap-[2vh]">
			<h2>오류가 발생했습니다.</h2>
			<h2>{error.message}</h2>
			<button
				className="text-[3vh]"
				onClick={() =>
					startTransition(() => {
						refresh();
						reset();
					})
				}>
				다시 시도
			</button>
		</div>
	);
};

export default Error;
