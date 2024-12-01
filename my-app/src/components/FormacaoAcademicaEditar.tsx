import { useEffect ,useState }from 'react';
import axios from "axios";
import { useParams } from 'react-router-dom';
import { FormacaoAcademica } from '../interfaces/FormacaoAcademica';

function FormacaoAcademicaEditar() {

  const { id } = useParams(); 
  const [nome, setNome] = useState("");
  const [universidade, setUniversidade] = useState("");

  useEffect(() => {
    if (id) {
        axios.get<FormacaoAcademica>(`http://localhost:5020/api/formacao-academica/buscar/${id}`)
            .then((resposta) => {
                const artefato = resposta.data;
                setNome(artefato.nome);
                setUniversidade(artefato.universidade);
            });

    }
}, [id]); 

  function enviarProduto(e: any) {
    e.preventDefault();

    const formacaoAcademica: FormacaoAcademica = {
        nome: nome,
        universidade: universidade
      };

    axios
      .put(`http://localhost:5020/api/formacao-academica/alterar/${id}`, formacaoAcademica)
      .then((resposta) => {
        console.log(resposta.data);
      });
  }

  return (
    
    <div className="form-container">
    <div className="form-header">
      <h2>Edição de Formacao Academica</h2>
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
      <label htmlFor="universidade">Universidade</label>
          <input
          placeholder="Universidade"
            type="text"
            id="universidade"
            name="universidade"
            value={universidade}
            required
            onChange={(e: any) => setUniversidade(e.target.value)}
          />
      </div>
      <button type="submit">Editar</button>
    </form>
  </div>
  );
}
    
 

export default FormacaoAcademicaEditar;