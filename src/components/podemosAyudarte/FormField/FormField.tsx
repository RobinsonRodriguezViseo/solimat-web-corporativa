import { useId } from 'react';
import styles from './FormField.module.css';

export type FormFieldType = 'text' | 'tel' | 'email';

interface FormFieldProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: FormFieldType;
  required?: boolean;
  placeholder?: string;
  inputMode?: 'numeric';
  multiline?: boolean;
  className?: string;
}

export default function FormField({
  label,
  value,
  onChange,
  type = 'text',
  required = false,
  placeholder,
  inputMode,
  multiline = false,
  className,
}: FormFieldProps) {
  const fieldId = useId();
  const wrapperClassName = className ? `${styles.field} ${className}` : styles.field;

  return (
    <div className={wrapperClassName}>
      <label className={styles.label} htmlFor={fieldId}>
        {label}
        {required ? (
          <span className={styles.required} aria-hidden="true">
            *
          </span>
        ) : null}
      </label>
      {multiline ? (
        <textarea
          className={`${styles.input} ${styles.textarea}`}
          id={fieldId}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          required={required}
          placeholder={placeholder}
        />
      ) : (
        <input
          className={styles.input}
          id={fieldId}
          type={type}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          required={required}
          placeholder={placeholder}
          inputMode={inputMode}
        />
      )}
    </div>
  );
}
