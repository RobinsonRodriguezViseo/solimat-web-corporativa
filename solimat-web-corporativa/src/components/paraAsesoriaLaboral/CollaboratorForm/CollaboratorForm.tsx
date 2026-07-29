import { useId, type FormEvent } from 'react';
import ActionButton from '../../paraEmpresa/ActionButton';
import styles from './CollaboratorForm.module.css';

interface FormField {
  name: string;
  label: string;
  type: 'text' | 'tel' | 'email' | 'textarea';
  placeholder?: string;
  inputMode?: 'numeric';
  fullWidth?: boolean;
}

const FIELDS: FormField[] = [
  { name: 'nombre', label: 'Nombre y Apellidos', type: 'text', placeholder: 'Nombre completo', fullWidth: true },
  { name: 'nif', label: 'NIF/NIE', type: 'text' },
  { name: 'razon-social', label: 'Razón Social', type: 'text' },
  { name: 'cif', label: 'CIF', type: 'text' },
  { name: 'numero-red', label: 'Nº de RED', type: 'text' },
  { name: 'telefono', label: 'Teléfono de contacto', type: 'tel' },
  { name: 'codigo-postal', label: 'Código Postal', type: 'text', inputMode: 'numeric' },
  { name: 'email', label: 'E-mail de contacto', type: 'email', fullWidth: true },
  { name: 'comentarios', label: 'Comentarios', type: 'textarea', fullWidth: true },
];

/** Formulario de alta como colaborador de Para Asesoría Laboral. */
export default function CollaboratorForm() {
  const fieldPrefix = useId();

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <div className={styles.card}>
      <h3 className={styles.title}>Solicitud de alta como colaborador</h3>
      <p className={styles.intro}>
        ¿Quieres colaborar con Solimat? Cumplimenta este formulario y nos pondremos en contacto contigo para
        ayudarte.
      </p>
      <form onSubmit={handleSubmit}>
        <div className={styles.grid}>
          {FIELDS.map((field) => {
            const id = `${fieldPrefix}-${field.name}`;

            return (
              <div key={field.name} className={field.fullWidth ? `${styles.field} ${styles.full}` : styles.field}>
                <label className={styles.label} htmlFor={id}>
                  {field.label}
                </label>
                {field.type === 'textarea' ? (
                  <textarea className={`${styles.input} ${styles.textarea}`} id={id} name={field.name} />
                ) : (
                  <input
                    className={styles.input}
                    id={id}
                    name={field.name}
                    type={field.type}
                    placeholder={field.placeholder}
                    inputMode={field.inputMode}
                  />
                )}
              </div>
            );
          })}
        </div>
        <label className={styles.consent}>
          <input className={styles.checkbox} type="checkbox" name="privacidad" required />
          <span className={styles.consentText}>
            Declaro haber leído la <a href="#">Política de Privacidad</a> y acepto el tratamiento de mis datos para
            esta finalidad.
          </span>
        </label>
        <div className={styles.actions}>
          <ActionButton type="submit" icon="arrow">
            Enviar
          </ActionButton>
        </div>
      </form>
    </div>
  );
}
