import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { Router } from "express";
import Home from "./components/views/HomePage/Home";
import Result from "./components/views/Results/Result";
import Chemistry from "./components/views/Results/Chemistry";
import ViewAllResult from "./components/views/ViewAllResult/ViewAllResult";
import MbtiMain from "./components/views/mbtimain/mbtimain";
import Test from "./components/views/TestPage/Test";

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Chemi" element={<Chemistry />} />
          <Route exact path="/test" element={<Test />} />
          <Route exact path="/test/result" element={<Result />} />
          <Route exact path="/viewAllResult" element={<ViewAllResult />} />
          <Route exact path="/mbtimain" element={<MbtiMain />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
