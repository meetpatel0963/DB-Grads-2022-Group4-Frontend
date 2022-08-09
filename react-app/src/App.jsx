import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Books } from "./components/books/Books";
import { Sidebar } from "./components/sidebar/SideBar";

const App = () => {
  return (
    <div className="app-container" style={{ display: "flex" }}>
      <Router>
        <Sidebar />
        <div style={{ padding: "10px 40px", width: "80%" }}>
          <Switch>
            <Route exact path="/books" component={Books} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
