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
          <select onChange={(e) => setBase(e.target.value)}>
            <option value="null_base">-</option>
            <option value="Black Tea">Black Tea</option>
            <option value="Green Tea">Green Tea</option>
            <option value="Oolong Tea">Oolong Tea</option>
            <option value="Milk">Milk</option>
          </select>

          <label htmlFor="milk">Milk: </label>
          <select onChange={(e) => setMilk(e.target.value)}>
          <option value="null_milk" >-</option>
            <option value="Milk">Milk</option>
            <option value="No Milk">No Milk</option>
          </select>

          <label htmlFor="topping">Topping: </label>
          <select onChange={(e) => setTopping(e.target.value)}>
            <option value="null_topping">-</option>
            <option value="Tapioca Pearls">Tapioca Pearls</option>
            <option value="Pudding">Pudding</option>
            <option value="Aloe Jelly">Aloe Jelly</option>
            <option value="Milk Cap">Milk Cap</option>
            <option value="No Topping">No Topping</option>
          </select>

          <label htmlFor="sugar">Sugar %: </label>
          <select onChange={(e) => setSugar(e.target.value)}>
          <option value="null_sugar">-</option>
            <option value="0%">0%</option>
            <option value="25%">25%</option>
            <option value="50%">50%</option>
            <option value="75%">75%</option>
            <option value="100%">100%</option>
          </select>
          <button type="submit" className="btn">DRINK UP!</button>
        </form>
      </div>
    )
  }

export default Form;