import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Componentes/Navbar";
import Directorio from "./paginas/Directorio";
import Home from "./paginas/Home";
import Museo from "./paginas/Museo";
import Noticias from "./paginas/Noticias";
import Regantes from "./paginas/Regantes";
import Linea from "./paginas/Linea";


function App() {
  return (
    <BrowserRouter>
      {/* Navbar visible en todas las páginas */}
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/museo" element={<Museo />} />
        <Route path="/directorio" element={<Directorio />} />
        <Route path="/noticias" element={<Noticias />} />
    
        {/* <Route path="/regantes" element={<Regantes />} /> */}
        <Route path="/regantes" element={<Regantes />} />
        <Route path="/linea" element={<Linea />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
