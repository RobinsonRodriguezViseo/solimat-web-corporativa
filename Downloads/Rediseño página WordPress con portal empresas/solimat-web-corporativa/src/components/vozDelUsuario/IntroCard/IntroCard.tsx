import logo from '../../../images/voz-del-usuario-logo.png';
import styles from './IntroCard.module.css';

export default function IntroCard() {
  return (
    <div className={styles.card}>
      <img className={styles.logo} src={logo} alt="Voz del Usuario" />
      <div className={styles.body}>
        <p className={styles.paragraph}>
          Nuestros usuarios son las empresas y sus trabajadores, autónomos y red de colaboradores que ha depositado
          su confianza en nosotros. Siendo nuestros empleados quienes les proporcionan el apoyo y atención que
          precisan.
        </p>
        <p className={styles.paragraph}>
          La Voz del Usuario nace fruto de la relación entre empleados y usuarios, con la finalidad de seguir
          construyendo un Solimat mejor para todos.
        </p>
        <p className={`${styles.paragraph} ${styles.lastParagraph}`}>
          El objetivo es proporcionar experiencias personalizadas y servicios de calidad. Para ello, nos encargamos
          de escuchar a nuestros usuarios a través de:
        </p>
      </div>
    </div>
  );
}
