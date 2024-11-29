import { useEffect ,useState }from 'react';
import { Paleontologo } from '../interfaces/Paleontologo';
import axios from "axios";
import fotoPaleontologo from '../images/paleontologo.png';
import { useParams } from 'react-router-dom';
import { AreaEspecializacao } from '../interfaces/AreaEspecializacao';

function PaleontologoEditar() {
  const { id } = useParams();
  const [areasEspecializacao, setAreasEspecializacao] = useState<AreaEspecializacao[]>([]);
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [dataNascimento, setDatanascimento] = useState("");
  const [anosExperiencia, setAnosExperiencia] = useState("");
  const [idMatricula, setIdMatricula] = useState("");
  const [areaEspecializacaoId, setAreaEspecializacaoId] = useState(0);

  useEffect(() => {
    if (id) {
      axios
        .get<Paleontologo>(
          `http://localhost:5020/api/paleontologo/buscar/${id}`
        )
        .then((resposta) => {
          setNome(resposta.data.nome);
          setCpf(resposta.data.cpf);
          setDatanascimento(resposta.data.dataNascimento);
          setAnosExperiencia(resposta.data.anosExperiencia);
          setIdMatricula(resposta.data.idMatricula.toString());
          buscarCategorias();
        });
    }
  }, []);

  function buscarCategorias() {
    axios
      .get<AreaEspecializacao[]>("http://localhost:5020/api/area-especializacao/listar")
      .then((resposta) => {
        setAreasEspecializacao(resposta.data);
      });
  }

  function enviarProduto(e: any) {
    e.preventDefault();

    const paleontologo: Paleontologo = {
      nome: nome,
      cpf: cpf,
      dataNascimento: dataNascimento,
      anosExperiencia: anosExperiencia,
      idMatricula: Number(idMatricula),
      areaEspecializacaoId: Number(areaEspecializacaoId)
    };

    axios
      .put(`http://localhost:5020//api/paleontologo/alterar/${id}`, paleontologo)
      .then((resposta) => {
        console.log(resposta.data);
      });
  }

  return (
    
    <div className="form-container">
    <div className="form-header">
      <img src={fotoPaleontologo} alt="Paleontólogo"/>
      <h2>Edição de Paleontólogo</h2>
    </div>
    <form onSubmit={enviarProduto}>
      <div className="form-group">
      <label htmlFor="nome">Nome</label>
          <input
          placeholder="José Pereira"
            type="text"
            id="nome"
            name="nome"
            value={nome}
            required
            onChange={(e: any) => setNome(e.target.value)}
          />
      </div>
      <div className="form-group">
      <label htmlFor="cpf">Cpf</label>
          <input
          placeholder="000.000.000-00"
            type="text"
            id="cpf"
            name="cpf"
            value={cpf}
            required
            onChange={(e: any) => setCpf(e.target.value)}
          />
      </div>
      <div className="form-group">
      <label htmlFor="dataNascimento">Data de Nascimento</label>
          <input
          placeholder="19"
            type="text"
            id="dataNascimento"
            name="dataNascimento"
            value={dataNascimento}
            required
            onChange={(e: any) => setDatanascimento(e.target.value)}
          />
      </div>
      <div className="form-group">
      <label htmlFor="anosExperiencia">Anos de Experiência</label>
          <input
          placeholder="3"
            type="text"
            id="anosExperiencia"
            name="anosExperiencia"
            value={anosExperiencia}
            required
            onChange={(e: any) => setAnosExperiencia(e.target.value)}
          />
      </div>
      <div className="form-group">
      <label htmlFor="idMatricula">Número de Matrícula</label>
          <input
          placeholder="12355532"
            type="text"
            id="idMatricula"
            name="idMatricula"
            value={idMatricula}
            required
            onChange={(e: any) => setIdMatricula(e.target.value)}
          />
      </div>
      <div className="form-group">
        <label >Áreas de Especialização</label>
        <select
            onChange={(e: any) => setAreaEspecializacaoId(e.target.value)}
          >
            {areasEspecializacao.map((areaEspecializacao) => (
              <option
                value={areaEspecializacao.id}
                key={areaEspecializacao.id}
              >
                {areaEspecializacao.nome}
              </option>
            ))}
          </select>
      </div>
      <button type="submit">Cadastrar</button>
    </form>
  </div>
  );
}
    
 

export default PaleontologoEditar;