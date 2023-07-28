import React from 'react';
import Header from '../componets/Header';
import home from '../assets/calmarespira.png';
import styles from '../styles/pages/home.module.css';

const Home = () => {
  return (
    <>
      <Header image={home} />
      <div className={styles.homeContainer}>
        <div className={styles.cardContainer}>
          <h2 className={styles.cardTitle}>Aquarela da calma: Pintando um Novo Quadro Mental 🧠</h2>
          <p className={styles.cardDescription}> Bem-vindos à "Aquarela da Calma", um espaço dedicado a pintar um novo quadro mental, onde você encontrará inspiração para desacelerar, refletir e encontrar equilíbrio em meio à agitação do cotidiano. Neste ambiente, a arte da aquarela representa mais do que apenas pinceladas no papel; é uma metáfora para a jornada rumo à serenidade interior e ao equilíbrio emocional.</p>
          <br/>
          <p className={styles.cardDescription}>É um convite para encontrar serenidade e equilíbrio emocional, assim como uma artista utiliza pinceladas suaves para criar uma obra-prima. A jornada para superar a ansiedade é uma combinação de paciência, autocompaixão e crescimento contínuo. À medida que pintamos nosso novo quadro mental, encontramos uma beleza única e transformadora - a beleza de uma mente que encontra a calma em meio às cores da vida.</p>
        </div>
      </div>
    </>
  );
}

export default Home;