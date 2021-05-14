import Boba from "./Boba";
import Nav from "./Nav";
import { useState } from "react";

function Filter(props) {
  const [search, setSearch] = useState("");

  const searchInput = props.bobas.filter((boba) => {
    return boba.fields.base.toLowerCase().includes(search.toLowerCase()) || boba.fields.milk.toLowerCase().includes(search.toLowerCase()) || boba.fields.topping.toLowerCase().includes(search.toLowerCase()) || boba.fields.sugar.toLowerCase().includes(search.toLowerCase()) 
  });

  return (
    <div className="Filter">
      <header>
        <Nav />
      </header>

      <div className="searchbar">
      <label htmlFor="search"></label>
        <input type="text" value={search} placeholder="search" onChange={(e) => setSearch(e.target.value)} />
        <button type="submit">Filter</button>
      </div>

      <div className="filter-results">
      {
        searchInput.map((boba) => {
          return <Boba boba={boba}/>
        })
        }
      </div>
    </div>
  )
}

export default Filter;