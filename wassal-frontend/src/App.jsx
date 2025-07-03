import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./Pages/Home";
import { Register } from "./Pages/Register";
import { Grocery } from "./Pages/Grocery";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Category/:categoryName" element={<Grocery />} />
      </Routes>
    </Router>
  );
}

export default App;
