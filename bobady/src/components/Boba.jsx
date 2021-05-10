function Boba(props) {
  const { user, name, base, milk, topping, sugar } = props.boba.fields;

  return (
    <div className="boba-div">
      <h3>{user}</h3>
      <h4>{name}</h4>
      <h5>{base}</h5>
      <h3>{milk}</h3>
      <h3>{topping}</h3>
      <h3>{sugar}</h3>
    </div>
  )
}

export default Boba;