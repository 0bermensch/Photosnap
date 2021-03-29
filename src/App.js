import Features from "./pages/Features";
import Home from "./pages/Home";
import Stories from "./pages/Stories";
import Pricing from "./pages/Pricing";
import { Switch, Route } from "react-router-dom";
import NavBar from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route path={"/"} exact component={Home} />
        <Route path={"/stories"} component={Stories} />
        <Route path={"/features"} component={Features} />
        <Route path={"/pricing"} component={Pricing} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
