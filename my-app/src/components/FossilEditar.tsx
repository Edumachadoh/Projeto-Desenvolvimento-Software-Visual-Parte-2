import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from "axios";
import { Fossil } from '../interfaces/Fossil';
import { Paleontologo } from '../interfaces/Paleontologo';

function FossilEditar() {
  const { id } = useParams();
  const [fossil, setFossil] = useState<Fossil | null>(null); // Para armazenar o fósseis que será editado
  const [paleontologos, setPaleontologos] = useState<Paleontologo[]>([]);
  const [nome, setNome] = useState("");
  const [nomeCientifico, setNomeCientifico] = useState("");
  const [localizacaoDescoberta, setLocalizacaoDescoberta] = useState("");
  const [tipoFossil, setTipoFossil] = useState("");
  const [especiaOrganismo, setEspeciaOrganismo] = useState("");
  const [condicaoPreservacao, setCondicaoPreservacao] = useState("");
  const [epocaGeologica, setEpocaGeologica] = useState("");
  const [paleontologoId, setPaleontologoId] = useState(0);


  useEffect(() => {
    if (id) {
      axios
        .get<Fossil>(`http://localhost:5020/api/fossil/buscar/${id}`)
        .then((resposta) => {
          const fossilData = resposta.data;
          setFossil(fossilData);
          setNome(fossilData.nome);
          setNomeCientifico(fossilData.nomeCientifico);
          setLocalizacaoDescoberta(fossilData.localizacaoDescoberta);
          setTipoFossil(fossilData.tipoFossil);
          setEspeciaOrganismo(fossilData.especiaOrganismo);
          setCondicaoPreservacao(fossilData.condicaoPreservacao);
          setEpocaGeologica(fossilData.epocaGeologica);
          setPaleontologoId(fossilData.paleontologoId);
        })
        .catch((erro) => {
          console.error("Erro ao buscar fósseis:", erro);
        });
    }

    axios
      .get<Paleontologo[]>("http://localhost:5020/api/paleontologo/listar")
      .then((resposta) => {
        setPaleontologos(resposta.data);
      })
      .catch((erro) => {
        console.error("Erro ao buscar paleontólogos:", erro);
      });
  }, [id]);

  function enviarProduto(e: any) {
    e.preventDefault();

    const fossilData: Fossil = {
      nome,
      nomeCientifico,
      localizacaoDescoberta,
      tipoFossil,
      especiaOrganismo,
      condicaoPreservacao,
      epocaGeologica,
      paleontologoId,
    };

    axios
      .put(`http://localhost:5020/api/fossil/alterar/${id}`, fossilData)
      .then((resposta) => {
        console.log("Fósseis atualizado:", resposta.data);
        
      })
      .catch((erro) => {
        console.error("Erro ao atualizar fósseis:", erro);
      });
  }

  if (!fossil) return <div>Carregando...</div>; 

  return (
    <div className="form-container">
      <div className="form-header">
        <h2>Editar Fóssil</h2>
      </div>
      <form onSubmit={enviarProduto}>
        <div className="form-group">
          <label htmlFor="nome">Nome</label>
          <input
            type="text"
            id="nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="nomeCientifico">Nome Científico</label>
          <input
            type="text"
            id="nomeCientifico"
            value={nomeCientifico}
            onChange={(e) => setNomeCientifico(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="localizacaoDescoberta">Localização da Descoberta</label>
          <input
            type="text"
            id="localizacaoDescoberta"
            value={localizacaoDescoberta}
            onChange={(e) => setLocalizacaoDescoberta(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="tipoFossil">Tipo de Fóssil</label>
          <input
            type="text"
            id="tipoFossil"
            value={tipoFossil}
            onChange={(e) => setTipoFossil(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="especiaOrganismo">Espécie do Organismo</label>
          <input
            type="text"
            id="especiaOrganismo"
            value={especiaOrganismo}
            onChange={(e) => setEspeciaOrganismo(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="condicaoPreservacao">Condição de Preservação</label>
          <input
            type="text"
            id="condicaoPreservacao"
            value={condicaoPreservacao}
            onChange={(e) => setCondicaoPreservacao(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="epocaGeologica">Época Geológica</label>
          <input
            type="text"
            id="epocaGeologica"
            value={epocaGeologica}
            onChange={(e) => setEpocaGeologica(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Paleontólogo</label>
          <select
            value={paleontologoId}
            onChange={(e) => setPaleontologoId(Number(e.target.value))}
          >
            {paleontologos.map((paleontologo) => (
              <option key={paleontologo.id} value={paleontologo.id}>
                {paleontologo.nome}
              </option>
            ))}
          </select>
        </div>
        <button type="submit">Salvar Alterações</button>
      </form>
    </div>
  );
}

export default FossilEditar;