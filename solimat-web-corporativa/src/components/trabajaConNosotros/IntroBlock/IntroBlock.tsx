import trabajaImage from '../../../images/trabaja-con-nosotros.jpg';
import styles from './IntroBlock.module.css';

export default function IntroBlock() {
  return (
    <div className={styles.grid}>
      <div>
        <div className={styles.eyebrow}>Nuestro equipo</div>
        <p className={styles.paragraph}>
          En Solimat, trabajamos cada día para cuidar de la salud y el bienestar de nuestros autónomos y
          trabajadores protegidos. Así pues, detrás de cada servicio de calidad, hay un equipo comprometido y
          apasionado, tanto en el cuidado directo como en la gestión administrativa que hace posible nuestra labor.
        </p>
        <p className={styles.paragraph}>
          Por eso, buscamos personas comprometidas y con ganas de crecer profesionalmente en un entorno dinámico y
          colaborativo, que tengan una clara vocación de servicio y que, además, compartan nuestra misión y valores.
        </p>
      </div>
      <img className={styles.image} src={trabajaImage} alt="Trabaja con nosotros" />
    </div>
  );
}
