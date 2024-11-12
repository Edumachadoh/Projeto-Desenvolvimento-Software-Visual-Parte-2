import { useEffect ,useState } from 'react';
import { AreaEspecializacao } from '../interfaces/AreaEspecializacao';

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
    
    
    return <div>
        <h1>Listar Areas de Especialização
        </h1>

        <table>
            <tr>
                <th>ID</th>
                <th>Nome</th>
                <th>Pais</th>
            </tr>


            {areaEspecializacao.map(areaEspecializacao => (
                <tr key={areaEspecializacao.id}>
                    <td>{areaEspecializacao.id}</td>
                    <td>{areaEspecializacao.nome}</td>
                    <td>{areaEspecializacao.pais}</td>
                    
                </tr>
            ))}
        </table>
    </div>
}

export default AreaEspecializacaoListar;