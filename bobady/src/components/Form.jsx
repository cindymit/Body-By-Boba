import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { baseURL, config } from "../services";

function Form(props) {
  const [user, setUser] = useState("");
  const [name, setName] = useState("");
  const [base, setBase] = useState("");
  const [milk, setMilk] = useState("");
  const [topping, setTopping] = useState("");
  const [sugar, setSugar] = useState("");
  const params = useParams();

  useEffect(() => {
    if (params.id && props.bobas.length) {
      const boba = props.bobas.find((boba) => boba.id === params.id);
      if (boba) {
        setUser(boba.fields.user);
        setName(boba.fields.name);
        setBase(boba.fields.base);
        setMilk(boba.fields.milk);
        setTopping(boba.fields.topping);
        setSugar(boba.fields.sugar);
      }
    }
  }, [props.bobas, params.id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newBoba = {
      user,
      name,
      base,
      milk,
      topping,
      sugar
    };
    
    if (params.id) {
      const specificURL = `${baseURL}/${params.id}`;
      await axios.put(specificURL, { fields: newBoba }, config);
    } else {
      await axios.post(baseURL, { fields: newBoba }, config);
    }
    props.setToggleFetch((curr) => !curr);
  }

    return (
      <div className="form-div">
        
        <form onSubmit={handleSubmit}>
          <label htmlFor="user">Username: </label>
          <input
            type="text"
            id="user"
            value={user}
            onChange={(e) => setUser(e.target.value)}
          />
          <label htmlFor="name">Drink name: </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="base">Base: </label>
          <select>
            <option value="black tea" onChange={(e) => setBase(e.target.value)}>Black Tea</option>
            <option value="green tea" onChange={(e) => setBase(e.target.value)}>Green Tea</option>
          </select>
          {/* <input
            type="text"
            id="base"
            value={base}
            onChange={(e) => setBase(e.target.value)}
          /> */}
          <label htmlFor="milk">Milk: </label>
          <input
            type="text"
            id="milk"
            value={milk}
            onChange={(e) => setMilk(e.target.value)}
          />
          <label htmlFor="topping">Topping: </label>
          <input
            type="text"
            id="topping"
            value={topping}
            onChange={(e) => setTopping(e.target.value)}
          />
          <label htmlFor="sugar">Sugar %: </label>
          <input
            type="text"
            id="sugar"
            value={sugar}
            onChange={(e) => setSugar(e.target.value)}
          />
          <button type="submit">DRINK UP!</button>
        </form>
      </div>
    )
  }

export default Form;