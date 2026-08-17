import type { CanalEticoGroup } from '../../../data/canalEtico';
import ContentCard from '../ContentCard';
import SectionTitle from '../SectionTitle';
import styles from './ContentGroup.module.css';

interface ContentGroupProps {
  group: CanalEticoGroup;
}

export default function ContentGroup({ group }: ContentGroupProps) {
  return (
    <section className={styles.section} id={group.id}>
      {group.title ? <SectionTitle title={group.title} /> : null}
      <div className={styles.stack}>
        {group.subsections.map((subsection) => (
          <ContentCard key={subsection.title} subsection={subsection} />
        ))}
      </div>
    </section>
  );
}
