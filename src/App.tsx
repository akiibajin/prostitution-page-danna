import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Justification from "./pages/Justification";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Conclution from "./pages/Conclution";
import Objectives from "./pages/Objectives";
import Advantages from "./pages/Advantages";
import CausesAndConsequences from "./pages/CausesAndConsequences";
import Clasification from "./pages/Clasification";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="justificacion" element={<Justification />} />
          <Route path="objetivos" element={<Objectives />} />
          <Route path="ventajas-desventajas" element={<Advantages />} />
          <Route
            path="causas-consecuencias"
            element={<CausesAndConsequences />}
          />
          <Route path="clasificacion" element={<Clasification />} />
          <Route path="conclusion" element={<Conclution />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
