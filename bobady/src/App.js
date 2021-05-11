import { Route } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { baseURL, config } from "./services";
import Home from "./components/Home";
import Drinks from "./components/Drinks";
import Filter from "./components/Filter";
import "./App.css";

function App() {
  const [bobas, setBobas] = useState([]);
  const [toggleFetch, setToggleFetch] = useState(false);

  useEffect(() => {
    const fetchBobas = async () => {
      const resp = await axios.get(baseURL, config);
      console.log(baseURL);
      setBobas(resp.data.records);
    };
    fetchBobas();
  }, [toggleFetch]);

  return (
    <div className="App">
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/home">
        <Drinks bobas={bobas} setToggleFetch={setToggleFetch} />
      </Route>
      <Route path="/filter">
        <Filter bobas={bobas} />
      </Route>
    </div>
  );
}

export default App;
