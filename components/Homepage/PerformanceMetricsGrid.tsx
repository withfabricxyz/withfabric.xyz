"use client";

import * as RadixTooltip from "@radix-ui/react-tooltip";

export type HomepageMetric = {
	label: "Stability" | "Latency" | "Accuracy" | "Price";
	value: string;
};

const metricTooltips: Record<HomepageMetric["label"], string> = {
	Stability: "Average of successful quotes",
	Latency: "Average quote time",
	Accuracy: "Average delta between quote and execution",
	Price: "Average delta between executed price and the next-best executed price",
};

const metricLabels = Object.keys(metricTooltips) as HomepageMetric["label"][];

function Tooltip({
	trigger,
	content,
}: {
	trigger: React.ReactNode;
	content: React.ReactNode;
}) {
	return (
		<RadixTooltip.Root delayDuration={100}>
			<RadixTooltip.Trigger asChild>{trigger}</RadixTooltip.Trigger>
			<RadixTooltip.Portal>
				<RadixTooltip.Content
					sideOffset={8}
					className="z-50 max-w-xs rounded-xs bg-primary p-5 text-[12px] text-surface-base leading-9 [font-family:Sohne_Mono,monospace]"
				>
					{content}
				</RadixTooltip.Content>
			</RadixTooltip.Portal>
		</RadixTooltip.Root>
	);
}

function MetricLabel({ label }: { label: HomepageMetric["label"] }) {
	return (
		<Tooltip
			trigger={
				<span
					className="cursor-pointer font-breit font-normal text-[12px] leading-[1.1667em] text-secondary underline decoration-dotted decoration-[8%] hover:text-primary hover:decoration-solid"
					style={{ fontFeatureSettings: '"calt" 0' }}
				>
					{label}
				</span>
			}
			content={metricTooltips[label]}
		/>
	);
}

export function MetricsGrid({ metrics }: { metrics: HomepageMetric[] }) {
	return (
		<RadixTooltip.Provider>
			<div className="grid grid-cols-2 gap-x-10 gap-y-10 md:grid-cols-4 md:gap-x-20">
				{metrics.map((metric) => (
					<div
						key={metric.label}
						className="flex min-w-0 flex-col items-center gap-6 text-center md:gap-10"
					>
						<MetricLabel label={metric.label} />
						<span
							className="font-breit font-semibold text-[20px] leading-[1em] text-primary"
							style={{ fontFeatureSettings: '"calt" 0' }}
						>
							{metric.value}
						</span>
					</div>
				))}
			</div>
		</RadixTooltip.Provider>
	);
}

export function MetricsGridSkeleton() {
	return (
		<RadixTooltip.Provider>
			<div className="grid grid-cols-2 gap-x-10 gap-y-10 md:grid-cols-4 md:gap-x-20">
				{metricLabels.map((label) => (
					<div
						key={label}
						className="flex min-w-0 flex-col items-center gap-6 text-center md:gap-10"
					>
						<MetricLabel label={label} />
						<span
							aria-hidden
							className="block h-10 w-35 animate-pulse rounded-xs bg-surface-low"
						/>
					</div>
				))}
			</div>
		</RadixTooltip.Provider>
	);
}
