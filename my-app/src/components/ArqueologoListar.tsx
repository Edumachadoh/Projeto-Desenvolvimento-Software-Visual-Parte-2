import { useEffect ,useState }from 'react';
import { Arqueologo } from '../interfaces/Arqueologo';
import axios from 'axios';
import { Link } from 'react-router-dom';

function ArqueologoListar(){
    const [arqueologo, setArqueologo] = useState<Arqueologo[]>([]);

    useEffect(() => {
        fetch("http://localhost:5020/api/arqueologo/listar") 
            .then(resposta => {
                return resposta.json();
            }) 
            .then(arqueologo => {
                setArqueologo(arqueologo);
            });

        
    });

   
        function deletar(id: string) {
            axios
              .delete(`http://localhost:5020/api/arqueologo/deletar/${id}`)
              .then((resposta) => {
                console.log(resposta.data);
              });
          }
    

    return <div>
        <h1>Listar Arqueólogos
        </h1>
        
        <table>
            <tr>
                <th>ID</th>
                <th>Nome</th>
                <th>Cpf</th>
                <th>Data de Nascimento</th>
                <th>Anos de experiência</th>
                <th>Número Registro Profissional</th>
                <th>Formação Acadêmica</th>
                <th>Adicionado em</th>
                <th>Deletar</th>
                <th>Editar</th>
            </tr>


            {arqueologo.map(arqueologo => (
                <tr key={arqueologo.id}>
                    <td>{arqueologo.id}</td>
                    <td>{arqueologo.nome}</td>
                    <td>{arqueologo.cpf}</td>
                    <td>{new Date(arqueologo.dataNascimento).toLocaleDateString("pt-BR")}</td>
                    <td>{arqueologo.anosExperiencia}</td>
                    <td>{Number(arqueologo.idRegistroProfissional)}</td>
                    <td>{arqueologo.formacaoAcademica?.nome}</td>
                    <td>{new Date(arqueologo.adicionadoEm?? "").toLocaleDateString("pt-BR")}</td>
                    <td>
                    <button onClick={() => deletar(arqueologo.id!)} >
                         Deletar
                    </button>
                    </td>
                    <td>
                        <Link to={`/editar/arqueologo/${arqueologo.id}`} className="btn-link">
                        Alterar
                    </Link>
                    </td>
                </tr>
            ))}
        </table>
    </div>
}

export default ArqueologoListar;