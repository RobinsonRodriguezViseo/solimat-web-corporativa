import { useId } from 'react';
import styles from './FormField.module.css';

export type FormFieldType = 'text' | 'email' | 'tel' | 'date';

interface FormFieldProps {
  label: string;
  name: string;
  type?: FormFieldType;
  /** Renderiza un `<textarea>` en lugar de un `<input>`. */
  multiline?: boolean;
  /** Clase del contenedor, para que el formulario controle la maquetación. */
  className?: string;
  /** Clase del control, para casos puntuales como el ancho del campo fecha. */
  inputClassName?: string;
}

export default function FormField({
  label,
  name,
  type = 'text',
  multiline = false,
  className,
  inputClassName,
}: FormFieldProps) {
  const id = useId();
  const controlClassName = inputClassName ? `${styles.control} ${inputClassName}` : styles.control;

  return (
    <div className={className ? `${styles.field} ${className}` : styles.field}>
      <label className={styles.label} htmlFor={id}>
        {label}
      </label>
      {multiline ? (
        <textarea className={`${controlClassName} ${styles.textarea}`} id={id} name={name} />
      ) : (
        <input className={controlClassName} id={id} name={name} type={type} />
      )}
    </div>
  );
}
