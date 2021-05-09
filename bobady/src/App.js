import { Route } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { baseURL, config } from "./services";
import Nav from "./components/Nav";
import './App.css';

function App() {
  const [bobas, setBobas] = useState([]);

  useEffect(() => {
    const fetchBobas = async () => {
      const resp = await axios.get(baseURL, config);
      setBobas(resp.data.records);
    }
    fetchBobas();
  }, []);

  return (
    <div className="App">
      <Nav />
      <Route exact path="/">
        <main>
          <h3>This is the home page!</h3>
        </main>
      </Route>
      <Route path="/new">
        <h3>Create-A-Drink here!</h3>
      </Route>
    </div>
  );
}

export default App;
