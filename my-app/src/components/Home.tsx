import { useEffect ,useState } from 'react';
import { FormacaoAcademica } from '../interfaces/FormacaoAcademica';
import fotoMain from '../images/fotomain3.jpg';

function Home(){
    
    return <div>
       
        <main>
            <section className="hero">
                <img src={fotoMain} alt="Pirâmide e artefatos egípcios"></img>
            </section>
            <section className="content">
                <div className="content-box">
                    <h2>Sobre o Site</h2>
                    <p>Este site é uma plataforma dedicada à exploração do passado, conectando usuários ao fascinante mundo dos fósseis e artefatos  antigos.</p>
                </div>
                <div className="content-box">
                    <h2>Objetivo do Site</h2>
                    <p>Facilitar a organização, o gerenciamento e a divulgação de informações relacionadas à arqueologia e à paleontologia na internet.</p>
                </div>
            </section>
        </main>
        <footer>
            <p>Todos os direitos reservados © História Website LTDA</p>
        </footer>
    </div>
}

export default Home;