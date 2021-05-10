function Boba(props) {
  const {user, name, base, milk, topping, sugar} = props.boba.fields;

  return (
    <div className="boba-div">
      <h3>{user}</h3>
      <h4>{name}</h4>
      <h5>{base}</h5>
      <h5>{milk}</h5>
      <h5>{topping}</h5>
      <h5>{sugar}</h5>
    </div>
  )
}

export default Boba;