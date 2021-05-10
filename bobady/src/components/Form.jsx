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
            <option value="base_choice" onChange={(e) => setBase(e.target.value)}>-</option>
            <option value="black tea" onChange={(e) => setBase(e.target.value)}>Black Tea</option>
            <option value="green tea" onChange={(e) => setBase(e.target.value)}>Green Tea</option>
            <option value="oolong tea" onChange={(e) => setBase(e.target.value)}>Oolong Tea</option>
            <option value="milk" onChange={(e) => setBase(e.target.value)}>Milk</option>
          </select>
          {/* <input
            type="text"
            id="base"
            value={base}
            onChange={(e) => setBase(e.target.value)}
          /> */}
          <label htmlFor="milk">Milk: </label>
          <select>
          <option value="milk_choice" onChange={(e) => setBase(e.target.value)}>-</option>
            <option value="Milk" onChange={(e) => setMilk(e.target.value)}>Milk</option>
            <option value="No Milk" onChange={(e) => setMilk(e.target.value)}>No Milk</option>
          </select>
          {/* <input
            type="text"
            id="milk"
            value={milk}
            onChange={(e) => setMilk(e.target.value)}
          /> */}
          <label htmlFor="topping">Topping: </label>
          <select>
            <option value="topping_choice" onChange={(e) => setTopping(e.target.value)}>-</option>
            <option value="tapioca pearls" onChange={(e) => setTopping(e.target.value)}>Tapioca Pearls</option>
            <option value="pudding" onChange={(e) => setTopping(e.target.value)}>Pudding</option>
            <option value="aloe jelly" onChange={(e) => setTopping(e.target.value)}>Aloe Jelly</option>
            <option value="milk cap" onChange={(e) => setTopping(e.target.value)}>Milk Cap</option>
            <option value="none" onChange={(e) => setTopping(e.target.value)}>None</option>
          </select>
          {/* <input
            type="text"
            id="topping"
            value={topping}
            onChange={(e) => setTopping(e.target.value)}
          /> */}
          <label htmlFor="sugar">Sugar %: </label>
          <select>
          <option value="sugar_choice" onChange={(e) => setSugar(e.target.value)}>-</option>
            <option value="zero" onChange={(e) => setSugar(e.target.value)}>0%</option>
            <option value="twenty_five" onChange={(e) => setSugar(e.target.value)}>25%</option>
            <option value="fifty" onChange={(e) => setSugar(e.target.value)}>50%</option>
            <option value="seventy_five" onChange={(e) => setSugar(e.target.value)}>75%</option>
            <option value="one_hundred" onChange={(e) => setSugar(e.target.value)}>100%</option>
          </select>
          {/* <input
            type="text"
            id="sugar"
            value={sugar}
            onChange={(e) => setSugar(e.target.value)}
          /> */}
          <button type="submit">DRINK UP!</button>
        </form>
      </div>
    )
  }

export default Form;