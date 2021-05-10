function Boba(props) {
  const {user, name, base, milk, topping, sugar} = props.boba.fields;

  return (
    <div className="boba-div">
      <h3>{user}'s {name} </h3>
      <h4>({base}, {milk}, {topping}, and {sugar} sugar).</h4>
    </div>
  )
}

export default Boba;