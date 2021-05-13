import { Link } from "react-router-dom";

function Welcome() {
  return (
    <div className="welcome">
      <h1>Welcome to Body by Boba!</h1>
      <Link to="/home"><img className="homepage-logo" src="https://i.imgur.com/jegll8w.png" alt="bobady_girl" /></Link>
      <h1>Click on the logo to enter!</h1>
    </div>
  )
}

export default Welcome;