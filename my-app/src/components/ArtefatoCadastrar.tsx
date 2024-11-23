import { useEffect, useState } from "react";
import { Artefato } from "../interfaces/Artefato";
import { Paleontologo } from "../interfaces/Paleontologo";
import './ArtefatoCadastrar.css'

function ArtefatoCadastrar() {
    const [categorias, setCategorias] = useState<Categoria[]>([]);
    const [nome, setNome] = useState("");
    const [descricao, setDescricao] = useState("");
    const [quantidade, setQuantidade] = useState("");
    const [preco, setPreco] = useState("");
    const [categoriaId, setCategoriaId] = useState(0);
  
    useEffect(() => {
      axios
        .get<Categoria[]>("http://localhost:5020/api/artefato/listar")
        .then((resposta) => {
          setCategorias(resposta.data);
        });
    });
  
    function enviarArtefato(e: any) {
      e.preventDefault();

      const artefato: Artefato = {
        nome: nome,
        periodo: periodo,
        civilizacaoDeOrigem: civilizacaoDeOrigem,
        funcionalidade: funcionalidade,
        dimensao:  dimensao,
        material: material,
        arqueologoId: arqueologoId,
        adicionadoEm: adicionadoEm,
      };

      fetch("http://localhost:5020/api/artefato/listar", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(artefato),
    })
      .then((resposta) => {
        return resposta.json();
      })
      .then((produto) => {
        console.log("Produto cadastrado", produto);
      });
  }
  return (
    <div id="cadastrar_artefato" className="container">
      <h1>Cadastrar Artefato</h1>
      <form onSubmit={enviarArtefato}>
        <div>
          <label htmlFor="nome">Nome</label>
          <input
            type="text"
            id="nome"
            name="nome"
            required
            onChange={(e: any) => setNome(e.target.value)}
          />
        </div>

        <button type="submit">Cadastrar Artefato</button>
      </form>
    </div>
  );
}

export default ArtefatoCadastrar;