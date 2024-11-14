import { useEffect ,useState } from 'react';
import { Artefato } from '../interfaces/Artefato';

function ArtefatoListar(){
    const [Artefato, setArtefatos] = useState<Artefato[]>([]);
    
    useEffect(() => {
        fetch("http://localhost:5020/api/artefato/listar") 
            .then(resposta => {
                return resposta.json();
            }) 
            .then(Artefato => {
                setArtefatos(Artefato);
            });

        
    });
    
    
    return <div>
        <h1>Listar Artefatos
        </h1>

        <table>
            <tr>
                <th>ID</th>
                <th>Nome</th>
                <th>Periodo</th>
            </tr>



            {Artefato.map(Artefato => (
                <tr key={Artefato.id}>
                    <td>{Artefato.id}</td>
                    <td>{Artefato.nome}</td>
                    <td>{Artefato.periodo}</td>
                    
                </tr>
            ))}
        </table>
    </div>
}

export default ArtefatoListar;