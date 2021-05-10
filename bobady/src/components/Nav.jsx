import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="navbar">
    <Link to="/" className="links">Homepage</Link>
    <Link to="/" className="links">Create Your Own Drink!</Link>
    </nav>
  )
}

export default Nav;