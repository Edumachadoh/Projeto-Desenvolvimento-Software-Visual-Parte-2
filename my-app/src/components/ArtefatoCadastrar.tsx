import { useEffect, useState } from "react";
import { Artefato } from "../interfaces/Artefato";
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
  
    function enviarProduto(e: any) {
      e.preventDefault();
  
      const artefato: Artefato = {
        nome: nome,
        periodo: periodo,
        quantidade: Number(quantidade),
        preco: Number(preco),
        categoriaId: categoriaId,
      };
  
      fetch("http://localhost:5020/api/artefato/cadastrar", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(artefato),
      })
        .then((resposta) => {
          return resposta.json();
        })
        .then((artefato) => {
          console.log("Artefato cadastrado", artefato);
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
  
          <div>
            <label htmlFor="periodo">Periodo</label>
            <input
              type="text"
              id="periodo"
              name="periodo"
              onChange={(e: any) => setPeriodo(e.target.value)}
            />
          </div>
  
          <div>
            <label htmlFor="preco">Preço</label>
            <input
              type="number"
              id="preco"
              name="preco"
              onChange={(e: any) => setPreco(e.target.value)}
            />
          </div>
  
          <div>
            <label htmlFor="quantidade">Quantidade</label>
            <input
              type="number"
              id="quantidade"
              name="quantidade"
              onChange={(e: any) => setQuantidade(e.target.value)}
            />
          </div>
  
          <div>
            <label htmlFor="quantidade">Categorias</label>
            <select
              onChange={(e: any) => setCategoriaId(e.target.value)}
            >
              {categorias.map((categoria) => (
                <option
                  value={categoria.categoriaId}
                  key={categoria.categoriaId}
                >
                  {categoria.nome}
                </option>
              ))}
            </select>
          </div>
  
          <button type="submit">Cadastrar Artefato</button>
        </form>
      </div>
    );
  }
  
  export default ArtefatoCadastrar;