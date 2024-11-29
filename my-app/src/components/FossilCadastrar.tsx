import { useEffect ,useState }from 'react';
import { Fossil } from '../interfaces/Fossil';
import axios from "axios";
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
  const [paleontologoId, setPaleontologoId] = useState(0);

  useEffect(() => {
    axios
      .get<Paleontologo[]>("http://localhost:5020/api/paleontologo/listar")
      .then((resposta) => {
        setPaleontologos(resposta.data);
      });
  });

  function enviarProduto(e: any) {
    e.preventDefault();

    const fossil: Fossil = {
      nome: nome,
      nomeCientifico: nomeCientifico,
      localizacaoDescoberta: localizacaoDescoberta,
      tipoFossil: tipoFossil,
      especiaOrganismo: especiaOrganismo,
      condicaoPreservacao: condicaoPreservacao,
      epocaGeologica: epocaGeologica,
      paleontologoId: Number(paleontologoId)
    };

    fetch("http://localhost:5020/api/fossil/cadastrar", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(fossil),
    })
      .then((resposta) => {
        return resposta.json();
      })
      .then((fossil) => {
        console.log("Fossil cadastrado", fossil);
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
    
export default FossilCadastrar;