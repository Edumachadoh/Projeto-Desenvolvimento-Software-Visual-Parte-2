import React from "react";
import AreaEspecializacaoListar from "./components/AreaEspecializacaoListar";
import FormacaoAcademicaListar from "./components/FormacaoAcademicaListar";
import ArtefatoListar from "./components/ArtefatoListar";
import Home from "./components/Home";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./AppStyle.css";

//importar componentes
function App() {
  return (
     <div id="app">
      <BrowserRouter>
       <header>
        <nav className="nav-bar">
            <h1>História Website</h1>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><a href="#">Arqueologo</a></li>
                <li><a href="#">Paleontólogo</a></li>
                <li><a href="#">Fóssil</a></li>
                <li><Link to="/artefato">Artefato</Link></li>
                <li><Link to="/formacaoAcademica">Formação Acadêmica</Link></li>
                <li><Link to="/areaEspecializacao">Area de Especialização</Link></li>
            </ul>
        </nav>
    </header>
   
    <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/formacaoAcademica" element={<FormacaoAcademicaListar/>}></Route>
          <Route path="/areaEspecializacao" element={<AreaEspecializacaoListar/>}></Route>
          <Route path="/artefato" element={<ArtefatoListar/>}></Route>
    </Routes>
    </BrowserRouter>
   </div>
  );
}
//4 - OBRIGATORIAMENTE o componente DEVE ser exportado
// exportar classes
export default App;
