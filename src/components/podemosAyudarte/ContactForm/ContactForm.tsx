import { useState, type FormEvent } from 'react';
import Button from '../../shared/Button';
import FormField from '../FormField';
import styles from './ContactForm.module.css';

interface ContactFormValues {
  fullName: string;
  taxId: string;
  postalCode: string;
  phone: string;
  email: string;
  comments: string;
}

const EMPTY_VALUES: ContactFormValues = {
  fullName: '',
  taxId: '',
  postalCode: '',
  phone: '',
  email: '',
  comments: '',
};

export default function ContactForm() {
  const [values, setValues] = useState<ContactFormValues>(EMPTY_VALUES);
  const [privacyAccepted, setPrivacyAccepted] = useState(false);
  const [sent, setSent] = useState(false);

  const updateField = (field: keyof ContactFormValues) => (value: string) => {
    setValues((previous) => ({ ...previous, [field]: value }));
  };

  // Maquetación sin backend: el envío se queda en el navegador, no se transmite ningún dato.
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSent(true);
  };

  return (
    <div className={styles.card}>
      <div className={styles.eyebrow}>Formulario de contacto</div>
      <h2 className={styles.title}>Cuéntanos qué necesitas</h2>

      {sent ? (
        <div className={styles.success} role="status">
          <div className={styles.successIcon} aria-hidden="true">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
              <path d="M20 6L9 17l-5-5" />
            </svg>
          </div>
          <div>
            <h3 className={styles.successTitle}>¡Solicitud enviada!</h3>
            <p className={styles.successText}>Gracias por escribirnos. En breve atenderemos tu solicitud.</p>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} aria-label="Formulario de contacto">
          <div className={styles.grid}>
            <FormField
              className={styles.fullWidth}
              label="Nombre y Apellidos"
              value={values.fullName}
              onChange={updateField('fullName')}
              placeholder="Escribe tu nombre completo"
              required
            />
            <FormField
              label="CIF / NIF"
              value={values.taxId}
              onChange={updateField('taxId')}
              placeholder="Ej. 12345678A"
            />
            <FormField
              label="Código postal"
              value={values.postalCode}
              onChange={updateField('postalCode')}
              placeholder="Ej. 45003"
              inputMode="numeric"
            />
            <FormField
              label="Teléfono de contacto"
              type="tel"
              value={values.phone}
              onChange={updateField('phone')}
              placeholder="Ej. 925 00 00 00"
              required
            />
            <FormField
              label="E-mail de contacto"
              type="email"
              value={values.email}
              onChange={updateField('email')}
              placeholder="tu@email.com"
              required
            />
            <FormField
              className={styles.fullWidth}
              label="Comentarios"
              value={values.comments}
              onChange={updateField('comments')}
              placeholder="Cuéntanos en qué podemos ayudarte…"
              multiline
            />
          </div>

          <label className={styles.consent}>
            <input
              className={styles.checkbox}
              type="checkbox"
              checked={privacyAccepted}
              onChange={(event) => setPrivacyAccepted(event.target.checked)}
              required
            />
            <span className={styles.consentText}>
              Declaro haber leído la{' '}
              <a className={styles.consentLink} href="#">
                Política de Privacidad
              </a>{' '}
              y acepto el tratamiento de mis datos para esta finalidad.
            </span>
          </label>

          <div className={styles.actions}>
            <Button type="submit" size="lg" className={styles.submit}>
              Enviar solicitud
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </Button>
          </div>
        </form>
      )}
    </div>
  );
}
