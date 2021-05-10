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

      <header>
        <Nav />
      </header>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lorem dolor, aliquet ut posuere vitae, pretium nec massa. Ut varius sapien vel velit mollis facilisis. Cras leo diam, consequat id nulla sed, imperdiet tempor mi. Ut sollicitudin nisi volutpat nunc lacinia efficitur. Nullam interdum pharetra nisl, ut suscipit lectus scelerisque lobortis. Proin sit amet odio velit. Maecenas mattis diam non arcu eleifend, et congue magna sollicitudin.</p>
      <div className="data">
        <div className="data-div">
        <Route exact path="/">
        <main>
          {bobas.map((boba) => (
            <Boba boba={boba} setToggleFetch={setToggleFetch} />
          ))}
          </main>
        </Route>
        </div>
      
      <Route path="/">
        <Form bobas={bobas} setToggleFetch={setToggleFetch} />
        </Route>
      </div>

    </div>
  );
}

export default App;