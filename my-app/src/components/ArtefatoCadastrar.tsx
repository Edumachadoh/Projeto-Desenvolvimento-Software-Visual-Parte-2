import { useEffect, useState } from "react";
import { Artefato } from "../interfaces/Artefato";
import { Arqueologo } from "../interfaces/Arqueologo"; 

function ArtefatoCadastrar() {
    const [nome, setNome] = useState("");
    const [periodo, setPeriodo] = useState("");
    const [civilizacaoDeOrigem, setCivilizacaoDeOrigem] = useState("");
    const [funcionalidade, setFuncionalidade] = useState("");
    const [dimensao, setDimensao] = useState("");
    const [material, setMaterial] = useState("");
    const [arqueologoId, setArqueologoId] = useState(0);
    const [arqueologos, setArqueologos] = useState<Arqueologo[]>([]); 
    useEffect(() => {
        fetch("http://localhost:5020/api/arqueologo/listar") 
            .then((resposta) => resposta.json())
            .then((dados) => {
                setArqueologos(dados);
                console.table(dados);
            });
    }, []);

    // Enviar artefato
    function enviarArtefato(e: any) {
        e.preventDefault(); 

        const artefato: Artefato = {
            nome,
            periodo,
            civilizacaoDeOrigem,
            funcionalidade,
            dimensao,
            material,
            arqueologoId: Number(arqueologoId), 
        };

        fetch("http://localhost:5020/api/artefato/cadastrar", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(artefato),
        })
        .then((resposta) => resposta.json())
        .then((produto) => {
            console.log("Artefato cadastrado:", produto);
        })
        .catch((err) => {
            console.error("Erro ao cadastrar artefato:", err);
        });
    }

    return (
        <div className="form-container">
            <div className="form-header">
                <h2>Cadastrar Artefato</h2>
            </div>
            <form onSubmit={enviarArtefato}>
                <div className="form-group">
                <label htmlFor="nome">Nome</label>
                <input
                    placeholder="Exemplo de Artefato"
                    type="text"
                    id="nome"
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
                    value={funcionalidade}
                    required
                    onChange={(e) => setFuncionalidade(e.target.value)}
                />
                </div>

                <div className="form-group">
                <label htmlFor="dimensao">Dimensão</label>
                <input
                    placeholder="21 cm"
                    type="text"
                    id="dimensao"
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
                    value={material}
                    required
                    onChange={(e) => setMaterial(e.target.value)}
                />
                </div>

                <div className="form-group">
                <label>Arqueólogo</label>
                <select
                    value={arqueologoId}
                    onChange={(e) => setArqueologoId(Number(e.target.value))}
                    required
                >
                    <option value={0}>Selecione um arqueólogo</option>
                    {arqueologos.map((arqueologo) => (
                    <option key={arqueologo.id} value={arqueologo.id}>
                        {arqueologo.nome}
                    </option>
                    ))}
                </select>
                </div>

                <button type="submit">Cadastrar</button>
            </form>
        </div>

    );
}

export default ArtefatoCadastrar;