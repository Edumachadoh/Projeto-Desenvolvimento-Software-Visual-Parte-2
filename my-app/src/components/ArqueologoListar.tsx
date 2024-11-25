import { useEffect ,useState }from 'react';
import { Arqueologo } from '../interfaces/Arqueologo';

function ArqueologoListar(){
    const [arqueologo, setArqueologo] = useState<Arqueologo[]>([]);

    useEffect(() => {
        fetch("http://localhost:5020/api/Arqueologo/listar") 
            .then(resposta => {
                return resposta.json();
            }) 
            .then(arqueologo => {
                setArqueologo(arqueologo);
            });

        
    });

    return <div>
        <h1>Listar Areas de Especialização
        </h1>
        
        <table>
            <tr>
                <th>ID</th>
                <th>Nome</th>
                <th>Pais</th>
            </tr>


            {arqueologo.map(arqueologo => (
                <tr key={arqueologo.id}>
                    <td>{arqueologo.id}</td>
                    <td>{arqueologo.nome}</td>
                    <td>{arqueologo.cpf}</td>
                    <td>{arqueologo.dataNascimento}</td>
                </tr>
            ))}
        </table>
    </div>
}

export default ArqueologoListar;