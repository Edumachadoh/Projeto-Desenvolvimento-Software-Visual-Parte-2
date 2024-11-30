import { useEffect, useState } from "react";
import { Artefato } from "../interfaces/Artefato";
import { Arqueologo } from "../interfaces/Arqueologo"; // Corrigido de Paleontologo para Arqueologo, conforme contexto

function ArtefatoCadastrar() {
    const [nome, setNome] = useState("");
    const [periodo, setPeriodo] = useState("");
    const [civilizacaoDeOrigem, setCivilizacaoDeOrigem] = useState("");
    const [funcionalidade, setFuncionalidade] = useState("");
    const [dimensao, setDimensao] = useState("");
    const [material, setMaterial] = useState("");
    const [arqueologoId, setArqueologoId] = useState(0);
    const [arqueologos, setArqueologos] = useState<Arqueologo[]>([]); // Melhor tipo para segurança de tipo

    // Carregar arqueólogos
    useEffect(() => {
        fetch("http://localhost:5020/api/arqueologo/listar") // URL corrigida para listar arqueólogos
            .then((resposta) => resposta.json())
            .then((dados) => {
                setArqueologos(dados);
                console.table(dados);
            });
    }, []);

    // Enviar artefato
    function enviarArtefato(e: any) {
        e.preventDefault(); // Evitar recarregamento da página no submit

        const artefato: Artefato = {
            nome,
            periodo,
            civilizacaoDeOrigem,
            funcionalidade,
            dimensao,
            material,
            arqueologoId: Number(arqueologoId), // Garantir que o ID do arqueólogo seja um número
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
        <div id="cadastro-artefato" className="cadastro-artefato">
            <h1>Cadastrar Artefato</h1>
            <form onSubmit={enviarArtefato}>
                <div className="form-group">
                    <label htmlFor="nome">Nome</label>
                    <input
                        onChange={(e) => setNome(e.target.value)}
                        type="text"
                        id="nome"
                        name="nome"
                        required
                        placeholder="Digite o nome do artefato"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="periodo">Período</label>
                    <textarea
                        onChange={(e) => setPeriodo(e.target.value)}
                        id="periodo"
                        name="periodo"
                        required
                        placeholder="Digite o período do artefato"
                    ></textarea>
                </div>

                <div className="form-group">
                    <label htmlFor="civilizacaoDeOrigem">Civilização de Origem</label>
                    <input
                        onChange={(e) => setCivilizacaoDeOrigem(e.target.value)}
                        type="text"
                        id="civilizacaoDeOrigem"
                        name="civilizacaoDeOrigem"
                        required
                        placeholder="Digite a civilização de origem do artefato"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="funcionalidade">Funcionalidade</label>
                    <input
                        onChange={(e) => setFuncionalidade(e.target.value)}
                        type="text"
                        id="funcionalidade"
                        name="funcionalidade"
                        required
                        placeholder="Digite a funcionalidade do artefato"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="dimensao">Dimensão</label>
                    <input
                        onChange={(e) => setDimensao(e.target.value)}
                        type="text"
                        id="dimensao"
                        name="dimensao"
                        required
                        placeholder="Digite a dimensão do artefato"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="material">Material</label>
                    <input
                        onChange={(e) => setMaterial(e.target.value)}
                        type="text"
                        id="material"
                        name="material"
                        required
                        placeholder="Digite o material do artefato"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="arqueologo">Arqueólogo</label>
                    <select
                        id="arqueologo"
                        value={arqueologoId}
                        onChange={(e) => setArqueologoId(Number(e.target.value))}
                    >
                        <option value="">Selecione um arqueólogo</option>
                        {arqueologos.map((arqueologo) => (
                            <option key={arqueologo.id} value={arqueologo.id}>
                                {arqueologo.nome}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="form-actions">
                    <button type="submit">Cadastrar Artefato</button>
                </div>
            </form>
        </div>
    );
}

export default ArtefatoCadastrar;