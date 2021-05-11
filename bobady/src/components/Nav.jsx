import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="navbar">
      <div className="img">
        <img src="https://ctl.s6img.com/society6/img/4DWapWcqIAdTgT5nAqRgNhxVrWo/w_700/prints/~artwork/s6-original-art-uploads/society6/uploads/misc/67eba195a53242caa0f3136212d98070/~~/cute-love-heart-bubble-tea-prints.jpg" alt="cute_boba" border="1px solid black" />
      </div>
      <div className="app-title">
        <h1>Body by Boba</h1>
      </div>
      <div className="links">
        <Link to="/" className="links">Homepage</Link>
        <Link to="/filter" className="links">Filter</Link>
      </div>
    </nav>
  )
}

export default Nav;