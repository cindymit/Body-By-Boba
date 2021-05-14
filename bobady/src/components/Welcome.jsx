import { Link } from "react-router-dom";

function Welcome() {
  return (
    <div className="welcome">
      <h1>Welcome to Body by Boba!</h1>
      <Link to="/home"><img className="welcome-logo" src="https://i.imgur.com/jegll8w.png" alt="bobady_girl" /></Link>
      <h2>Click on the logo to enter!</h2>
    </div>
  )
}

export default Welcome;