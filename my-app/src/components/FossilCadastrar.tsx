import { useEffect, useState } from 'react';
import axios from "axios";
import { Fossil } from '../interfaces/Fossil';
import { Paleontologo } from '../interfaces/Paleontologo';

function FossilCadastrar() {
  const [paleontologos, setPaleontologos] = useState<Paleontologo[]>([]);
  const [nome, setNome] = useState("");
  const [nomeCientifico, setNomeCientifico] = useState("");
  const [localizacaoDescoberta, setLocalizacaoDescoberta] = useState("");
  const [tipoFossil, setTipoFossil] = useState("");
  const [especiaOrganismo, setEspeciaOrganismo] = useState("");
  const [condicaoPreservacao, setCondicaoPreservacao] = useState("");
  const [epocaGeologica, setEpocaGeologica] = useState("");
  const [paleontologoId, setPaleontologoId] = useState<number>(0);

  // useEffect para carregar paleontólogos
  useEffect(() => {
    axios
      .get<Paleontologo[]>("http://localhost:5020/api/paleontologo/listar")
      .then((resposta) => {
        setPaleontologos(resposta.data);
      })
      .catch((erro) => {
        console.error("Erro ao carregar paleontólogos:", erro);
      });
  }, []);

  // Função para enviar o formulário
  function enviarProduto(e: React.FormEvent) {
    e.preventDefault();

    const fossil: Fossil = {
      nome,
      nomeCientifico,
      localizacaoDescoberta,
      tipoFossil,
      especiaOrganismo,
      condicaoPreservacao,
      epocaGeologica,
      paleontologoId: Number(paleontologoId),
    };

    axios
      .post("http://localhost:5020/api/fossil/cadastrar", fossil)
      .then((resposta) => {
        console.log("Fósseis cadastrado", resposta.data);
        // Limpar os campos após o envio
        setNome("");
        setNomeCientifico("");
        setLocalizacaoDescoberta("");
        setTipoFossil("");
        setEspeciaOrganismo("");
        setCondicaoPreservacao("");
        setEpocaGeologica("");
        setPaleontologoId(0);
      })
      .catch((erro) => {
        console.error("Erro ao cadastrar fósseis:", erro);
      });
  }

  return (
    <div className="form-container">
      <div className="form-header">
        <h2>Cadastro de Fóssil</h2>
      </div>
      <form onSubmit={enviarProduto}>
        <div className="form-group">
          <label htmlFor="nome">Nome</label>
          <input
            placeholder="Maximus"
            type="text"
            id="nome"
            value={nome}
            required
            onChange={(e) => setNome(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="nomeCientifico">Nome Científico</label>
          <input
            placeholder="Tyrannosaurus rex"
            type="text"
            id="nomeCientifico"
            value={nomeCientifico}
            required
            onChange={(e) => setNomeCientifico(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="localizacaoDescoberta">Localização da Descoberta</label>
          <input
            placeholder="Ilha de Madagascar"
            type="text"
            id="localizacaoDescoberta"
            value={localizacaoDescoberta}
            required
            onChange={(e) => setLocalizacaoDescoberta(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="tipoFossil">Tipo de Fóssil</label>
          <input
            placeholder="Cráneo"
            type="text"
            id="tipoFossil"
            value={tipoFossil}
            required
            onChange={(e) => setTipoFossil(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="especiaOrganismo">Espécie do Organismo</label>
          <input
            placeholder="T-rex"
            type="text"
            id="especiaOrganismo"
            value={especiaOrganismo}
            required
            onChange={(e) => setEspeciaOrganismo(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="condicaoPreservacao">Condição de Preservação</label>
          <input
            placeholder="Deteriorada"
            type="text"
            id="condicaoPreservacao"
            value={condicaoPreservacao}
            required
            onChange={(e) => setCondicaoPreservacao(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="epocaGeologica">Época Geológica</label>
          <input
            placeholder="Cretácio"
            type="text"
            id="epocaGeologica"
            value={epocaGeologica}
            required
            onChange={(e) => setEpocaGeologica(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Paleontólogo</label>
          <select
            value={paleontologoId}
            onChange={(e) => setPaleontologoId(Number(e.target.value))}
            required
          >
            <option value={0}>Selecione um paleontólogo</option>
            {paleontologos.map((paleontologo) => (
              <option key={paleontologo.id} value={paleontologo.id}>
                {paleontologo.nome}
              </option>
            ))}
          </select>
        </div>
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
}

export default FossilCadastrar;