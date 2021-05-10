import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="navbar">
    <Link to="/" className="links">Homepage</Link>
    <Link to="/" className="links">Filter</Link>
    </nav>
  )
}

export default Nav;