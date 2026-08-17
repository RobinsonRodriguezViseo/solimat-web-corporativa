import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Container from '../../components/shared/Container';
import PageHero from '../../components/shared/PageHero';
import Button from '../../components/shared/Button';
import styles from './LoginPage.module.css';

interface LoginFormData {
  dni: string;
  password: string;
}

export default function LoginPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<LoginFormData>({
    dni: '',
    password: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Limpiar error cuando el usuario empieza a escribir
    if (error) setError('');
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      // Validaciones básicas del cliente
      if (!formData.dni.trim()) {
        setError('Por favor ingresa tu DNI, NIE o PAS');
        setIsLoading(false);
        return;
      }

      if (!formData.password.trim()) {
        setError('Por favor ingresa tu contraseña');
        setIsLoading(false);
        return;
      }

      // TODO: Aquí irá la llamada al backend cuando esté listo
      // Ejemplo:
      // const response = await fetch('/api/login', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData),
      // });
      // const data = await response.json();
      // if (!response.ok) {
      //   setError(data.message || 'Error en el inicio de sesión');
      //   return;
      // }
      // // Guardar token/sesión y redirigir
      // localStorage.setItem('authToken', data.token);

      console.log('Datos para enviar al backend:', formData);
      // Simulamos una pausa como si fuera una petición real
      await new Promise((resolve) => setTimeout(resolve, 1000));
      // Redirigir al dashboard
      navigate('/dashboard');
    } catch (err) {
      setError('Error al iniciar sesión. Por favor intenta nuevamente.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <PageHero
        breadcrumb={[{ label: 'Inicio', to: '/' }, { label: 'Administrador' }]}
        title="Acceso Administrador"
        subtitle="Inicia sesión con tu cuenta"
      />

      <Container as="section" className={styles.section}>
        <div className={styles.formWrapper}>
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.formGroup}>
              <label htmlFor="dni" className={styles.label}>
                DNI/NIE/PAS
              </label>
              <input
                type="text"
                id="dni"
                name="dni"
                value={formData.dni}
                onChange={handleChange}
                placeholder="Ingresa tu DNI, NIE o PAS"
                className={styles.input}
                disabled={isLoading}
                autoComplete="off"
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="password" className={styles.label}>
                Contraseña
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Contraseña"
                className={styles.input}
                disabled={isLoading}
                autoComplete="off"
              />
            </div>

            {error && <div className={styles.errorMessage}>{error}</div>}

            <Button type="submit" className={styles.submitButton} size="lg" block disabled={isLoading}>
              {isLoading ? 'Iniciando sesión...' : 'INICIAR SESIÓN'}
            </Button>

            <div className={styles.forgotPassword}>
              <a href="#">¿Olvidó la contraseña?</a>
            </div>
          </form>
        </div>
      </Container>
    </>
  );
}
