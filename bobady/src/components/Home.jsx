import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="welcome">
      <Link to="/home">CLICK HERE!</Link>
    </div>
  )
}

export default Home;