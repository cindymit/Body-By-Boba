import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="welcome">
      <Link to="/home"><img src="https://i.imgur.com/jegll8w.png" alt="bobady_girl" width="700px" height="auto" /></Link>
    </div>
  )
}

export default Home;