import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Books } from "./components/books/Books";
import { Trades } from "./components/trades/Trades";
import { TradeDetails } from "./components/trades/TradeDetails";
import { Securities } from "./components/securities/Securities";
import { Sidebar } from "./components/sidebar/SideBar";
import { SecurityDetails } from "./components/securities/SecurityDetails";

const App = () => {
  return (
    <div className="app-container" style={{ display: "flex" }}>
      <Router>
        <Sidebar />
        <div style={{ padding: "10px 30px", width: "80%" }}>
          <Routes>
            <Route exact path="/books" element={<Books />} />
            <Route
              exact
              path="/trades/details/:tradeId"
              element={<TradeDetails />}
            />
            <Route exact path="/trades" element={<Trades />} />
            <Route
              exact
              path="/securities/details/:securityId"
              element={<SecurityDetails />}
            />
            <Route exact path="/securities" element={<Securities />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default App;
