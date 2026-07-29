import styles from './OrgLogo.module.css';

export interface Organismo {
  name: string;
  href: string;
  logo: string;
}

type OrgLogoProps = Organismo;

export default function OrgLogo({ name, href, logo }: OrgLogoProps) {
  return (
    <a className={styles.link} href={href} target="_blank" rel="noopener noreferrer">
      <img className={styles.image} src={logo} alt={name} />
    </a>
  );
}
