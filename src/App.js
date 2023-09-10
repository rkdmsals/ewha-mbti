import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { Router } from "express";
import Home from "./components/views/HomePage/Home";
import Result from "./components/views/Results/Result";

import ViewAllResult from "./components/views/ViewAllResult/ViewAllResult";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            exact path="/"
            element={<Home />}
          />

          <Route exact path="/result" element={<Result />} />
          <Route exact path="/viewAllResult" element={<ViewAllResult />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
