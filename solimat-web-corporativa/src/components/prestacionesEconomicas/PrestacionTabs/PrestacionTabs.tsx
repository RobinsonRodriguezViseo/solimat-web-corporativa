import { useId, useState } from 'react';
import type { ReactNode } from 'react';
import Prose from '../../servicios/Prose';
import RichContent from '../../servicios/RichContent';
import type { RichBlock } from '../../servicios/RichContent';
import styles from './PrestacionTabs.module.css';

export interface PrestacionTab {
  id: string;
  label: string;
  blocks: RichBlock[];
}

interface PrestacionTabsProps {
  tabs: PrestacionTab[];
  /** Contenido fijo bajo la pestaña activa (p. ej. la llamada a la acción). */
  children?: ReactNode;
}

export default function PrestacionTabs({ tabs, children }: PrestacionTabsProps) {
  const baseId = useId();
  const [activeId, setActiveId] = useState(tabs[0]?.id ?? '');
  const activeTab = tabs.find((tab) => tab.id === activeId) ?? tabs[0];

  return (
    <>
      <div className={styles.tabs} role="tablist">
        {tabs.map((tab) => {
          const isActive = tab.id === activeTab?.id;

          return (
            <button
              key={tab.id}
              type="button"
              role="tab"
              id={`${baseId}-${tab.id}`}
              aria-selected={isActive}
              aria-controls={`${baseId}-${tab.id}-panel`}
              className={isActive ? `${styles.tab} ${styles.tabActive}` : styles.tab}
              onClick={() => setActiveId(tab.id)}
            >
              {tab.label}
            </button>
          );
        })}
      </div>
      <Prose className={styles.body}>
        {activeTab ? (
          <div
            role="tabpanel"
            id={`${baseId}-${activeTab.id}-panel`}
            aria-labelledby={`${baseId}-${activeTab.id}`}
          >
            <RichContent blocks={activeTab.blocks} />
          </div>
        ) : null}
        {children}
      </Prose>
    </>
  );
}
