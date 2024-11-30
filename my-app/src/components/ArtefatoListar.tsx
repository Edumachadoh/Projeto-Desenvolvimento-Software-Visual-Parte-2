import { useEffect ,useState }from 'react';
import { Arqueologo } from '../interfaces/Arqueologo';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Artefato } from '../interfaces/Artefato';

function ArtefatoListar(){
    const [artefato, setArtefato] = useState<Artefato[]>([]);

    useEffect(() => {
        fetch("http://localhost:5020/api/artefato/listar") 
            .then(resposta => {
                return resposta.json();
            }) 
            .then(artefato => {
                setArtefato(artefato);
            });
       
    });

        function deletar(id: string) {
            axios
              .delete(`http://localhost:5020/api/artefato/deletar/${id}`)
              .then((resposta) => {
                console.log(resposta.data);
              });
          }
    

    return <div>
        <h1>Listar Artefato
        </h1>
        
        <table>
            <tr>
                <th>ID</th>
                <th>Nome</th>
                <th>Periodo</th>
                <th>Civilizacao Origem</th>
                <th>Funcionalidade</th>
                <th>Dimensao</th>
                <th>Material</th>
                <th>Adicionado em</th>
                <th>Deletar</th>
                <th>Editar</th>
            </tr>


            {/* {artefato.map(arteafto => (
                <tr key={artefato.id}>
                    <td>{artefato.id}</td>
                    <td>{artefato.nome}</td>
                    <td>{artefato.periodo}</td>
                    <td>{arteafto.civilizacaoDeOrigem}</td>
                    <td>{arteafto.funcionalidade}</td>
                    <td>{arteafto.dimensao}</td>
                    <td>{arteafto.material}</td>
                    <td>{new Date(artefato.adicionadoEm?? "").toLocaleDateString("pt-BR")}</td>
                    <td>
                    <button onClick={() => deletar(artefato.id!)} >
                         Deletar
                    </button>
                    </td>
                    <td>
                        <Link to={`/editar/artefato/${artefato.id}`} className="btn-link">
                        Alterar
                    </Link>
                    </td>
                </tr>


            ))} */}
        </table>
    </div>
}

export default ArtefatoListar;