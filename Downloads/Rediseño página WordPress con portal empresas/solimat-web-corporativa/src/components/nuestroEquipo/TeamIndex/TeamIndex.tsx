import type { TeamIndexGroup } from '../../../data/nuestroEquipo';
import SideIndex from '../../quienesSomos/SideIndex';
import styles from './TeamIndex.module.css';

interface TeamIndexProps {
  groups: TeamIndexGroup[];
  activeId: string;
}

export default function TeamIndex({ groups, activeId }: TeamIndexProps) {
  return (
    <aside className={styles.aside}>
      <div className={styles.kicker}>En esta página</div>
      {groups.map((group) => (
        <div className={styles.group} key={group.label}>
          <div className={styles.groupLabel}>{group.label}</div>
          {/* Cada grupo monta su propio <nav>: se etiqueta con el rótulo del grupo
              para no repetir landmarks de navegación con el mismo nombre accesible. */}
          <SideIndex items={group.items} activeId={activeId} label={`Índice: ${group.label}`} />
        </div>
      ))}
    </aside>
  );
}
