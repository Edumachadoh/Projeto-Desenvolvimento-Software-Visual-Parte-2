import { useEffect ,useState } from 'react';
import { Fossil } from '../interfaces/Fossil';

function FossilListar(){
    const [Fossil, SetFossil] = useState<Fossil[]>([]);
    
    useEffect(() => {
        fetch("http://localhost:5020/api/fossil/listar") 
            .then(resposta => {
                return resposta.json();
            }) 
            .then(Fossil => {
                setFossil(Fossil);
            });

        
    });

    return <div>
        <h1>Listar Fossil
        </h1>

        <table>
            <tr>
                <th>ID</th>
                <th>Nome</th>
                <th>Periodo</th>
            </tr>



            {Fossil.map(Fossil => (
                <tr key={Fossil.id}>
                    <td>{Fossil.id}</td>
                    <td>{Fossil.nome}</td>
                    <td>{Fossil.nomeCientifico}</td>
                    <td>{Fossil.localizacaoDescoberta}</td>
                    <td>{Fossil.tipoFossil}</td>
                    <td>{Fossil.especiaOrganismo}</td>
                    <td>{Fossil.condicaoPreservacao}</td>
                    <td>{Fossil.epocaGeologica}</td>

                    
                </tr>
            ))}
        </table>
    </div>
}

export default FossilListar;

