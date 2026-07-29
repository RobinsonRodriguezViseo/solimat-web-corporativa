import { useState, type FormEvent } from 'react';
import FormField from '../FormField';
import PrivacyNotice from '../PrivacyNotice';
import SubmissionSuccess from '../SubmissionSuccess';
import styles from './CanalEticoForm.module.css';

const IDENTITY_FIELDS = [
  { name: 'nombre', label: 'Nombre del informante', type: 'text' as const, wide: false },
  { name: 'apellidos', label: 'Apellidos del informante', type: 'text' as const, wide: false },
  { name: 'dni', label: 'DNI del informante', type: 'text' as const, wide: false },
  { name: 'telefono', label: 'Teléfono del informante', type: 'tel' as const, wide: false },
  { name: 'email', label: 'E-mail del informante', type: 'email' as const, wide: true },
  { name: 'relacion', label: 'Relación con Solimat', type: 'text' as const, wide: true },
];

export default function CanalEticoForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  if (sent) {
    return <SubmissionSuccess />;
  }

  return (
    <form onSubmit={handleSubmit}>
      <FormField
        label="Fecha"
        name="fecha"
        type="date"
        className={styles.dateField}
        inputClassName={styles.dateInput}
      />
      <FormField
        label="Descripción de la comunicación (hechos, fechas, lugares, personas involucradas, departamentos, etc.)"
        name="descripcion"
        multiline
        className={styles.descriptionField}
      />

      <div className={styles.identityIntro}>Si te quieres identificar, cumplimenta los siguientes campos:</div>
      <div className={styles.identityGrid}>
        {IDENTITY_FIELDS.map((field) => (
          <FormField
            key={field.name}
            label={field.label}
            name={field.name}
            type={field.type}
            className={field.wide ? styles.wideField : undefined}
          />
        ))}
      </div>

      <label className={styles.check}>
        <input className={styles.checkbox} type="checkbox" name="condiciones" required />
        <span className={styles.checkText}>
          He leído y acepto las condiciones de uso del Canal Ético y de Información, que incluyen el procedimiento
          para su formulación y que originará una comunicación anónima o confidencial, dirigida al Compliance
          Officer.
        </span>
      </label>
      <label className={`${styles.check} ${styles.lastCheck}`}>
        <input className={styles.checkbox} type="checkbox" name="privacidad" required />
        <span className={styles.checkText}>
          Declaro haber leído la Política de Privacidad y acepto el tratamiento de mis datos para esta finalidad.
        </span>
      </label>

      <PrivacyNotice />

      <div className={styles.actions}>
        <button className={styles.submit} type="submit">
          Enviar
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </button>
      </div>
    </form>
  );
}
