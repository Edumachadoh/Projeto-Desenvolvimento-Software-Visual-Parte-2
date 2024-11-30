import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Fossil } from '../interfaces/Fossil';

function FossilListar() {
  const [fossils, setFossils] = useState<Fossil[]>([]);

  // Use o useEffect corretamente com o array de dependências vazio.
  useEffect(() => {
    // Usando axios para obter os dados de forma consistente.
    axios
      .get("http://localhost:5020/api/fossil/listar")
      .then(resposta => {
        setFossils(resposta.data);
      })
      .catch((erro) => {
        console.error("Erro ao buscar fósseis:", erro);
      });
  }, []); // O array vazio garante que a requisição só seja feita uma vez.

  // Função para deletar o fósseis
  function deletar(id: string) {
    axios
      .delete(`http://localhost:5020/api/fossil/deletar/${id}`)
      .then((resposta) => {
        console.log("Fóssil deletado:", resposta.data);
        // Após deletar, é uma boa ideia atualizar a lista de fósseis.
        setFossils(fossils.filter(fossil => fossil.id !== id));
      })
      .catch((erro) => {
        console.error("Erro ao deletar fósseis:", erro);
      });
  }

  return (
    <div>
      <h1>Listar Fósseis</h1>
      
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Nome Científico</th>
            <th>Localização da Descoberta</th>
            <th>Tipo de Fóssil</th>
            <th>Espécie do Organismo</th>
            <th>Condição de Preservação</th>
            <th>Época Geológica</th>
            <th>Adicionado em</th>
            <th>Deletar</th>
            <th>Editar</th>
          </tr>
        </thead>
        <tbody>
          {fossils.map(fossil => (
            <tr key={fossil.id}>
              <td>{fossil.id}</td>
              <td>{fossil.nome}</td>
              <td>{fossil.nomeCientifico}</td>
              <td>{fossil.localizacaoDescoberta}</td>
              <td>{fossil.tipoFossil}</td>
              <td>{fossil.especiaOrganismo}</td>
              <td>{fossil.condicaoPreservacao}</td>
              <td>{fossil.epocaGeologica}</td>
              <td>{new Date(fossil.adicionadoEm || "").toLocaleDateString("pt-BR")}</td>
              <td>
                <button onClick={() => deletar(fossil.id!)}>
                  Deletar
                </button>
              </td>
              <td>
                <Link to={`/editar/fossil/${fossil.id}`} className="btn-link">
                  Alterar
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default FossilListar;