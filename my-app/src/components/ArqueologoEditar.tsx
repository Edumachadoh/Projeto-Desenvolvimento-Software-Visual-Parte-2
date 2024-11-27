import { useEffect ,useState }from 'react';
import { Arqueologo } from '../interfaces/Arqueologo';
import axios from "axios";
import { FormacaoAcademica } from '../interfaces/FormacaoAcademica';
import fotoArqueologo from '../images/arqueologo.png';
import { useParams } from 'react-router-dom';

function ArqueologoEditar() {
  const { id } = useParams();
  const [formacoesAcademicas, setFormacoesAcademicas] = useState<FormacaoAcademica[]>([]);
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [dataNascimento, setDatanascimento] = useState("");
  const [anosExperiencia, setAnosExperiencia] = useState("");
  const [idRegistroProfissional, setIdRegistroProfissional] = useState("");
  const [formacaoAcademicaId, setFormacaoAcademicaId] = useState(0);

  useEffect(() => {
    if (id) {
      axios
        .get<Arqueologo>(
          `http://localhost:5020/api/arqueologo/buscar/${id}`
        )
        .then((resposta) => {
          setNome(resposta.data.nome);
          setCpf(resposta.data.cpf);
          setDatanascimento(resposta.data.dataNascimento);
          setAnosExperiencia(resposta.data.anosExperiencia);
          setIdRegistroProfissional(resposta.data.idRegistroProfissional.toString());
          buscarCategorias();
        });
    }
  }, []);

  function buscarCategorias() {
    axios
      .get<FormacaoAcademica[]>("http://localhost:5020/api/formacao-academica/listar")
      .then((resposta) => {
        setFormacoesAcademicas(resposta.data);
      });
  }

  function enviarProduto(e: any) {
    e.preventDefault();

    const arqueologo: Arqueologo = {
      nome: nome,
      cpf: cpf,
      dataNascimento: dataNascimento,
      anosExperiencia: anosExperiencia,
      idRegistroProfissional: Number(idRegistroProfissional),
      formacaoAcademicaId: Number(formacaoAcademicaId)
    };

    axios
      .put(`http://localhost:5020/api/arqueologo/alterar/${id}`, arqueologo)
      .then((resposta) => {
        console.log(resposta.data);
      });
  }

  return (
    
    <div className="form-container">
    <div className="form-header">
      <img src={fotoArqueologo} alt="Arqueólogo"/>
      <h2>Edição de Arqueólogo</h2>
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
      <label htmlFor="idRegistroProfissional">Registro Profissional</label>
          <input
          placeholder="12355532"
            type="text"
            id="idRegistroProfissional"
            name="idRegistroProfissional"
            value={idRegistroProfissional}
            required
            onChange={(e: any) => setIdRegistroProfissional(e.target.value)}
          />
      </div>
      <div className="form-group">
        <label >Formação Acadêmica:</label>
        <select
            onChange={(e: any) => setFormacaoAcademicaId(e.target.value)}
          >
            {formacoesAcademicas.map((formacaoAcademica) => (
              <option
                value={formacaoAcademica.id}
                key={formacaoAcademica.id}
              >
                {formacaoAcademica.nome}
              </option>
            ))}
          </select>
      </div>
      <button type="submit">Cadastrar</button>
    </form>
  </div>
  );
}
    
 

export default ArqueologoEditar;