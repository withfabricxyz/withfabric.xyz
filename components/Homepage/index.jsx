import Footer from "../Footer";
import Spark from "../Spark";
import "./Homepage.css";
import Link from "next/link";

export default function Homepage() {
  return (
    <div className="page">
      <div className="container">
        <img className="market-network" src="/images/market-network.svg" alt="Market-Network" />
        <Link href="/about"><img className="fabric" src="/images/fabric.svg" alt="Fabric" /></Link>
      </div>
    </div>
  )
}