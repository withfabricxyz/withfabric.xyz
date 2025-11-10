import Footer from "../Footer";
import Spark from "../Spark";
import "./Homepage.css";
import Link from "next/link";

export default function Homepage() {
  return (
    <div className="page">
      <img className="market-network"src="/images/market-network.svg" alt="" />
      <div className="homepage-content">
        <Footer />
        <img className="fabric"src="/images/fabric.svg" alt="" />
      </div>
    </div>
  )
}