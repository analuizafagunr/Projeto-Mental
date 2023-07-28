import React from 'react';
import { Link } from 'react-router-dom'; 
import styles from '../styles/componets/menu.module.css';
import Logo from '../assets/logoo.png';

const Menu = () => {
  return (
    <nav className={styles.menuContainer}>
      <Link to="/"> {/* Usando o componente Link em vez de <a> */}
        <img src={Logo} alt="Logotipo da Empresa XYZ" /> 
      </Link>

      <li>
        <Link className={styles.menuLink} to="/">Home</Link>
      </li>
      <li>
        <Link className={styles.menuLink} to="/sobre">Sobre</Link>
      </li>
      <li>
        <Link className={styles.menuLink} to="/exercicios">Exercícios</Link>
      </li>
      <li>
        <Link className={styles.menuLink} to="/recursos">Recursos</Link>
      </li>
      <li>
        <Link className={styles.menuLink} to="/contato">Contato</Link>
      </li>
    </nav>
  );
};

export default Menu;