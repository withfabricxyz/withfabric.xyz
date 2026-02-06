"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function PostHeader({ posts }) {
	const pathname = usePathname();
	const [currentPost, setCurrentPost] = useState(null);

	useEffect(() => {
		const segments = pathname.split("/").filter(Boolean);
		const postIndex = segments.indexOf("posts");
		const postSlug =
			postIndex !== -1 && segments[postIndex + 1]
				? segments[postIndex + 1]
				: null;

		if (postSlug && posts) {
			const post = posts.find(
				(p) =>
					p.name === postSlug ||
					p.route === `/posts/${postSlug}` ||
					p.route.includes(`/${postSlug}`),
			);
			setCurrentPost(post);
		}
	}, [pathname, posts]);

	if (!currentPost?.frontMatter?.headerImage) {
		return null;
	}

	return (
		<div
			className="post-header-image"
			style={{
				backgroundImage: `url(${currentPost.frontMatter.headerImage})`,
			}}
		/>
	);
}
