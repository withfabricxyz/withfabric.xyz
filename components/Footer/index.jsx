import "./Footer.css";

export default function Footer() {
  return (
    <footer>
      <nav>
        <ul>
          <li><a className="caption--copy" href="/about">About</a></li>
          <li><a className="caption--copy" href="docs.withfabric.xyz">Docs</a></li>
          <li><a className="caption--copy" href="/terms">Terms</a></li>
          <li><a className="caption--copy" href="/privacy">Privacy</a></li>
        </ul>
      </nav>
    </footer>
  )
}