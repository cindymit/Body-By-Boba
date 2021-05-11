import Boba from "./Boba";
import { useState } from "react";

function Filter(props) {
  const [search, setSearch] = useState("");

  const searchInput = props.bobas.filter((boba) => {
    return boba.fields.base.toLowerCase().includes(search.toLowerCase()) || boba.fields.topping.toLowerCase().includes(search.toLowerCase()) 
  });
  console.log(searchInput)

  return (
    <div>
      <label htmlFor="search"></label>
      <input type="text" value={search} placeholder="search" onChange={(e) => setSearch(e.target.value)}/>
      <button type="submit">press</button>
      {
        searchInput.map((boba) => {
          return <Boba boba={boba}/>
        })
      }
    </div>
  )
}

export default Filter;