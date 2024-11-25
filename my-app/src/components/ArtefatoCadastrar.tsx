import { useEffect, useState } from "react";
import { Artefato } from "../interfaces/Artefato";
import { Paleontologo } from "../interfaces/Paleontologo";
import './ArtefatoCadastrar.css'

function ArtefatoCadastrar() {
    const [nome, setNome] = useState("");
    const [periodo, setPeriodo] = useState("");
    const [civilizacaoDeOrigem, setCivilizacaoDeOrigem] = useState("");
    const [funcionalidade, setFuncionalidade] = useState("");
    const [dimensao, setDimensao] = useState("");
    const [material, setMaterial] = useState("");
    const [arqueologoId, setArqueologoId] = useState(0);
    const [arqueologos, setArqueologos] = useState<any[]>([]);
  
    useEffect(() => {
      fetch("http://localhost:5020/api/artefato/listar")
        .then((resposta) => resposta.json())
        .then((arqueologos) => {
          setArqueologos(arqueologos);
          console.table(arqueologos);
        });
    }, []);
  
    function enviarArtefato(e: any) {
      const artefato: Artefato = {
        nome: nome,
        periodo: periodo,
        civilizacaoDeOrigem: civilizacaoDeOrigem,
        funcionalidade: funcionalidade,
        dimensao: dimensao,
        material: material,
        arqueologoId: arqueologoId,
      };
  
      //AXIOS - Biblioteca para requisições HTTP - Recomendação
  
      fetch("http://localhost:5020/api/artefato/cadastrar", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(artefato),
      })
        .then((resposta) => resposta.json())
        .then((produto) => {
          console.log(artefato);
        });
      e.preventDefault();
    }
  
    return (
      <div id="cadastro-artefato" className="cadastro-artefato">
         {/* <h1 className={styles.h1}>Cadastrar Artefato</h1>
        <form onSubmit={enviarArtefato} className={styles.form}>
          <div className={styles["form-group"]}>
            <label htmlFor="nome">Nome</label>
            <input
              onChange={(e: any) => setNome(e.target.value)}
              type="text"
              id="nome"
              name="nome"
              required
              placeholder="Digite o nome do artefato"
            />
          </div>
  
          <div className={styles["form-group"]}>
            <label htmlFor="periodo">Periodo</label>
            <textarea
              onChange={(e: any) => setPeriodo(e.target.value)}
              id="periodo"
              name="periodo"
              required
              placeholder="Digite o periodo do artefato"
            ></textarea>
          </div>
  
          <div className={styles["form-group"]}>
            <label htmlFor="civilização de Origem">CivilizacaoDeOrigem</label>
            <input
              onChange={(e: any) => setCivilizacaoDeOrigem(e.target.value)}
              type="text"
              id="civilização de origem"
              name="civilização de origem"
              required
              placeholder="Digite a civilização de origem do artefato"
            />
          </div>
  
          <div className={styles["form-group"]}>
            <label htmlFor="funcionalidade">Funcionalidade</label>
            <input
              onChange={(e: any) => setFuncionalidade(e.target.value)}
              type="text"
              id="funcionalidade"
              name="funcionalidade"
              required
              placeholder="Digite a funcionalidade do artefato"
            />
          </div>

          <div className={styles["form-group"]}>
            <label htmlFor="dimensão">Dimensao</label>
            <input
              onChange={(e: any) => setDimensao(e.target.value)}
              type="text"
              id="dimensão"
              name="dimensão"
              required
              placeholder="Digite a dimensão do artefato"
            />
          </div>

          <div className={styles["form-group"]}>
            <label htmlFor="material">Material</label>
            <input
              onChange={(e: any) => setMaterial(e.target.value)}
              type="text"
              id="material"
              name="material"
              required
              placeholder="Digite o material do artefato"
            />
          </div>
  
          <div className={styles["form-group"]}>
            <label htmlFor="arqueologos">Arqueologos</label>
            <select
              id="arqueologo"
              onChange={(e: any) => setArqueologoId(e.target.value)}
            >
              {arqueologoss.map((arqueologo) => (
                <option key={arqueologo.id} value={arqueologo.id}>
                  {arqueologo.nome}
                </option>
              ))}
            </select>
          </div>
  
          <div className={styles["form-actions"]}>
            <button type="submit">Cadastrar Artefato</button>
          </div>
        </form> */}
      </div>
    );
  }
  
  export default ArtefatoCadastrar;