import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import styles from '../styles/componets/footer.module.css';

const Footer = ({ content }) => {
  return (
    <footer className={styles.footerContainer}>
      <p className={styles.footerContent}>{content}</p>
      {/* Novo container para os ícones */}
      <div className={styles.iconContainer}>
        {/* Links para os perfis do GitHub e LinkedIn */}
        <a href="https://github.com/analuizafagunr" target="_blank" rel="noopener noreferrer">
          <FaGithub className={styles.icon} />
        </a>
        <a href="https://www.linkedin.com/in/analuizafagundes/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className={styles.icon} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;