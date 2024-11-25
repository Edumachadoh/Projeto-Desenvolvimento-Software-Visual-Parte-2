import { useEffect ,useState } from 'react';
import { Fossil } from '../interfaces/Fossil';

function FossilListar(){
    const [fossil, setFossil] = useState<Fossil[]>([]);
    
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
            <th>Nome</th>
                    <th>Nome Científico</th>
                    <th>Localização de Descoberta</th>
                    <th>Tipo de Fóssil</th>
                    <th>Espécie do Organismo</th>
                    <th>Condição de Preservação</th>
                    <th>Época Geológica</th>
                    <th>Adicionado Em</th>
            </tr>



            {fossil.map(fossil => (
                <tr key={fossil.id}>
                <td>{fossil.nome}</td>
                <td>{fossil.nomeCientifico}</td>
                <td>{fossil.localizacaoDescoberta}</td>
                <td>{fossil.tipoFossil}</td>
                <td>{fossil.especiaOrganismo}</td>
                <td>{fossil.condicaoPreservacao}</td>
                <td>{fossil.epocaGeologica}</td>
                <td>{new Date(fossil.adicionadoEm?? "").toLocaleDateString("pt-BR")}</td>
            </tr>
            ))}
        </table>
    </div>
}

export default FossilListar;

