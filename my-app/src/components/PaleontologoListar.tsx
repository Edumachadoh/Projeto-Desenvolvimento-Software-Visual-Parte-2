import { useEffect ,useState } from 'react';
import { Paleontologo } from '../interfaces/Paleontologo';

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
                <th>Adicionado em</th>
            </tr>

            {paleontologo.map(paleontologo => (
                <tr key={paleontologo.id}>
                    <td>{paleontologo.id}</td>
                    <td>{paleontologo.nome}</td>
                    <td>{paleontologo.cpf}</td>
                    <td>{paleontologo.dataNascimento}</td>
                    <td>{paleontologo.anosExperiencia}</td>
                    <td>{Number(paleontologo.idMatricula)}</td>
                    <td>{new Date(paleontologo.adicionadoEm?? "").toLocaleDateString("pt-BR")}</td>
                </tr>
            ))}
        </table>
    </div>
}

export default PaleontologoListar;