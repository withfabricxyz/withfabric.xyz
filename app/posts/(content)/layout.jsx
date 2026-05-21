import { getPosts } from "../get-posts";
import PostHeader from "./PostHeader";
import "../Posts.css";
import Spark from "../../../components/Spark";
import Link from "next/link";
import { ThemePicker } from "../../../components/ThemePicker";
import NewsletterForm from "../../../components/NewsletterForm";

export default async function PostLayout({ children }) {
	const posts = await getPosts();

	return (
		<div className="post-layout">
			<PostHeader posts={posts} />
			<div className="post-content">
				<div className="body--copy">{children}</div>
				<NewsletterForm />
			</div>
			<Link href="https://blog.withfabric.xyz/posts">
				<Spark colored />
			</Link>
			<ThemePicker />
		</div>
	);
}
