import { useEffect ,useState } from 'react';
import { Paleontologo } from '../interfaces/Paleontologo';

function AreaEspecializacaoListar(){
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
        <h1>Listar Areas de Especialização
        </h1>
        
        <table>
            <tr>
                <th>ID</th>
                <th>Nome</th>
                <th>Pais</th>
            </tr>


            {paleontologo.map(paleontologo => (
                <tr key={paleontologo.id}>
                    <td>{paleontologo.id}</td>
                    <td>{paleontologo.nome}</td>
                    <td>{paleontologo.cpf}</td>
                    <td>{paleontologo.dataNascimento}</td>
                    <td>{paleontologo.anosExperiencia}</td>
                </tr>
            ))}
        </table>
    </div>
}

export default AreaEspecializacaoListar;