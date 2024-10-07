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
		<div>
			<h2>오류가 발생했습니다.</h2>
			<h2>{error.message}</h2>
			<button
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
