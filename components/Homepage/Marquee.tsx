"use client";

import { useState } from "react";

/** Loop duration in seconds per full cycle. Lower = faster. Pass a custom `duration` prop to override per row. */
export const MARQUEE_DURATION = 10;

export default function Marquee({
	children,
	direction = "rtl",
	gap = 40,
	duration = MARQUEE_DURATION,
}) {
	const [paused, setPaused] = useState(false);

	const groupStyle = {
		gap: `${gap}px`,
		// Trailing padding matches the gap so the loop seam looks identical to spacing between logos
		paddingRight: `${gap}px`,
	};

	return (
		// biome-ignore  lint/a11y/noStaticElementInteractions: <>
		<div
			className="overflow-hidden w-full"
			onMouseEnter={() => setPaused(true)}
			onMouseLeave={() => setPaused(false)}
		>
			<div
				className="flex w-max items-center"
				style={{
					animation: `marquee-${direction} ${duration}s linear infinite`,
					animationPlayState: paused ? "paused" : "running",
				}}
			>
				<div className="flex shrink-0 items-center" style={groupStyle}>
					{children}
				</div>
				<div
					className="flex shrink-0 items-center"
					style={groupStyle}
					aria-hidden="true"
				>
					{children}
				</div>
			</div>
		</div>
	);
}
