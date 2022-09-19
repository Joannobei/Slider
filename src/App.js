import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Egator, Products, Features, Resources, Support, Developers, GetStarted, NotFound, Biopay } from "./pages";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/expense" element={<Egator />} />
        <Route path="/products" element={<Products />} />
        <Route path="/features" element={<Features />} />
        <Route path="/developer" element={<Developers />} />
        <Route path="/support" element={<Support />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/ready" element={<GetStarted />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/" element={<Biopay />} />
      </Routes>
    </div>
  );
}

export default App;
