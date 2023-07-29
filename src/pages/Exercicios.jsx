import React from 'react';
import Header from '../componets/Header';
import ExerciciosImagem from '../assets/respiracao.gif';
import fotoExercicio from '../assets/foto_exercicio.png';
import styles from '../styles/pages/exercicios.module.css';

const Exercicios = () => {
  return (
    <>
      <Header image={ExerciciosImagem} />
      <div className={styles.homeContainer}>
        <h2 className={styles.cardTitle}>Técnica de Respiração</h2>
        <div className={styles.cardContainer}>
          <div className={styles.cardContent}>
            <p className={styles.textoLateral}>
              A técnica de respiração profunda, também conhecida como respiração abdominal, é uma prática simples, porém poderosa, que pode trazer inúmeros benefícios para a nossa saúde física e mental. É uma forma eficaz de promover relaxamento, aliviar a ansiedade e trazer mais tranquilidade para a mente.
            </p>
            <p className={styles.textoLateral}>
              Essa técnica de respiração profunda tem o poder de acalmar o sistema nervoso, reduzir a ansiedade e trazer uma sensação de bem-estar. À medida que incorporamos essa prática em nossa rotina, ela se torna mais natural e eficaz, proporcionando benefícios duradouros para o corpo e a mente. Experimente e desfrute dos resultados positivos que a respiração consciente pode trazer para a sua vida.
            </p>
            <br />
            <br />
          </div>
        </div>
        <div className={styles.imageContainer}>
          {/* Adicione a foto utilizando a tag <img> */}
          <img src={fotoExercicio} alt="Foto do exercício de respiração" className={styles.fotoExercicio} />
          <br />
          <br />
        </div>
        <div className={styles.container}>
          <div>
            <section>
              <h3>Yoga</h3>
              <p>O yoga é uma prática que combina exercícios físicos, técnicas de respiração e meditação. Seus benefícios para a ansiedade incluem redução do estresse, melhoria da consciência corporal e mental, equilíbrio emocional, aumento da concentração, fortalecimento do sistema nervoso e melhoria do sono. </p>
              <p> Embora não seja uma cura completa para a ansiedade, o yoga pode ser uma parte valiosa de um plano de autocuidado e bem-estar, devendo ser combinado com outras abordagens terapêuticas, se necessário.</p>
            </section>

            <section class="content-section">
              <iframe
                width="560" height="315" src="https://www.youtube.com/embed/5aHGlekF2lQ"
                title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen>
              </iframe>
            </section>
            <br />
            <br />
          </div>
          <div>
            <br />
            <br />
            <h3>Técnicas de Visualização para Ansiedade</h3>
            <br />
            <h4>Visualização Guiada</h4>
            <p> Encontre um lugar calmo e tranquilo para se sentar ou deitar. Feche os olhos e imagine-se em um local seguro e relaxante, como uma praia, uma floresta ou um campo tranquilo.
              Concentre-se em todos os detalhes do ambiente, como cores, cheiros e sons.
              À medida que se imagina nesse local, respire profundamente e sinta-se relaxando e liberando a tensão.</p>
            <br/>
            <h4>Visualização de Cores</h4>
            <p>Escolha uma cor que represente calma e tranquilidade para você. Feche os olhos e visualize essa cor preenchendo todo o seu corpo, irradiando uma sensação de paz e serenidade.
              À medida que respira, imagine-se inspirando essa cor calmante e expirando qualquer ansiedade ou tensão.</p>
            <br />
            <h4>Visualização do recipiente seguro</h4>
            <p> Imagine um recipiente especial ou caixa onde você pode colocar todos os seus pensamentos ansiosos e preocupações.
              Visualize-se colocando cada pensamento dentro desse recipiente e fechando-o com segurança.
              Sinta-se aliviado ao saber que pode lidar com esses pensamentos em um momento mais adequado.</p>
            <br />
            <h4>Visualização de ondas</h4>
            <p>Imagine-se em uma praia observando as ondas do mar. Conforme as ondas vão e vêm, respire em sincronia com elas.
              Inspire quando a onda se aproxima e expire quando ela se afasta.
              Sinta o ritmo natural das ondas trazendo uma sensação de calma e equilíbrio.</p>
            <br/>
            <br/>
          </div>
        </div>
        </div>

      </>
      );
};

      export default Exercicios;