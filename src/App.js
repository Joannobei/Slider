import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Egator, Products, Features, Resources, Support, Developers, GetStarted } from "./pages";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Egator />} />
        <Route path="/products" element={<Products />} />
        <Route path="/features" element={<Features />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/support" element={<Support />} />
        <Route path="/ready" element={<GetStarted />} />
        <Route path="/developer" element={<Developers />} />
      </Routes>
    </div>
  );
}

export default App;
