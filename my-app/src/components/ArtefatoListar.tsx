import { useEffect, useState } from 'react';
import { Artefato } from '../interfaces/Artefato';
import axios from 'axios';
import { Link } from 'react-router-dom';

function ArtefatoListar() {
    const [artefato, setArtefato] = useState<Artefato[]>([]);

    useEffect(() => {
        // Mudamos para axios para um tratamento mais adequado
        axios.get("http://localhost:5020/api/artefato/listar")
            .then(resposta => {
                setArtefato(resposta.data);
            })
            .catch(err => console.error("Erro ao buscar dados:", err));
    }, []); // A chamada da API ocorre apenas uma vez após a montagem do componente

    function deletar(id: string) {
        axios.delete(`http://localhost:5020/api/artefato/deletar/${id}`)
            .then(resposta => {
                console.log(resposta.data);
                // Após deletar, podemos remover o artefato da lista de estado
                setArtefato(artefato.filter(artefato => artefato.id !== id));
            })
            .catch(err => console.error("Erro ao deletar artefato:", err));
    }

    return (
        <div>
            <h1>Listar Artefato</h1>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Periodo</th>
                        <th>Civilização de Origem</th>
                        <th>Funcionalidade</th>
                        <th>Dimensão</th>
                        <th>Material</th>
                        <th>Adicionado em</th>
                        <th>Deletar</th>
                        <th>Editar</th>
                    </tr>
                </thead>
                <tbody>
                    {artefato.map(arteafto => (
                        <tr key={arteafto.id}>
                            <td>{arteafto.id}</td>
                            <td>{arteafto.nome}</td>
                            <td>{arteafto.periodo}</td>
                            <td>{arteafto.civilizacaoDeOrigem}</td>
                            <td>{arteafto.funcionalidade}</td>
                            <td>{arteafto.dimensao}</td>
                            <td>{arteafto.material}</td>
                            <td>{new Date(arteafto.adicionadoEm ?? "").toLocaleDateString("pt-BR")}</td>
                            <td>
                                <button onClick={() => deletar(arteafto.id)}>
                                    Deletar
                                </button>
                            </td>
                            <td>
                                <Link to={`/editar/artefato/${arteafto.id}`} className="btn-link">
                                    Alterar
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ArtefatoListar;