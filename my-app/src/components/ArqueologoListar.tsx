import { useEffect ,useState }from 'react';
import { Arqueologo } from '../interfaces/Arqueologo';

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
                <th>Adicionado em</th>
            </tr>


            {arqueologo.map(arqueologo => (
                <tr key={arqueologo.id}>
                    <td>{arqueologo.id}</td>
                    <td>{arqueologo.nome}</td>
                    <td>{arqueologo.cpf}</td>
                    <td>{new Date(arqueologo.dataNascimento).toLocaleDateString("pt-BR")}</td>
                    <td>{arqueologo.anosExperiencia}</td>
                    <td>{Number(arqueologo.idRegistroProfissional)}</td>
                    <td>{new Date(arqueologo.adicionadoEm?? "").toLocaleDateString("pt-BR")}</td>
                </tr>
            ))}
        </table>
    </div>
}

export default ArqueologoListar;