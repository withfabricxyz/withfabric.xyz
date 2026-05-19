import Link from "next/link";
import Image from "next/image";
import { getPosts } from "./get-posts";
import { MarketNetwork } from "../../components/Homepage/MarketNetwork";

export const metadata = {
	title: "Posts",
};

function formatDate(dateStr) {
	if (!dateStr) return null;
	return new Date(dateStr).toLocaleDateString("en-US", {
		month: "long",
		day: "2-digit",
		year: "numeric",
		timeZone: "UTC",
	});
}

export default async function PostsPage() {
	const posts = await getPosts();

	return (
		<div data-pagefind-ignore="all" className="not-prose mx-auto max-w-[614px] px-4 pt-[100px] pb-20">
			<div className="mb-[100px] flex justify-center">
				<MarketNetwork />
			</div>

			<ul
				className="flex flex-col gap-[40px]"
				style={{ listStyle: "none", padding: 0, margin: 0 }}
			>
				{posts.map((post, index) => (
					<li key={post.route} style={{ listStyle: "none", opacity: 0, animation: `hero-fade-in 4s cubic-bezier(0.2,0.9,0.3,1) ${300 + index * 150}ms forwards` }}>
						<Link
							href={post.route}
							className="group flex flex-col gap-10 no-underline"
							style={{ color: "inherit" }}
						>
							<div className="relative aspect-[21/9] overflow-hidden rounded-[2px] grayscale transition-[filter] duration-500 ease-in-out group-hover:grayscale-0">
								{(post.frontMatter?.thumbnail || post.frontMatter?.headerImage) && (
									<Image
										src={post.frontMatter.thumbnail ?? post.frontMatter.headerImage}
										alt=""
										fill
										sizes="(min-width: 640px) 614px, 100vw"
										className="object-cover object-top pointer-events-none"
										style={{ margin: 0 }}
									/>
								)}
							</div>

							<div className="flex flex-col gap-5">
								<p
									className="font-['Sohne_Breit'] font-medium not-italic text-[20px] leading-[24px] overflow-hidden text-ellipsis whitespace-nowrap m-0"
									style={{ color: "var(--color-primary)", fontFeatureSettings: "'calt' 0" }}
								>
									{post.frontMatter?.title ?? post.name}
								</p>
								{post.frontMatter?.date && (
									<p
										className="font-['Sohne_Breit'] font-normal not-italic text-[12px] leading-[14px] m-0"
										style={{ color: "var(--color-secondary)", fontFeatureSettings: "'calt' 0" }}
									>
										{formatDate(post.frontMatter.date)}
									</p>
								)}
							</div>
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
}
