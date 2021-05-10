import { Route } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { baseURL, config } from "./services";
import Nav from "./components/Nav";
import Boba from "./components/Boba";
import Form from "./components/Form";
import './App.css';

function App() {
  const [bobas, setBobas] = useState([]);
  const [toggleFetch, setToggleFetch] = useState(false);

  useEffect(() => {
    const fetchBobas = async () => {
      const resp = await axios.get(baseURL, config);
      console.log(baseURL)
      setBobas(resp.data.records);
    }
    fetchBobas();
  }, [toggleFetch]);

  return (
    <div className="App">
      <Nav />
      <Route exact path="/">
        <main>
          {bobas.map((boba) => (
            <Boba boba={boba} setToggleFetch={setToggleFetch} />
          ))}
        </main>
      </Route>
      <Route path="/new">
        <Form bobas={bobas} setToggleFetch={setToggleFetch} />
      </Route>
    </div>
  );
}

export default App;