import Footer from "../Footer";
import Spark from "../Spark";
import "./Homepage.css";
import Link from "next/link";

export default function Homepage() {
return (
  <div className="homepage-content">
      <Link href="/about">
        <Spark />
      </Link>

      <h1 className="body--copy">Best-in-class swap routing launching 2026.</h1>

      <Footer />
    </div>
  )
}