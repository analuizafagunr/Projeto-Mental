import React from 'react';
import Header from '../componets/Header';
import DepoimentosImage from '../assets/depoimentos.png';
import styles from '../styles/pages/recursos.module.css';
import fotolivros from '../assets/livros.png';
import fotopodcast from '../assets/podcast.png';
import fotoaplicativo from '../assets/aplicativos.png';

const RecursosPage = () => {
  return (
    <>
      <Header
        image={DepoimentosImage}
      />
      <div className={styles.Containerprincipal}>
        <div>
          <h3>Recursos Úteis para Ansiedade</h3>
          <div>
            <img src={fotolivros} alt="Foto do podcast" className={styles.fotolivros} />
          </div>
          <br />
          <br />
          <h3>Podcasts</h3>
          <div>
            <img src={fotopodcast} alt="Foto do Livro" className={styles.fotopodcast} />
            <br />
            <h4>Autoconsciente</h4>
            <p>Este é um podcast que entende você, para você entender melhor sua mente e emoções.
              Para ter uma relação mais leve consigo mesmo, baixando o tom da autocobrança e da autocrítica que ecoam na cabeça.
              Para que possa encontrar, dentro de você, a paz que está tão difícil de encontrar no mundo.</p>
            <button >
              <a href="https://open.spotify.com/show/3l28wC5LyiiW2EdxgKW1cE" target="_blank" rel="noopener noreferrer">
                Clique aqui para acessar
              </a>
            </button>
          </div>
          <br />
          <br />
          <br />
          <br />
          <div>
            <h4> Para dar nome ás coisas</h4>
            <p>Descrição: Navega por sentimentos conflituosos e descobertas da vida adulta.
              Apresentado pela jornalista e escritora Natália Sousa, o espaço se define como "uma mesa de bar na web",
             daquelas em que você se senta e percebe que não está sozinho.</p>
             <button >
            <a href="https://open.spotify.com/show/7g6BfZvLNQjrj68MNXyDqf" target="_blank" rel="noopener noreferrer">
              Clique aqui para acessar
            </a>
            </button>
          </div>
          <br />
          <br />
          <br />
          <div>
            <h4> O Meu Inconsciente Coletivo</h4>
            <p>Descrição: O Meu Inconsciente Coletivo discute o caso de um ermitão pessimista que decide ter amigos e pagar boletos.
              Tati Bernardi conversa com o escritor e filósofo Juliano Pessanha, autor de “Recusa do Não-Lugar” (Ubu), sobre desamparo e a vantagem de viver como um ser de exceção.</p>
              <button>
            <a href="https://open.spotify.com/show/526j7nalmUxh4gWzT7L77N#:~:text=O%20Meu%20Inconsciente%20Coletivo%20discute,como%20um%20ser%20de%20exce%C3%A7%C3%A3o." target="_blank" rel="noopener noreferrer">
              Clique aqui para acessar
            </a>
            </button>
          </div>
          <br />
          <br />
          <br />
          {/* Adicione mais detalhes de podcasts aqui, conforme necessário */}
          <h3>Aplicativos para Ansiedade</h3>
          <div>
            <img src={fotoaplicativo} alt="Foto do aplicativo" className={styles.fotoaplicativos} />
          </div>
          <div>
            <h4>Calm</h4>
            <p>O Calm oferece meditações guiadas, histórias para dormir, músicas relaxantes e programas de redução do estresse para melhorar o bem-estar emocional.</p>
            <button>
            <a href="https://play.google.com/store/apps/details?id=com.calm.android&hl=pt_BR&gl=US&pli=1" target="_blank" rel="noopener noreferrer">
              Clique aqui para baixar
            </a>
            </button>
          </div>
          <div>
            <br />
            <br />
            <br />
            <h4>PsicoManager</h4>
            <p>O PsicoManager é uma plataforma brasileira que conecta pessoas a profissionais de saúde mental e oferece ferramentas para autoconhecimento e bem-estar emocional.</p>
            <button>
            <a href="https://play.google.com/store/apps/details?id=com.pacpsicorn&hl=pt_BR&gl=US" target="_blank" rel="noopener noreferrer">
              Clique aqui para baixar
            </a>
            </button>
          </div>
          <br />
          <br />
          <div>
            <br />
            <h4>Zen</h4>
            <p>Este aplicativo oferece meditações guiadas, exercícios de respiração e técnicas de mindfulness para ajudar a reduzir o estresse e a ansiedade.</p>
            <button>
            <a href="https://play.google.com/store/apps/details?id=br.com.movenext.zen&hl=pt_BR&gl=US" target="_blank" rel="noopener noreferrer">
              Clique aqui para baixar
            </a>
            </button>
          </div>
          <br />
          <br />
        </div>
      </div>
    </>
  );
};

export default RecursosPage;