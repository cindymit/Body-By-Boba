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
      <p>
      'Body by Boba' is an app that bring's Boba lovers together! Body by Boba knows that you work hard, and a result YOU SHOULD DRINK (Boba) HARDER! Submit your favorite drink in the form to help others discover new favorites! Click on the filter link to go through the current entries and find combos that sound and tastes good to you! Let's get you started on a new boba journey!
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
