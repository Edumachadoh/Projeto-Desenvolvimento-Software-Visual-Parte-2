import { useEffect ,useState } from 'react';
import { AreaEspecializacao } from '../interfaces/AreaEspecializacao';
import { Link } from 'react-router-dom';
import axios from 'axios';

function AreaEspecializacaoListar(){
    const [areaEspecializacao, setAreasEspecializacao] = useState<AreaEspecializacao[]>([]);
    
    useEffect(() => {
        fetch("http://localhost:5020/api/area-especializacao/listar") 
            .then(resposta => {
                return resposta.json();
            }) 
            .then(areaEspecializacao => {
                setAreasEspecializacao(areaEspecializacao);
            });

        
    });
    
    function deletar(id: string) {
        axios
          .delete(`http://localhost:5020/api/area-Especializacao/deletar/${id}`)
          .then((resposta) => {
            console.log(resposta.data);
          });
      }
    
    return <div>
        <h1>Listar Areas de Especialização
        </h1>

        <table>
            <tr>
                <th>ID</th>
                <th>Nome</th>
                <th>Pais</th>
                <th>Deletar</th>
                <th>Editar</th>
            </tr>

            {areaEspecializacao.map(areaEspecializacao => (
                <tr key={areaEspecializacao.id}>
                    <td>{areaEspecializacao.id}</td>
                    <td>{areaEspecializacao.nome}</td>
                    <td>{areaEspecializacao.pais}</td>
                    <td>
                    <button onClick={() => deletar(areaEspecializacao.id!)} >
                         Deletar
                    </button>
                    </td>
                    <td>
                        <Link to={`/editar/areaEspecializacao/${areaEspecializacao.id}`} className="btn-link">
                        Alterar
                    </Link>
                    </td>
                </tr>
            ))}
        </table>
    </div>
}

export default AreaEspecializacaoListar;