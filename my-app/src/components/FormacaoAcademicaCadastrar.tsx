import { useEffect ,useState }from 'react';
import axios from "axios";
import { FormacaoAcademica } from '../interfaces/FormacaoAcademica';
import { AreaEspecializacao } from '../interfaces/AreaEspecializacao';

function FormacaoAcademicaCadastrar() {

  const [nome, setNome] = useState("");
  const [universidade, setUniversidade] = useState("");

  function enviarProduto(e: any) {
    e.preventDefault();

    const formacaoAcademica: FormacaoAcademica = {
        nome: nome,
        universidade: universidade
      };

    fetch("http://localhost:5020/api/formacaoacademica/cadastrar", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formacaoAcademica),
    })
      .then((resposta) => {
        return resposta.json();
      })
      .then((formacaoAcademica) => {
        console.log("Formação Acadêmica cadastrada", formacaoAcademica);
      });
  }

  return (
    
    <div className="form-container">
    <div className="form-header">
      <h2>Cadastro de Formacação Acadêmica</h2>
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
      <label htmlFor="pais">Universidade</label>
          <input
          placeholder="Universidade"
            type="text"
            id="universidade"
            name="universidade"
            required
            onChange={(e: any) => setUniversidade(e.target.value)}
          />
      </div>
      <button type="submit">Cadastrar</button>
    </form>
  </div>
  );
}
    
 

export default FormacaoAcademicaCadastrar;