import { Link } from 'react-router-dom';
import { isExternalHttpLink, isInternalRoute } from '../../../utils/linkType';
import Button from '../../shared/Button';
import styles from './ProfileCard.module.css';

export interface ProfileCardLink {
  label: string;
  href: string;
}

interface ProfileCardProps {
  image: string;
  title: string;
  description: string;
  links: ProfileCardLink[];
  ctaHref: string;
  ctaLabel?: string;
}

function ProfileMenuLink({ label, href }: ProfileCardLink) {
  if (isInternalRoute(href)) {
    return (
      <Link className={styles.menuLink} to={href}>
        {label}
      </Link>
    );
  }

  const externalProps = isExternalHttpLink(href) ? { target: '_blank', rel: 'noopener noreferrer' } : {};

  return (
    <a className={styles.menuLink} href={href} {...externalProps}>
      {label}
    </a>
  );
}

export default function ProfileCard({
  image,
  title,
  description,
  links,
  ctaHref,
  ctaLabel = 'Más información',
}: ProfileCardProps) {
  return (
    <div className={styles.card}>
      <img className={styles.image} src={image} alt="" />
      <div className={styles.scrim} />
      <div className={styles.body}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <div className={styles.menu}>
          {links.map((link) => (
            <ProfileMenuLink key={link.label} {...link} />
          ))}
        </div>
        <Button href={ctaHref} block className={styles.cta}>
          {ctaLabel}
        </Button>
      </div>
    </div>
  );
}
