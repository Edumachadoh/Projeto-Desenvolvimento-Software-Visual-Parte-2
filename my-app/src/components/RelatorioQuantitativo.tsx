import { useEffect, useState } from "react";

function RelatorioQuantitativo() {
    const [relatorio, setRelatorio] = useState<Relatorio | null>(null); // Tipo explícito
    

    type Relatorio = {
        contPaleontologo: number;
        contArqueologo: number;
        contArtefato: number;
        contFossil: number;
        contAreaEspecializacao: number;
        contFormacaoAcademica: number;
      };
      
  useEffect(() => {
    fetch("http://localhost:5020/api/relatorio") 
        .then(resposta => {
            return resposta.json();
        }) 
        .then(arqueologo => {
            setRelatorio(arqueologo);
        });

    
});

  return (
    <div>
      <h1>Relatório Quantitativo</h1>
      <table>
        <thead>
          <tr>
            <th>Paleontólogos</th>
            <th>Arqueólogos</th>
            <th>Artefatos</th>
            <th>Fósseis</th>
            <th>Áreas de Especialização</th>
            <th>Formações Acadêmicas</th>
          </tr>
        </thead>
        <tbody>
          {relatorio ? ( // Verifique se `relatorio` está preenchido.
            <tr>
              <td>{relatorio.contPaleontologo  ?? 0}</td>
              <td>{relatorio.contArqueologo  ?? 0}</td>
              <td>{relatorio.contArtefato  ?? 0}</td>
              <td>{relatorio.contFossil  ?? 0}</td>
              <td>{relatorio.contAreaEspecializacao  ?? 0}</td>
              <td>{relatorio.contFormacaoAcademica  ?? 0}</td>
            </tr>
          ) : (
            <tr>
              <td>Carregando dados...</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default RelatorioQuantitativo;