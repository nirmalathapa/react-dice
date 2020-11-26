import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import DiceRoll from "../components/DiceRoll";
import Inventory from "../components/Inventory";
import Navbar from "../components/Navigation";

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col bg-gray-200 h-screen">
        <Navbar />
        <Switch>
          <Route exact path="/" component={DiceRoll} />
          <Route path="/inventory" component={Inventory} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
