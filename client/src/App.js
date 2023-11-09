import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { Router } from "express";
import Result from "./components/views/Results/Result";
import ViewAllResult from "./components/views/ViewAllResult/ViewAllResult";
import MbtiMain from "./components/views/mbtimain/mbtimain";
import Test from "./components/views/TestPage/Test";
import "./components/utilis/font.css"

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<MbtiMain />} />
          <Route exact path="/test" element={<Test />} />
          <Route exact path="/test/result/:id" element={<Result />} />
          <Route exact path="/viewAllResult" element={<ViewAllResult />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
