import { useEffect ,useState } from 'react';
import { FormacaoAcademica } from '../interfaces/FormacaoAcademica';

function AreaEspecializacaoListar(){
    const [formacaoAcademica, setAreasEspecializacao] = useState<FormacaoAcademica[]>([]);
    
    useEffect(() => {
        fetch("http://localhost:5020/api/formacao-academica/listar") 
            .then(resposta => {
                return resposta.json();
            }) 
            .then(formacaoAcademica => {
                setAreasEspecializacao(formacaoAcademica);
            });

        
    });
    
    
    return <div>
        <h1>Listar Formações Acadêmicas
        </h1>

        <table>
            <tr>
                <th>ID</th>
                <th>Nome</th>
                <th>Pais</th>
            </tr>


            {formacaoAcademica.map(formacaoAcademica => (
                <tr key={formacaoAcademica.id}>
                    <td>{formacaoAcademica.id}</td>
                    <td>{formacaoAcademica.nome}</td>
                    <td>{formacaoAcademica.universidade}</td>
                    
                </tr>
            ))}
        </table>
    </div>
}

export default AreaEspecializacaoListar;