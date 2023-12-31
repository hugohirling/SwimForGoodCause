import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Layout from "./common/Layout";
import Dashboard from "./dashboard/Dashboard";
import NoPage from "./nopage/NoPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
