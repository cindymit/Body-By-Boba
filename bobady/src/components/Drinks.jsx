import Boba from "./Boba";
import Form from "./Form";
import Footer from "./Footer";
import Nav from "./Nav";
import "../App.css";

function Drinks(props) {
  return (
    <div className="App">
      <header>
        <Nav />
      </header>
      <p className="intro">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lorem
        dolor, aliquet ut posuere vitae, pretium nec massa. Ut varius sapien vel
        velit mollis facilisis. Cras leo diam, consequat id nulla sed, imperdiet
        tempor mi. Ut sollicitudin nisi volutpat nunc lacinia efficitur. Nullam
        interdum pharetra nisl, ut suscipit lectus scelerisque lobortis. Proin
        sit amet odio velit. Maecenas mattis diam non arcu eleifend, et congue
        magna sollicitudin.
      </p>
      <div className="data">
        <Form bobas={props.bobas} setToggleFetch={props.setToggleFetch} />
        <div className="data-div">
          <main>
            {props.bobas.map((boba) => (
              <Boba boba={boba} setToggleFetch={props.setToggleFetch} />
            ))}
          </main>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Drinks;
