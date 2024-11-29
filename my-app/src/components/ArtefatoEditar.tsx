import { useEffect ,useState }from 'react';
import { Artefato } from '../interfaces/Artefato';
import axios from "axios";
import { Arqueologo } from '../interfaces/Arqueologo';
import { useParams } from 'react-router-dom';

function ArtefatoEditar() {
    const { id } = useParams();
    const [Arqueologo, setArqueologo] = useState<Arqueologo[]>([]);
    const [nome, setNome] = useState("");
    const [periodo, setPeriodo] = useState("");
    const [civilizacaoDeOrigem, setCivilizacaoDeOrigem] = useState("");
    const [Funcionalidade, setFuncionalidade] = useState("");
    const [dimensao, setdimensao] = useState("");
    const [material, setmaterial] = useState("");
    const [arqueologoId, setArqueologoId] = useState(0);

    useEffect(() => {
        if (id) {
          axios
            .get<Artefato>(
              `http://localhost:5020/api/artefato/buscar/${id}`
            )
            .then((resposta) => {
              setNome(resposta.data.nome);
              setPeriodo(resposta.data.periodo);
              setCivilizacaoDeOrigem(resposta.data.civilizacaoDeOrigem);
              setFuncionalidade(resposta.data.funcionalidade);
              setdimensao(resposta.data.dimensao);
              setmaterial(resposta.data.material)
              buscarArqueologos();
            });
        }
      }, []);
      function buscarArqueologos() {
        axios
          .get<Arqueologo[]>("http://localhost:5020/api/Arqueologo/listar")
          .then((resposta) => {
            setArqueologos(resposta.data);
          });
      }

      function enviarProduto(e: any) {
        e.preventDefault();
    
        const artefato: Artefato = {
          nome: nome,
          periodo: periodo,
          civilizacaoDeOrigem: civilizacaoDeOrigem,
          funcionalidade: Funcionalidade,
          dimensao: dimensao,
          material: material,
          arqueologoId: Number(arqueologoId)
        };

        axios
      .put(`http://localhost:5020/api/artefato/alterar/${id}`, artefato)
      .then((resposta) => {
        console.log(resposta.data);
      });
  }

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
          onChange={(e: any) => setNome(e.target.value)}
        />
    </div>
    <div className="form-group">
    <label htmlFor="periodo">Periodo</label>
        <input
        placeholder="Paleolítico Superior"
          type="text"
          id="periodo"
          name="periodo"
          value={periodo}
          required
          onChange={(e: any) => setPeriodo(e.target.value)}
        />
    </div>
    <div className="form-group">
    <label htmlFor="civilizacaoDeOrigem">Civilização de Origem</label>
        <input
        placeholder="Primeiros humanos America do Norte"
          type="text"
          id="civilizacaoDeOrigem"
          name="civilizacaoDeOrigem"
          value={civilizacaoDeOrigem}
          required
          onChange={(e: any) => setCivilizacaoDeOrigem(e.target.value)}
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
          onChange={(e: any) => setFuncionalidade(e.target.value)}
        />
    </div>
    <div className="form-group">
    <label htmlFor="dimensao">Dimensao</label>
        <input
        placeholder="21cm"
          type="text"
          id="dimensao"
          name="dimensao"
          value={dimensao}
          required
          onChange={(e: any) => setDimensao(e.target.value)}
        />
    </div>
    <div className="form-group">
    <label htmlFor="material>Material</label>
        <input
        placeholder="Origem vegetal"
          type="text"
          id="material"
          name="material"
          value={material}
          required
          onChange={(e: any) => setMaterial(e.target.value)}
        />
    </div>
    <div className="form-group">
      <label >Arqueologo:</label>
      <select
          onChange={(e: any) => setArqueologoId(e.target.value)}
        >
          {arqueologos.map((arqueologo) => (
            <option
              value={arqueologo.id}
              key={arqueologo.id}
            >
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
  
export default ArtefatoEditar; 