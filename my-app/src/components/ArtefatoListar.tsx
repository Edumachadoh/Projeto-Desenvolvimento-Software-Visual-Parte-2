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
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nome</th>
                    <th>Período</th>
                    <th>Civilização Origem</th>
                    <th>Funcionalidade</th>
                    <th>Dimensão</th>
                    <th>Material</th>
                    <th>ID Arqueólogo</th>
                    <th>Adicionado Em</th>
                </tr>
            </thead>
            <tbody>
                {Artefato.map((Artefato) => (
                    <tr key={Artefato.id}>
                        <td>{Artefato.id}</td>
                        <td>{Artefato.nome || 'N/A'}</td>
                        <td>{Artefato.periodo || 'N/A'}</td>
                        <td>{Artefato.civilizacaoDeOrigem || 'N/A'}</td>
                        <td>{Artefato.funcionalidade || 'N/A'}</td>
                        <td>{Artefato.dimensao || 'N/A'}</td>
                        <td>{Artefato.material || 'N/A'}</td>
                        <td>{Artefato.arqueologoId}</td>
                        <td>{new Date(Artefato.adicionadoEm).toLocaleDateString()}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
}

export default ArtefatoListar;