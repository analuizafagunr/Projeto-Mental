import React from 'react';
import Header from '../componets/Header';
import styles from '../styles/pages/sobre.module.css';
import sobre from '../assets/ansiedade.png';

const Sobre = () => {
  return (
    <>
      <div className={styles.container}>
        <Header image={sobre} />
        <div className={styles.sobreContainer}>
          <div className={styles.cardContainer}>
            <h2 className={styles.sobreTitle}>Falando sobre Ansiedade</h2>
            <br />
            <p className={styles.sobreDescription}>
              A ansiedade é uma resposta emocional natural diante de situações percebidas como desafiadoras, estressantes ou ameaçadoras. 
              Trata-se de um estado de apreensão, tensão e inquietação, que pode afetar aspectos físicos e emocionais da vida de uma pessoa.
              <br />
              <br/>
              É importante ressaltar que a ansiedade pode variar em intensidade e duração, se manifestar de maneira passageira ou tornar-se mais persistente e prejudicial. 
              Quando a ansiedade se torna excessiva e interfere significativamente nas atividades cotidianas, pode ser considerada um transtorno de ansiedade, uma condição que requer atenção e tratamento adequados.
              <br/>
              <br/>
              Além disso, adotar um estilo de vida saudável, com práticas como exercícios físicos regulares, técnicas de relaxamento, alimentação balanceada e sono adequado, pode ajudar a reduzir os níveis de ansiedade e melhorar o bem-estar geral. 
              A autoconsciência, o autocuidado e o apoio social também desempenham um papel importante no gerenciamento da ansiedade.
            </p>
          </div>

          <div className={styles.cardContainer}>
            <h2 className={styles.cardTitle}>Sintomas</h2>
            <br/>
            <br/>
            <ul className={styles.sintomasList}>
              <li>1° Preocupação excessiva e constante;</li>
              <li>2° Inquietação e agitação;</li>
              <li>3° Tensão muscular;</li>
              <li>4° Irritabilidade;</li>
              <li>5° Dificuldade em concentrar-se;</li>
              <li>6° Distúrbios do sono, como insônia ou despertar frequente durante a noite;</li>
              <li>7° Fadiga e cansaço excessivo;</li>
              <li>8° Sintomas físicos, como palpitações, sudorese, tremores e falta de ar;</li>
              <li>9° Náuseas ou desconforto gastrointestinal;</li>
              <li>10° Preocupações sobre o futuro e antecipação do pior cenário possível;</li>
              <li>11° Sensação de perigo iminente ou ameaça constante;</li>
              <li>12° Evitação de situações ou atividades que causem ansiedade;</li>
              <li>13° Pensamentos intrusivos ou obsessivos;</li>
              <li>14° Sentimentos de medo ou pânico;</li>
              <li>15° Sintomas somáticos sem causa física aparente.</li>
            </ul>
          </div>

          <div className={styles.cardContainerr}>
            <h2 className={styles.cardTitle}>Depoimentos e Superação</h2>
            <br/>
            <br/>
            <p className={styles.depoimento}>
            "Não há como controlar a vida, pois ela acontece sem que possamos decidir o que o próximo momento nos reserva. No entanto, duas coisas têm sido fundamentais para mim: a fé e compartilhar momentos com a pessoa que amo. Ter alguém ao meu lado que genuinamente deseja o meu bem, sem falsidade ou relações artificiais, é algo essencial para enfrentar os desafios da vida com mais confiança e esperança. (Autor: Anônimo)"
            </p>
            <p className={styles.depoimento}>
              "Um dia de cada vez. Serão dias difíceis, mas o segredo é focar em enfrentar um dia de cada vez, uma luta de cada vez. Confiar no processo e acreditar que tudo dará certo. Eu venci e parei de tomar medicamentos porque lutei por cada dia e venci cada batalha. Não podemos abraçar o mundo, mas podemos enfrentar nossos desafios passo a passo.  (Autor: Anônimo)"
            </p>
            <br/>
            <p className={styles.depoimento}>
              "Quando tenho uma crise muito forte, o que faço é simples, mas me ajuda bastante. 
Primeiro, respiro fundo; pode parecer clichê, mas é fundamental trabalhar a respiração nesse momento. Isso tem um efeito significativo em acalmar meus pensamentos e emoções. Em seguida, tomo um chá de camomila, que tem propriedades relaxantes. Além disso, procuro alguém em quem confio para me oferecer apoio moral e emocional. 
Ter alguém ao meu lado nessas horas faz toda a diferença, pois me sinto mais apoiado e menos sobrecarregado. Essas estratégias têm sido essenciais para me ajudar a atravessar momentos difíceis de crise.(Autor: Anônimo)"
            </p>
            <br/>
            <p className={styles.depoimento}>
              "Busco o autoconhecimento e tiro um tempo para me afastar da rotina, encontrar um lugar calmo ou fazer viagens. 
              Anotar minhas reflexões no Notas do celular me ajuda a organizar ideias e trazer clareza mental. 
              Valorizo esses momentos, pois aprecio os detalhes da vida e cultivo a gratidão. 
              O autoconhecimento me permite enfrentar desafios com serenidade e encontrar significado em cada passo da minha jornada.
              É um investimento no meu bem-estar emocional e mental, trazendo crescimento e evolução constantes.(Autor: Anônimo)"
            </p>
            {/* Adicione mais depoimentos aqui, se desejar */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Sobre;