import { getPosts } from "../get-posts"
import PostHeader from "./PostHeader"
import "../Posts.css";
import Spark from "../../../components/Spark";
import Link from "next/link";

export default async function PostLayout({ children }) {
  const posts = await getPosts()
  
  return (
    <div className="post-layout">
      <PostHeader posts={posts} />
      <div className="post-content">
        {children}
      </div>
      <Link href="/">
        <Spark colored />
      </Link>
    </div>
  )
}