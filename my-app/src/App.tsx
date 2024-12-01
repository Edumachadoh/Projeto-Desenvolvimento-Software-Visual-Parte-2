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
import PaleontologoCadastrar from "./components/PaleontologoCadastrar ";
import PaleontologoEditar from "./components/PaleontologoEditar";
import AreaEspecializacaoCadastrar from "./components/AreaEspecializacaoCadastrar";
import FormacaoAcademicaCadastrar from "./components/FormacaoAcademicaCadastrar";
import FormacaoAcademicaEditar from "./components/FormacaoAcademicaEditar";
import AreaEspecializacaoEditar from "./components/AreaEspecializacaoEditar";
import FossilCadastrar from "./components/FossilCadastrar";
import FossilEditar from "./components/FossilEditar";
import ArtefatoCadastrar from "./components/ArtefatoCadastrar";
import ArtefatoEditar from "./components/ArtefatoEditar";

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

                <li className="dropdown">   
                    <span className="dropdown-label">Paleontólogo</span>
                    <ul className="dropdown-menu">
                        <li><Link to="/listar/paleontologo">Listar</Link></li>
                        <li><Link to="/adicionar/paleontologo">Adicionar</Link></li>
                    </ul>
                </li>
                <li className="dropdown">
                <span className="dropdown-label">Fossil</span>
                <ul className="dropdown-menu">
                    <li><Link to="/listar/fossil">Listar</Link></li>
                    <li><Link to="/adicionar/fossil">Adicionar</Link></li>
                </ul>
                </li>

                <li className="dropdown">
                <span className="dropdown-label">Artefato</span>
                <ul className="dropdown-menu">
                    <li><Link to="/listar/artefato">Listar</Link></li>
                    <li><Link to="/adicionar/artefato">Adicionar</Link></li>
                </ul>
                </li>

                <li className="dropdown">   
                    <span className="dropdown-label">Área de Especialização</span>
                    <ul className="dropdown-menu">
                        <li><Link to="/listar/areaEspecializacao">Listar</Link></li>
                        <li><Link to="/adicionar/areaEspecializacao">Adicionar</Link></li>
                    </ul>
                </li>

                <li className="dropdown">   
                    <span className="dropdown-label">Formacao Academica</span>
                    <ul className="dropdown-menu">
                        <li><Link to="/listar/formacaoAcademica">Listar</Link></li>
                        <li><Link to="/adicionar/formacaoAcademica">Adicionar</Link></li>
                    </ul>
                </li>
            </ul>
        </nav>
    </header>
   
    <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/relatorio" element={<RelatorioQuantitativo/>}></Route>
          <Route path="/listar/paleontologo" element={<PaleontologoListar/>}></Route>
          <Route path="/adicionar/paleontologo" element={<PaleontologoCadastrar/>}></Route>
          <Route path="/editar/paleontologo/:id" element={<PaleontologoEditar/>}></Route>
          <Route path="/listar/arqueologo" element={<ArqueologoListar/>}></Route>
          <Route path="/adicionar/arqueologo" element={<ArqueologoCadastrar/>}></Route>
          <Route path="/editar/arqueologo/:id" element={<ArqueologoEditar/>}></Route>
          <Route path="/listar/formacaoAcademica" element={<FormacaoAcademicaListar/>}></Route>
          <Route path="/listar/areaEspecializacao" element={<AreaEspecializacaoListar/>}></Route>
          <Route path="/listar/artefato" element={<ArtefatoListar/>}></Route>
          <Route path="/listar/fossil" element={<FossilListar/>}></Route>
          <Route path="/adicionar/areaEspecializacao" element={<AreaEspecializacaoCadastrar/>}></Route>  
          <Route path="/adicionar/formacaoAcademica" element={<FormacaoAcademicaCadastrar/>}></Route>  
          <Route path="/editar/formacaoAcademica/:id" element={<FormacaoAcademicaEditar/>}></Route>
          <Route path="/editar/areaEspecializacao/:id" element={<AreaEspecializacaoEditar/>}></Route>
          <Route path="/adicionar/fossil" element={<FossilCadastrar/>}></Route>  
            <Route path="/editar/fossil/:id" element={<FossilEditar/>}></Route>  
        <Route path="/adicionar/artefato" element={<ArtefatoCadastrar/>}></Route>  
        <Route path="/editar/artefato/:id" element={<ArtefatoEditar/>}></Route>  
    </Routes>
    </BrowserRouter>
   </div>
  );
}
//4 - OBRIGATORIAMENTE o componente DEVE ser exportado
// exportar classes
export default App;
