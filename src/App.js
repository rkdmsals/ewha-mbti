import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { Router } from "express";
import Home from "./components/views/HomePage/Home";
import EventResult from "./components/views/EventPage/EventResult";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            exact path="/"
            element={<Home />}
          />

          <Route exact path="/eventResult" element={<EventResult />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
