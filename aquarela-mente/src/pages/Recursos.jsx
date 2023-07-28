import React from 'react';
import Header from '../componets/Header';
import DepoimentosImage from '../assets/depoimentos.png';
import styles from '../styles/pages/recursos.module.css';
import fotolivros from '../assets/livros.png';
import fotopodcast from '../assets/podcast.png';

const RecursosPage = () => {
  return (
    <>
      <Header 
        image={DepoimentosImage}
      />
      <div>
      <h1>Recursos Úteis para Ansiedade</h1>
      <div>
          <img src={fotolivros} alt="Foto do podcast" className={styles.fotolivros} />
          </div>

        <h2>Podcasts</h2>
        <div>
          <a href="URL_DO_PODCAST_1" target="_blank" rel="noopener noreferrer">
          <img src={fotopodcast} alt="Foto do Livro" className={styles.fotopodcast} />
          </a>
          <h3>Título do Podcast 1</h3>
          <p>Descrição do Podcast 1</p>
        </div>
        <div>
          <a href="URL_DO_PODCAST_2" target="_blank" rel="noopener noreferrer">
            <img src="URL_DA_IMAGEM_DO_PODCAST_2" alt="Podcast 2" />
          </a>
          <h3>Título do Podcast 2</h3>
          <p>Descrição do Podcast 2</p>
        </div>
        {/* Adicione mais detalhes de podcasts aqui, conforme necessário */}

        <h2>Aplicativos para Ansiedade</h2>
        <div>
          <a href="URL_DO_APLICATIVO_1" target="_blank" rel="noopener noreferrer">
            <img src="URL_DA_IMAGEM_DO_APLICATIVO_1" alt="Aplicativo 1" />
          </a>
          <h3>Nome do Aplicativo 1</h3>
          <p>Descrição do Aplicativo 1</p>
        </div>
        <div>
          <a href="URL_DO_APLICATIVO_2" target="_blank" rel="noopener noreferrer">
            <img src="URL_DA_IMAGEM_DO_APLICATIVO_2" alt="Aplicativo 2" />
          </a>
          <h3>Nome do Aplicativo 2</h3>
          <p>Descrição do Aplicativo 2</p>
        </div>
        </div>
        {/* Adicione mais detalhes de aplicativos aqui, conforme necessário */}
    </>
  );
};

export default RecursosPage;