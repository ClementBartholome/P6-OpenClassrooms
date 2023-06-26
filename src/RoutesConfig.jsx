import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Logement from "./pages/Logement";
import PageNotFound from "./pages/PageNotFound";

function RoutesConfig() {
  return (
    <Routes>
      <Route path="/kasa" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/kasa/logement/:logementId" element={<Logement />} />
      <Route path="/*" element={<PageNotFound />} />
      <Route path="/404" element={<PageNotFound />} />
    </Routes>
  );
}

export default RoutesConfig;
