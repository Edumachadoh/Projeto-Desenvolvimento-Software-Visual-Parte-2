import { useEffect ,useState }from 'react';
import axios from "axios";
import { useParams } from 'react-router-dom';
import { AreaEspecializacao } from '../interfaces/AreaEspecializacao';

function AreaEspecializacaoEditar() {

  const { id } = useParams(); 
  const [nome, setNome] = useState("");
  const [pais, setPais] = useState("");

  useEffect(() => {
    if (id) {
        axios.get<AreaEspecializacao>(`http://localhost:5020/api/area-especializacao/buscar/${id}`)
            .then((resposta) => {
                const artefato = resposta.data;
                setNome(artefato.nome);
                setPais(artefato.pais);
            });
    }
}, [id]); 

  function enviarProduto(e: any) {
    e.preventDefault();

    const areaEspecializacao: AreaEspecializacao = {
      nome: nome,
      pais: pais
    };

    axios
      .put(`http://localhost:5020/api/area-especializacao/alterar/${id}`, areaEspecializacao)
      .then((resposta) => {
        console.log(resposta.data);
      });
  }

  return (
    
    <div className="form-container">
    <div className="form-header">
      <h2>Edição de Área de Especializacao</h2>
    </div>
    <form onSubmit={enviarProduto}>
      <div className="form-group">
      <label htmlFor="nome">Nome</label>
          <input
          placeholder="Nome"
            type="text"
            id="nome"
            name="nome"
            value={nome}
            required
            onChange={(e: any) => setNome(e.target.value)}
          />
      </div>
      <div className="form-group">
      <label htmlFor="nome">País</label>
          <input
          placeholder="País"
            type="text"
            id="pais"
            name="pais"
            value={pais}
            required
            onChange={(e: any) => setPais(e.target.value)}
          />
      </div>
      <button type="submit">Editar</button>
    </form>
  </div>
  );
}
    
 

export default AreaEspecializacaoEditar;