import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="navbar">
      <div className="img">
        <img src="https://i.imgur.com/7sqOg1m.png" alt="boba_logo" />
      </div>
      <div className="links">
        <Link to="/home" className="links">Homepage</Link>
        <Link to="/filter" className="links">Filter</Link>
      </div>
    </nav>
  )
}

export default Nav;