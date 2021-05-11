import Boba from "./Boba";

function Filter(props) {
  const searchInput = props.bobas.filter((bobas) => {
    return boba.hasSearchInput === true
  });
  console.log(searchInput)

  return (
    <div>
      {
        searchInput.map((boba) => {
          return <Boba boba={boba}/>
        })
      }
    </div>
  )
  
}

export default Filter;