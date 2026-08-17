import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { isExternalHttpLink, isInternalRoute } from '../../../utils/linkType';
import styles from './InterestCard.module.css';

interface InterestCardProps {
  href: string;
  title: string;
  description: string;
  icon: ReactNode;
}

export default function InterestCard({ href, title, description, icon }: InterestCardProps) {
  const content = (
    <>
      <div>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>
      <div className={styles.icon}>{icon}</div>
    </>
  );

  if (isInternalRoute(href)) {
    return (
      <Link className={styles.card} to={href}>
        {content}
      </Link>
    );
  }

  const externalProps = isExternalHttpLink(href) ? { target: '_blank', rel: 'noopener noreferrer' } : {};

  return (
    <a className={styles.card} href={href} {...externalProps}>
      {content}
    </a>
  );
}
