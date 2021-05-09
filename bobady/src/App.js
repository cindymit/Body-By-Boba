import { Route } from "react-router-dom";
import Nav from "./components/Nav";
import './App.css';

function App() {
  return (
    <div className="App">
      <Nav />
      <Route exact path="/">
        <h3>This is the home page!</h3>
      </Route>
      <Route path="/new">
        <h3>Create-A-Drink here!</h3>
      </Route>
    </div>
  );
}

export default App;
