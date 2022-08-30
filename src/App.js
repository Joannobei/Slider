import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Egator } from "./pages";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Egator />}  />
      </Routes>
    </div>
  );
}

export default App;
