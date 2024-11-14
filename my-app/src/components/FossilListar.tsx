import { useEffect ,useState } from 'react';
import { Fossil } from '../interfaces/Fossil';

function FossilListar(){
    const [Fossil, setFosseis] = useState<Fossil[]>([]);
    
    useEffect(() => {
        fetch("http://localhost:5020/api/fossil/listar") 
            .then(resposta => {
                return resposta.json();
            }) 
            .then(Fossil => {
                setFosseis(Fossil);
            });
    });
    
    
    return <div>
        <h1>Listar Fosseis
        </h1>

        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nome</th>
                    <th>Nome Científico</th>
                    <th>Localização de Descoberta</th>
                    <th>Tipo de Fóssil</th>
                    <th>Espécie do Organismo</th>
                    <th>Condição de Preservação</th>
                    <th>Época Geológica</th>
                    <th>Paleontólogo ID</th>
                    <th>Adicionado Em</th>
                </tr>
            </thead>
            <tbody>
                {Fossil.map(fossil => (
                    <tr key={fossil.id}>
                        <td>{fossil.id}</td>
                        <td>{fossil.nome}</td>
                        <td>{fossil.nomeCientifico}</td>
                        <td>{fossil.localizacaoDescoberta}</td>
                        <td>{fossil.tipoFossil}</td>
                        <td>{fossil.especiaOrganismo}</td>
                        <td>{fossil.condicaoPreservacao}</td>
                        <td>{fossil.epocaGeologica}</td>
                        <td>{fossil.paleontologoId}</td>
                        <td>{new Date(fossil.adicionadoEm).toLocaleDateString()}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
}

export default FossilListar;