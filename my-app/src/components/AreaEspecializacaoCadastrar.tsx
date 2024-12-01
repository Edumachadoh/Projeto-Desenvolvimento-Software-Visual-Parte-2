import { useEffect ,useState }from 'react';
import axios from "axios";
import { AreaEspecializacao } from '../interfaces/AreaEspecializacao';

function AreaEspecializacaoCadastrar() {

  const [nome, setNome] = useState("");
  const [pais, setPais] = useState("");

  function enviarProduto(e: any) {
    e.preventDefault();

    const areaEspecializacao: AreaEspecializacao = {
      nome: nome, 
      pais: pais
    };

    fetch("http://localhost:5020/api/area-especializacao/cadastrar", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(areaEspecializacao),
    })
      .then((resposta) => {
        return resposta.json();
      })
      .then((areaEspecializacao) => {
        console.log("Área de especialização cadastrada", areaEspecializacao);
      });
  }

  return (
    
    <div className="form-container">
    <div className="form-header">
      <h2>Cadastro de Área de Especialização</h2>
    </div>
    <form onSubmit={enviarProduto}>
      <div className="form-group">
      <label htmlFor="nome">Nome</label>
          <input
          placeholder="Nome"
            type="text"
            id="nome"
            name="nome"
            required
            onChange={(e: any) => setNome(e.target.value)}
          />
      </div>
      <div className="form-group">
      <label htmlFor="pais">País</label>
          <input
          placeholder="País"
            type="text"
            id="pais"
            name="pais"
            required
            onChange={(e: any) => setPais(e.target.value)}
          />
      </div>
      <button type="submit">Cadastrar</button>
    </form>
  </div>
  );
}
    
 

export default AreaEspecializacaoCadastrar;