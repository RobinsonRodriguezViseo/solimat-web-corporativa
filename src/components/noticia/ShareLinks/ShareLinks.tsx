import styles from './ShareLinks.module.css';

const NETWORKS = [
  {
    label: 'LinkedIn',
    href: 'https://es.linkedin.com/company/solimat-matepss-',
    path: 'M4.98 3.5A2.5 2.5 0 002.5 6a2.5 2.5 0 005 0 2.5 2.5 0 00-2.52-2.5zM3 8.98h4v12H3zM9.5 8.98h3.8v1.64h.05c.53-.95 1.83-1.96 3.77-1.96 4.03 0 4.78 2.65 4.78 6.1v6.22h-4v-5.51c0-1.32-.02-3-1.84-3-1.85 0-2.13 1.44-2.13 2.92v5.59h-4z',
    size: 17,
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/profile.php?id=100083202458773',
    path: 'M22 12a10 10 0 10-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0022 12z',
    size: 17,
  },
  {
    label: 'X',
    href: 'https://twitter.com/Solimat72',
    path: 'M18.24 2h3.3l-7.2 8.23L22.5 22h-6.6l-5.18-6.77L4.8 22H1.5l7.7-8.8L1.5 2h6.75l4.68 6.19zM17.1 20h1.83L7.02 3.9H5.06z',
    size: 15,
  },
];

export default function ShareLinks() {
  return (
    <div className={styles.wrapper}>
      <span className={styles.label}>Comparte:</span>
      <div className={styles.list}>
        {NETWORKS.map((network) => (
          <a
            key={network.label}
            className={styles.button}
            href={network.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={network.label}
          >
            <svg width={network.size} height={network.size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d={network.path} />
            </svg>
          </a>
        ))}
      </div>
    </div>
  );
}
