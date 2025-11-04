import Spark from "../../components/Spark";
import "./About.css";

export default function AboutPage({ children }) {
  return (
    <div className="about-page">
      <Spark />
      <div className="about-content">
        <p className="body--copy">
          Fabric was founded in 2022, with seed funding from Polychain Capital, Eniac Ventures, Mischief, and Reverie. The Fabric team is Jonny Mack, Dan Simpson, and Chris Douglas.
        </p>
        <p className="body--copy">
          Our first product was an onchain crowdfunding protocol and user interface, launched in April of 2023. ~$500k was raised by 377 campaigns from 916 unique contributors. Some of our favorites were Farcaster Meetup Fund, FarCon Fund, FABRIC on BASE, MODEL-WIP, and FarCon 2024.
        </p>
        <p className="body--copy">
          Our second product was an onchain subscription protocol and user interface, launched 6 months later in October of 2023. $1.2m was earned by 2,279 unique creators from 45,287 unique subscribers. Some of our favorites were EIC Quarterly, the yon experience, Aether, m/branson, The Geometric Circle, Ateliê 407, and Patrons of Blue.
        </p>
        <p className="body--copy">
          Our third product, launching in 2026, is a swap routing API, benchmarking tool, and user interface.
        </p>
        <p className="body--copy">
          With each iteration of the company we've learned, grown, and adapted to market reality. Though our products have taken many forms, our motivations remain the same: permissionless capital coordination, efficient markets, economic freedom.
        </p>

        <img src="/images/founders.png" alt="" />

        <p className="body--copy">
          Jonny Mack is the cofounder and CEO of Fabric. Previously, he was the principal of Nonlinear, a design consultancy focused on user research, product design, and prototyping for early stage startups. His clients included Coinbase, Unit 410, Polychain, Roll, Awair, and Observable. Before that he was a design lead on Chrome OS and Android system UI, cofounder of Google Domains, and lead designer for Google‘s Cloud Console. Jonny also worked as a prototyper on webOS at HP, a freelance designer, and an artist assistant to Shepard Fairey and Dave Kinsey.
        </p>

        <p className="body--copy">
          Dan Simpson is the cofounder and CTO of Fabric. Previously, he was CTO at One More Cloud, where he built the search infrastructure for companies such as Pinterest, GitHub, HBO, Heroku, and OfferUp. Before that, he cofounded KLATU Networks, which developed predictive monitoring systems for life science applications. Dan was also the founding engineer for CryoPort, a logistics platform for cryogenic materials, and TRAXX, a system for wireless hardware analytics.
        </p>

        <p className="body--copy">
          Chris Douglas is the cofounder and CSO of Fabric, and a professor of mathematics at the University of Oxford. He cofounded and co-directed the Centre for Quantum Mathematics and Computation, and was a founding editorial board member of Ledger, the first academic journal dedicated to cryptocurrency and blockchain technology research. Before joining the Oxford faculty, Chris was a Rhodes Scholar, a graduate student at MIT, a postdoc at Stanford, and a research fellow at the Miller Institute at the University of California, Berkeley.
        </p>
      </div>
    </div>
  )
}