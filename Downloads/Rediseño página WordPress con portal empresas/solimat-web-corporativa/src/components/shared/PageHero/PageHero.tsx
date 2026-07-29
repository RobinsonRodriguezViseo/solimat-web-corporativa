import hospitalImage from '../../../images/Hospital_San_Jose_de_Solimat.jpg';
import Breadcrumb, { type BreadcrumbItem } from '../Breadcrumb';
import Container from '../Container';
import styles from './PageHero.module.css';

interface PageHeroProps {
  breadcrumb: BreadcrumbItem[];
  title: string;
  subtitle?: string;
  /**
   * Imagen de fondo del hero.
   * - Omitida: se usa la imagen por defecto (hospital), comportamiento histórico.
   * - `string`: esa imagen.
   * - `null`: hero de degradado plano, sin foto (varios diseños lo piden así).
   *
   * Se eligió `string | null` en vez de un flag booleano aparte para no añadir una
   * segunda prop que pudiera contradecir a `image`, y para mantener la retrocompatibilidad
   * (`undefined` sigue significando "usa la imagen por defecto").
   */
  image?: string | null;
}

export default function PageHero({ breadcrumb, title, subtitle, image = hospitalImage }: PageHeroProps) {
  return (
    <section className={styles.hero}>
      {image ? <img className={styles.image} src={image} alt="" /> : null}
      <div className={image ? styles.overlay : styles.gradient} />
      <Container className={styles.content}>
        <div className={styles.breadcrumb}>
          <Breadcrumb items={breadcrumb} />
        </div>
        <h1 className={styles.title}>{title}</h1>
        {subtitle ? <p className={styles.subtitle}>{subtitle}</p> : null}
      </Container>
    </section>
  );
}
