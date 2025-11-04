import { getPosts } from "../get-posts"
import PostHeader from "./PostHeader"
import "../Posts.css";
import SparkColor from "../../../components/SparkColor";

export default async function PostLayout({ children }) {
  const posts = await getPosts()
  
  return (
    <div className="post-layout">
      <PostHeader posts={posts} />
      <div className="post-content">
        {children}
      </div>
      <SparkColor />
    </div>
  )
}