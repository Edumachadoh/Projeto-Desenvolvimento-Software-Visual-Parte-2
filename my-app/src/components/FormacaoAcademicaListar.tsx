import { useEffect ,useState } from 'react';
import { FormacaoAcademica } from '../interfaces/FormacaoAcademica';
import { Link } from 'react-router-dom';
import axios from 'axios';

function FormacaoAcademicaListar(){
    const [formacaoAcademica, setFormacoesAcademicas] = useState<FormacaoAcademica[]>([]);

    useEffect(() => {
        fetch("http://localhost:5020/api/formacao-Academica/listar")
          .then((resposta) => resposta.json())
          .then((formacoes) => setFormacoesAcademicas(formacoes));
      }, []); 
      
    function deletar(id: string) {
        axios
          .delete(`http://localhost:5020/api/formacao-Academica/deletar/${id}`)
          .then((resposta) => {
            console.log(resposta.data);
          });
      }

    return <div>
        <h1>Listar Formações Acadêmicas
        </h1>
        
        <table>
            <tr>
                <th>ID</th>
                <th>Nome</th>
                <th>Pais</th>
                <th>Deletar</th>
                <th>Editar</th>
            </tr>


            {formacaoAcademica.map(formacaoAcademica => (
                <tr key={formacaoAcademica.id}>
                    <td>{formacaoAcademica.id}</td>
                    <td>{formacaoAcademica.nome}</td>
                    <td>{formacaoAcademica.universidade}</td>
                    <td>
                    <button onClick={() => deletar(formacaoAcademica.id!)} >
                         Deletar
                    </button>
                    </td>
                    <td>
                        <Link to={`/editar/formacaoAcademica/${formacaoAcademica.id}`} className="btn-link">
                        Alterar
                    </Link>
                    </td>
                </tr>
            ))}
        </table>
    </div>
}

export default FormacaoAcademicaListar;