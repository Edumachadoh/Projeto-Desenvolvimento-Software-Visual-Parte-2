import React from "react";
import "./AppStyle.css";
import AreaEspecializacaoListar from "./components/AreaEspecializacaoListar";
import FormacaoAcademicaListar from "./components/FormacaoAcademicaListar";
import ArtefatoListar from "./components/ArtefatoListar";
import FossilListar from "./components/FossilListar";
import RelatorioQuantitativo from "./components/RelatorioQuantitativo";
import Home from "./components/Home";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import PaleontologoListar from "./components/PaleontologoListar";
import ArqueologoListar from "./components/ArqueologoListar";
import ArqueologoCadastrar from "./components/ArqueologoCadastrar";
import ArqueologoEditar from "./components/ArqueologoEditar";

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
                <li><Link to="/relatorio">Relatório</Link></li>
                
                <li className="dropdown">   
                    <span className="dropdown-label">Arqueólogos</span>
                    <ul className="dropdown-menu">
                        <li><Link to="/listar/arqueologo">Listar</Link></li>
                        <li><Link to="/adicionar/arqueologo">Adicionar</Link></li>
                    </ul>
                </li>
                <li><Link to="/listar/paleontologo">Paleontólogo</Link></li>
                <li><Link to="/listar/fossil">Fossil</Link></li>
                <li><Link to="/listar/artefato">Artefato</Link></li>
                <li><Link to="/listar/formacaoAcademica">Formação Acadêmica</Link></li>
                <li><Link to="/listar/areaEspecializacao">Area de Especialização</Link></li>
            </ul>
        </nav>
    </header>
   
    <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/relatorio" element={<RelatorioQuantitativo/>}></Route>
          <Route path="/listar/paleontologo" element={<PaleontologoListar/>}></Route>
          <Route path="/listar/arqueologo" element={<ArqueologoListar/>}></Route>
          <Route path="/adicionar/arqueologo" element={<ArqueologoCadastrar/>}></Route>
          <Route path="/editar/arqueologo/:id" element={<ArqueologoEditar/>}></Route>
          <Route path="/listar/formacaoAcademica" element={<FormacaoAcademicaListar/>}></Route>
          <Route path="/listar/areaEspecializacao" element={<AreaEspecializacaoListar/>}></Route>
          <Route path="/listar/artefato" element={<ArtefatoListar/>}></Route>
          <Route path="/listar/fossil" element={<FossilListar/>}></Route>
    </Routes>
    </BrowserRouter>
   </div>
  );
}
//4 - OBRIGATORIAMENTE o componente DEVE ser exportado
// exportar classes
export default App;
