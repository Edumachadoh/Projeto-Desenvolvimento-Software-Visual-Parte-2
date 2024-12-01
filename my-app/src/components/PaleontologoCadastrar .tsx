import { useEffect ,useState }from 'react';
import axios from "axios";
import { AreaEspecializacao } from '../interfaces/AreaEspecializacao';
import fotoPaleontologo from '../images/paleontologo.png';
import { Paleontologo } from '../interfaces/Paleontologo';

function PaleontologoCadastrar() {
  const [areasEspecializacao, setAreaEspecializacao] = useState<AreaEspecializacao[]>([]);
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [dataNascimento, setDatanascimento] = useState("");
  const [anosExperiencia, setAnosExperiencia] = useState("");
  const [idMatricula, setIdMatricula] = useState("");
  const [areaEspecializacaoId, setAreaEspecializacaoId] = useState(0);

  useEffect(() => {
    axios
      .get<AreaEspecializacao[]>("http://localhost:5020/api/area-especializacao/listar")
      .then((resposta) => {
        setAreaEspecializacao(resposta.data);
      });
  });

  function enviarProduto(e: any) {
    e.preventDefault();

    const paleontologo: Paleontologo = {
      nome: nome,
      cpf: cpf,
      dataNascimento: dataNascimento,
      anosExperiencia: Number(anosExperiencia),
      idMatricula: Number(idMatricula),
      areaEspecializacaoId: Number(areaEspecializacaoId)
    };

    fetch("http://localhost:5020/api/paleontologo/cadastrar", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(paleontologo),
    })
      .then((resposta) => {
        return resposta.json();
      })
      .then((arqueologo) => {
        console.log("Paleontologo cadastrado", paleontologo);
      });
  }

  return (
    
    <div className="form-container">
    <div className="form-header">
      <img src={fotoPaleontologo} alt="Paleontólogo"/>
      <h2>Cadastro de Paleontólogo</h2>
    </div>
    <form onSubmit={enviarProduto}>
      <div className="form-group">
      <label htmlFor="nome">Nome</label>
          <input
          placeholder="José Pereira"
            type="text"
            id="nome"
            name="nome"
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
            required
            onChange={(e: any) => setCpf(e.target.value)}
          />
      </div>
      <div className="form-group">
      <label htmlFor="dataNascimento">Data de Nascimento</label>
          <input
          placeholder="2001-01-01"
            type="text"
            id="dataNascimento"
            name="dataNascimento"
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
            required
            onChange={(e: any) => setAnosExperiencia(e.target.value)}
          />
      </div>
      <div className="form-group">
      <label htmlFor="idRegistroProfissional">Registro de Mátricula</label>
          <input
          placeholder="12355532"
            type="text"
            id="idRegistroProfissional"
            name="idRegistroProfissional"
            required
            onChange={(e: any) => setIdMatricula(e.target.value)}
          />
      </div>
      <div className="form-group">
        <label >Área de Especialização</label>
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
    
 

export default PaleontologoCadastrar;