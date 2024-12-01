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
            .catch(erro => console.error("Erro ao buscar dados:", erro));
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
                    {artefato.map(artefato => (
                        <tr key={artefato.id}>
                            <td>{artefato.id}</td>
                            <td>{artefato.nome}</td>
                            <td>{artefato.periodo}</td>
                            <td>{artefato.civilizacaoDeOrigem}</td>
                            <td>{artefato.funcionalidade}</td>
                            <td>{artefato.dimensao}</td>
                            <td>{artefato.material}</td>
                            <td>{new Date(artefato.adicionadoEm ?? "").toLocaleDateString("pt-BR")}</td>
                            <td>
                                <button onClick={() => deletar(artefato.id!)}>
                                    Deletar
                                </button>
                            </td>
                            <td>
                                <Link to={`/editar/artefato/${artefato.id}`} className="btn-link">
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