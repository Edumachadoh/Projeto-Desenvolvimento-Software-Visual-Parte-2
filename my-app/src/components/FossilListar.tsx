import { useEffect ,useState }from 'react';
import { Paleontologo } from '../interfaces/Paleontologo';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Fossil } from '../interfaces/Fossil';

function FossilListar(){
    const [fossil, setFossil] = useState<Fossil[]>([]);

    useEffect(() => {
        fetch("http://localhost:5020/api/fossil/listar") 
            .then(resposta => {
                return resposta.json();
            }) 
            .then(fossil => {
                setFossil(fossil);
            });
       
    });

        function deletar(id: string) {
            axios
              .delete(`http://localhost:5020/api/fossil/deletar/${id}`)
              .then((resposta) => {
                console.log(resposta.data);
              });
          }
    

    return <div>
        <h1>Listar Fossil
        </h1>
        
        <table>
            <tr>
                <th>ID</th>
                <th>Nome</th>
                <th>NomeCientifico</th>
                <th>Localizacao Descoberta</th>
                <th>Tipo Fossil</th>
                <th>Especia Organismo</th>
                <th>Condicao Preservacao</th>
                <th>Epoca Geologica</th>
                <th>Adicionado em</th>
                <th>Deletar</th>
                <th>Editar</th>
            </tr>


            {fossil.map(fossil => (
                <tr key={fossil.id}>
                    <td>{fossil.id}</td>
                    <td>{fossil.nome}</td>
                    <td>{fossil.nomeCientifico}</td>
                    <td>{fossil.localizacaoDescoberta}</td>
                    <td>{fossil.tipoFossil}</td>
                    <td>{fossil.especiaOrganismo}</td>
                    <td>{fossil.condicaoPreservacao}</td>
                    <td>{fossil.epocaGeologica}</td>
                    <td>{new Date(fossil.adicionadoEm?? "").toLocaleDateString("pt-BR")}</td>
                    <td>
                    <button onClick={() => deletar(fossil.id!)} >
                         Deletar
                    </button>
                    </td>
                    <td>
                        <Link to={`/editar/artefato/${fossil.id}`} className="btn-link">
                        Alterar
                    </Link>
                    </td>
                </tr>
            ))}
        </table>
    </div>
}

export default FossilListar;