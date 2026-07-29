import { useState, type FocusEvent, useRef } from 'react';
import { Link } from 'react-router-dom';
import styles from './NavDropdown.module.css';

export interface NavDropdownItem {
  label: string;
  href: string;
}

interface NavDropdownProps {
  label: string;
  items: NavDropdownItem[];
}

const isExternalHttpLink = (href: string): boolean => /^https?:\/\//.test(href);

export default function NavDropdown({ label, items }: NavDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  const close = () => setIsOpen(false);

  const handleBlur = (event: FocusEvent<HTMLDivElement>) => {
    if (!rootRef.current?.contains(event.relatedTarget as Node | null)) {
      close();
    }
  };

  return (
    <div className={styles.navdd} ref={rootRef} onBlur={handleBlur}>
      <button
        type="button"
        className={styles.trigger}
        aria-expanded={isOpen}
        onClick={() => setIsOpen((current) => !current)}
      >
        {label}
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden="true">
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>
      <div className={isOpen ? `${styles.menu} ${styles.menuOpen}` : styles.menu}>
        {items.map((item) =>
          isExternalHttpLink(item.href) ? (
            <a
              key={item.href}
              className={styles.item}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              onClick={close}
            >
              {item.label}
            </a>
          ) : (
            <Link key={item.href} className={styles.item} to={item.href} onClick={close}>
              {item.label}
            </Link>
          ),
        )}
      </div>
    </div>
  );
}
