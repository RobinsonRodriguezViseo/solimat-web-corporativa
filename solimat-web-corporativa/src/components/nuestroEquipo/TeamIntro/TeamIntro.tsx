import styles from './TeamIntro.module.css';

interface TeamIntroProps {
  lead: string;
  text: string;
  image: string;
  imageAlt: string;
}

export default function TeamIntro({ lead, text, image, imageAlt }: TeamIntroProps) {
  return (
    <div className={styles.card}>
      <div className={styles.body}>
        <p className={styles.lead}>{lead}</p>
        <p className={styles.text}>{text}</p>
      </div>
      <img className={styles.image} src={image} alt={imageAlt} />
    </div>
  );
}
