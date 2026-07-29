import type { LegislativeYearGroup } from '../../../data/referenciasLegislativas';
import ReferenceItem from '../ReferenceItem';
import styles from './YearGroup.module.css';

interface YearGroupProps {
  group: LegislativeYearGroup;
}

export default function YearGroup({ group }: YearGroupProps) {
  return (
    <section className={styles.group} id={group.id} aria-labelledby={`${group.id}-title`}>
      <div className={styles.header}>
        <h2 className={styles.year} id={`${group.id}-title`}>
          {group.year}
        </h2>
        <span className={styles.rule} aria-hidden="true" />
      </div>
      <div className={styles.list}>
        {group.items.map((item) => (
          <ReferenceItem key={item.url + item.title} title={item.title} description={item.description} url={item.url} />
        ))}
      </div>
    </section>
  );
}
