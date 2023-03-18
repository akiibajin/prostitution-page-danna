import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Justification from "./pages/Justification";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Conclution from "./pages/Conclution";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="justificacion" element={<Justification />} />
          <Route path="conclusion" element={<Conclution />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
