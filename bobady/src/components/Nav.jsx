import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
    <Link to="/">Homepage</Link>
      <Link to="new">Create Your Own Drink!</Link>
    </nav>
  )
}

export default Nav;