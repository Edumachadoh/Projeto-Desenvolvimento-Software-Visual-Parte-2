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
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...</p>
                </div>
                <div className="content-box">
                    <h2>Objetivo do Site</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...</p>
                </div>
            </section>
        </main>
        <footer>
            <p>Todos os direitos reservados © História Website LTDA</p>
        </footer>
    </div>
}

export default Home;