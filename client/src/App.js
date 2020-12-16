import logo from "./logo.svg";
import "./App.css";
import { Container } from "semantic-ui-react";
import { Route, Switch } from "react-router-dom";
import Home from "./demo/Home";
import Things from "./demo/Things";
import NoMatch from "./components/NoMatch";
import Navbar from "./components/Navbar";
import ProductAPIDemo from "./demo/ProductAPIDemo";
import ReviewAPI from "./demo/ReviewAPI";
import SPADemo from "./demo/SPADemo";

function App() {
  return (
    <>
      <Navbar />
      <Container>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/things" component={Things} />
          <Route exact path="/productAPI" component={ProductAPIDemo} />
          <Route exact path="/reviewAPI/:productId" component={ReviewAPI} />
          <Route exact path="/spaDemo" component={SPADemo} />
          <Route component={NoMatch} />
        </Switch>
      </Container>
    </>
  );
}

export default App;
