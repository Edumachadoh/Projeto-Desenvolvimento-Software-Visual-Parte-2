import { useEffect ,useState }from 'react';
import { Fossil } from '../interfaces/Fossil';
import axios from "axios";
import { useParams } from 'react-router-dom';
import { Paleontologo } from '../interfaces/Paleontologo';

function FossilEditar() {
  const { id } = useParams();
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
        .get<Paleontologo>(
          `http://localhost:5020/api/fossil/buscar/${id}`
        )
        .then((resposta) => {
          setNome(resposta.data.nome);
          setNomeCientifico(resposta.data.nomeCientifico);
          setLocalizacaoDescoberta(resposta.data.localizacaoDescoberta);
          setTipoFossil(resposta.data.tipoFossil);
          setEspeciaOrganismo(resposta.data.especiaOrganismo);
          setCondicaoPreservacao(resposta.data.condicaoPreservacao);
          setEpocaGeologica(resposta.data.epocaGeologica);
          buscarCategorias();
        });
    }
  }, []);

  function buscarCategorias() {
    axios
      .get<Paleontologo[]>("http://localhost:5020/api/paleontologo/listar")
      .then((resposta) => {
        setPaleontologos(resposta.data);
      });
  }

  function enviarProduto(e: any) {
    e.preventDefault();

    const paleontologo: Paleontologo = {
      nome: nome,
      nomeCientifico: nomeCientifico,
      localizacaoDescoberta: localizacaoDescoberta,
      tipoFossil: tipoFossil,
      especiaOrganismo: especiaOrganismo,
      condicaoPreservacao: condicaoPreservacao,
      epocaGeologica: epocaGeologica,
      paleontologoId: Number(paleontologoId)
    };

    axios
      .put(`http://localhost:5020//api/fossil/alterar/${id}`, fossil)
      .then((resposta) => {
        console.log(resposta.data);
      });
  }

  return (
    <div className="form-container">
    <div className="form-header">
      <h2>Cadastro de Fossil</h2>
    </div>
    <form onSubmit={enviarProduto}>
      <div className="form-group">
      <label htmlFor="nome">Nome</label>
          <input
          placeholder="Maximus"
            type="text"
            id="nome"
            name="nome"
            required
            onChange={(e: any) => setNome(e.target.value)}
          />
      </div>
      <div className="form-group">
      <label htmlFor="nomeCientifico">Nome Cientifico</label>
          <input
          placeholder="Tyrannosaurus rex"
            type="text"
            id="nomeCientifico"
            name="nomeCientifico"
            required
            onChange={(e: any) => setNomeCientifico(e.target.value)}
          />
      </div>
      <div className="form-group">
      <label htmlFor="localizacaoDescoberta">Localizacao Descoberta</label>
          <input
          placeholder="Ilha de Madagascar"
            type="text"
            id="localizacaoDescoberta"
            name="localizacaoDescoberta"
            required
            onChange={(e: any) => setLocalizacaoDescoberta(e.target.value)}
          />
      </div>
      <div className="form-group">
      <label htmlFor="tipoFossil">Tipo Fossil</label>
          <input
          placeholder="Cranio"
            type="text"
            id="tipoFossil"
            name="tipoFossil"
            required
            onChange={(e: any) => setTipoFossil(e.target.value)}
          />
      </div>
      <div className="form-group">
      <label htmlFor="especiaOrganismo">Especia Organismo</label>
          <input
          placeholder="T-rex"
            type="text"
            id="especiaOrganismo"
            name="especiaOrganismo"
            required
            onChange={(e: any) => setEspeciaOrganismo(e.target.value)}
          />
      </div>
      <div className="form-group">
      <label htmlFor="condicaoPreservacao">Condicao Preservacao</label>
          <input
          placeholder="Deteriorada"
            type="text"
            id="condicaoPreservacao"
            name="condicaoPreservacao"
            required
            onChange={(e: any) => setcondicaoPreservacao(e.target.value)}
          />
      </div>
      <div className="form-group">
      <label htmlFor="epocaGeologica">Epoca Geologica</label>
          <input
          placeholder="Cretacio"
            type="text"
            id="epocaGeologica"
            name="epocaGeologica"
            required
            onChange={(e: any) => setEpocaGeologica(e.target.value)}
          />
      </div>
      <div className="form-group">
        <label >Paleontologo:</label>
        <select
            onChange={(e: any) => setPaleontologoId(e.target.value)}
          >
            {paleontologos.map((paleontologo) => (
              <option
                value={paleontologo.id}
                key={paleontologo.id}
              >
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
      <button type="submit">Cadastrar</button>
    </form>
  </div>
  );
}
    
 

export default FossilEditar;