import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Egator, Products, Features,  Support, Developers, GetStarted, NotFound } from "./pages";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Egator />} />
        <Route path="/products" element={<Products />} />
        <Route path="/features" element={<Features />} />
        <Route path="/developer" element={<Developers />} />
        <Route path="/support" element={<Support />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/ready" element={<GetStarted />} />
      </Routes>
    </div>
  );
}

export default App;
