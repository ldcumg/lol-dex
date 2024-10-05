"use client";

import { useRouter } from "next/navigation";
import { startTransition } from "react";

export default function Error({
	error,
	reset,
}: {
	error: Error & { digest?: string };
	reset: () => void;
}) {
	const { refresh } = useRouter();

	return (
		<div>
			<h2>Something went wrong!</h2>
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
}
