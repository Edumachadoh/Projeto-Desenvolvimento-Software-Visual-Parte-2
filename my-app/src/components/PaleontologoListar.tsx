import { useEffect ,useState } from 'react';
import { Paleontologo } from '../interfaces/Paleontologo';
import { Link } from 'react-router-dom';
import axios from 'axios';

function PaleontologoListar(){
    const [paleontologo, setPaleontologo] = useState<Paleontologo[]>([]);
    
    useEffect(() => {
        fetch("http://localhost:5020/api/paleontologo/listar") 
            .then(resposta => {
                return resposta.json();
            }) 
            .then(paleontologo => {
                setPaleontologo(paleontologo);
            });

        
    });

    function deletar(id: string) {
        axios
          .delete(`http://localhost:5020/api/paleontologo/deletar/${id}`)
          .then((resposta) => {
            console.log(resposta.data);
          });
      }
    
    
    return <div>
        <h1>Listar Paleontólogos
        </h1>
        
        <table>
            <tr>
                <th>ID</th>
                <th>Nome</th>
                <th>Cpf</th>
                <th>Data de Nascimento</th>
                <th>Anos de experiência</th>
                <th>Número de Matrícula</th>
                <th>Área de Especialização</th>
                <th>Adicionado em</th>
                <th>Deletar</th>
                <th>Editar</th>
            </tr>

            {paleontologo.map(paleontologo => (
                <tr key={paleontologo.id}>
                    <td>{paleontologo.id}</td>
                    <td>{paleontologo.nome}</td>
                    <td>{paleontologo.cpf}</td>
                    <td>{paleontologo.dataNascimento}</td>
                    <td>{paleontologo.anosExperiencia}</td>
                    <td>{Number(paleontologo.idMatricula)}</td>
                    <td>{paleontologo.areaEspecializacao?.nome}</td>
                    <td>{new Date(paleontologo.adicionadoEm?? "").toLocaleDateString("pt-BR")}</td>
                    <td>
                    <button onClick={() => deletar(paleontologo.id!)} >
                         Deletar
                    </button>
                    </td>
                    <td>
                        <Link to={`/editar/paleontologo/${paleontologo.id}`} className="btn-link">
                        Alterar
                    </Link> 
                    </td>
                </tr>
            ))}
        </table>
    </div>
}

export default PaleontologoListar;