import { useEffect, useState } from 'react';
import { Artefato } from '../interfaces/Artefato';
import axios from 'axios';
import { Arqueologo } from '../interfaces/Arqueologo';
import { useParams } from 'react-router-dom';

function ArtefatoEditar() {
    const { id } = useParams();  
    const [arqueologos, setArqueologos] = useState<Arqueologo[]>([]);
    const [nome, setNome] = useState("");
    const [periodo, setPeriodo] = useState("");
    const [civilizacaoDeOrigem, setCivilizacaoDeOrigem] = useState("");
    const [funcionalidade, setFuncionalidade] = useState("");
    const [dimensao, setDimensao] = useState("");
    const [material, setMaterial] = useState("");
    const [arqueologoId, setArqueologoId] = useState<number>(0);

    useEffect(() => {
        if (id) {
            axios.get<Artefato>(`http://localhost:5020/api/artefato/buscar/${id}`)
                .then((resposta) => {
                    const artefato = resposta.data;
                    setNome(artefato.nome);
                    setPeriodo(artefato.periodo);
                    setCivilizacaoDeOrigem(artefato.civilizacaoDeOrigem);
                    setFuncionalidade(artefato.funcionalidade);
                    setDimensao(artefato.dimensao);
                    setMaterial(artefato.material);
                    setArqueologoId(artefato.arqueologoId);
                });

            axios.get<Arqueologo[]>("http://localhost:5020/api/Arqueologo/listar")
                .then((resposta) => {
                    setArqueologos(resposta.data);
                });
        }
    }, [id]); 

    function enviarProduto(e: React.FormEvent) {
        e.preventDefault();

        const artefato: Artefato = {
            nome,
            periodo,
            civilizacaoDeOrigem,
            funcionalidade,
            dimensao,
            material,
            arqueologoId: arqueologoId
        };

        axios.put(`http://localhost:5020/api/artefato/alterar/${id}`, artefato)
            .then((resposta) => {
                console.log('Artefato alterado:', resposta.data);
               
            })
            .catch((err) => {
                console.error('Erro ao alterar artefato:', err);
            });
    }

    return (
        <div className="form-container">
            <div className="form-header">
                <h2>Edição de Artefato</h2>
            </div>
            <form onSubmit={enviarProduto}>
                <div className="form-group">
                    <label htmlFor="nome">Nome</label>
                    <input
                        placeholder="Bastão de marfim"
                        type="text"
                        id="nome"
                        name="nome"
                        value={nome}
                        required
                        onChange={(e) => setNome(e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="periodo">Período</label>
                    <input
                        placeholder="Paleolítico Superior"
                        type="text"
                        id="periodo"
                        name="periodo"
                        value={periodo}
                        required
                        onChange={(e) => setPeriodo(e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="civilizacaoDeOrigem">Civilização de Origem</label>
                    <input
                        placeholder="Primeiros humanos América do Norte"
                        type="text"
                        id="civilizacaoDeOrigem"
                        name="civilizacaoDeOrigem"
                        value={civilizacaoDeOrigem}
                        required
                        onChange={(e) => setCivilizacaoDeOrigem(e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="funcionalidade">Funcionalidade</label>
                    <input
                        placeholder="Criação de cordas"
                        type="text"
                        id="funcionalidade"
                        name="funcionalidade"
                        value={funcionalidade}
                        required
                        onChange={(e) => setFuncionalidade(e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="dimensao">Dimensão</label>
                    <input
                        placeholder="21cm"
                        type="text"
                        id="dimensao"
                        name="dimensao"
                        value={dimensao}
                        required
                        onChange={(e) => setDimensao(e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="material">Material</label>
                    <input
                        placeholder="Origem vegetal"
                        type="text"
                        id="material"
                        name="material"
                        value={material}
                        required
                        onChange={(e) => setMaterial(e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label>Arqueólogo:</label>
                    <select
                        value={arqueologoId}
                        onChange={(e) => setArqueologoId(Number(e.target.value))}
                    >
                        <option value="">Selecione o arqueólogo</option>
                        {arqueologos.map((arqueologo) => (
                            <option key={arqueologo.id} value={arqueologo.id}>
                                {arqueologo.nome}
                            </option>
                        ))}
                    </select>
                </div>

                <button type="submit">Alterar</button>
            </form>
        </div>
    );
}

export default ArtefatoEditar;