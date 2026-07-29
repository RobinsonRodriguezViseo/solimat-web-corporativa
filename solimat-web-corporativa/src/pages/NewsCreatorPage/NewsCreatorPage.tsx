import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Container from '../../components/shared/Container';
import PageHero from '../../components/shared/PageHero';
import Button from '../../components/shared/Button';
import WYSIWYGEditor from '../../components/admin/WYSIWYGEditor/WYSIWYGEditor';
import { createNews } from '../../services/newsService';
import styles from './NewsCreatorPage.module.css';

export default function NewsCreatorPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    content: '',
  });
  const [imagePreview, setImagePreview] = useState<string>('');
  const [imageFileName, setImageFileName] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, title: e.target.value }));
    if (errors.title) {
      setErrors((prev) => ({ ...prev, title: '' }));
    }
  };

  const handleContentChange = (content: string) => {
    setFormData((prev) => ({ ...prev, content }));
    if (errors.content) {
      setErrors((prev) => ({ ...prev, content: '' }));
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validar tipo de archivo
    if (!file.type.startsWith('image/')) {
      setErrors((prev) => ({
        ...prev,
        image: 'Por favor selecciona una imagen válida (JPG, PNG, etc.)',
      }));
      return;
    }

    // Validar tamaño (máx 5MB)
    if (file.size > 5 * 1024 * 1024) {
      setErrors((prev) => ({
        ...prev,
        image: 'La imagen no debe superar 5MB',
      }));
      return;
    }

    setImageFileName(file.name);

    // Convertir a Base64
    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result as string);
      if (errors.image) {
        setErrors((prev) => ({ ...prev, image: '' }));
      }
    };
    reader.readAsDataURL(file);
  };

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.title.trim()) {
      newErrors.title = 'El título es requerido';
    }

    if (!formData.content.trim() || formData.content === '<br>') {
      newErrors.content = 'El contenido es requerido';
    }

    if (!imagePreview) {
      newErrors.image = 'Debes seleccionar una imagen';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    try {
      // Crear la noticia
      createNews(
        formData.title,
        formData.content,
        imagePreview,
        imageFileName
      );

      // TODO: Cuando el backend esté listo, hacer POST a /api/news
      // const formDataToSend = new FormData();
      // formDataToSend.append('title', formData.title);
      // formDataToSend.append('content', formData.content);
      // formDataToSend.append('image', imageFile);
      //
      // const response = await fetch('/api/news', {
      //   method: 'POST',
      //   body: formDataToSend,
      // });
      //
      // if (!response.ok) throw new Error('Error al crear la noticia');

      // Redirigir al dashboard
      navigate('/dashboard');
    } catch (error) {
      console.error('Error al crear noticia:', error);
      setErrors((prev) => ({
        ...prev,
        submit: 'Error al crear la noticia. Intenta de nuevo.',
      }));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <PageHero
        breadcrumb={[{ label: 'Inicio', to: '/' }, { label: 'Dashboard', to: '/dashboard' }, { label: 'Crear noticia' }]}
        title="Crear nueva noticia"
        subtitle="Completa el formulario para crear una nueva noticia"
      />

      <Container>
        <div className={styles.creator}>
          <form onSubmit={handleSubmit} className={styles.form}>
            {/* Título */}
            <div className={styles.formGroup}>
              <label htmlFor="title" className={styles.label}>
                Título de la noticia
              </label>
              <input
                id="title"
                type="text"
                value={formData.title}
                onChange={handleTitleChange}
                placeholder="Ej: Nueva iniciativa de prevención en seguridad laboral"
                className={styles.input}
                disabled={isLoading}
              />
              {errors.title && (
                <span className={styles.error}>{errors.title}</span>
              )}
            </div>

            {/* Imagen */}
            <div className={styles.formGroup}>
              <label htmlFor="image" className={styles.label}>
                Imagen de portada
              </label>
              <div className={styles.imageUpload}>
                <input
                  id="image"
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className={styles.fileInput}
                  disabled={isLoading}
                />
                <div className={styles.uploadArea}>
                  <p className={styles.uploadText}>
                    📸 Arrastra una imagen aquí o haz clic para seleccionar
                  </p>
                  <p className={styles.uploadHint}>
                    JPG, PNG - Máximo 5MB
                  </p>
                </div>
              </div>

              {imagePreview && (
                <div className={styles.preview}>
                  <img src={imagePreview} alt="Vista previa" />
                  <button
                    type="button"
                    onClick={() => {
                      setImagePreview('');
                      setImageFileName('');
                    }}
                    className={styles.removeImage}
                    disabled={isLoading}
                  >
                    ✕ Quitar imagen
                  </button>
                </div>
              )}

              {errors.image && (
                <span className={styles.error}>{errors.image}</span>
              )}
            </div>

            {/* Contenido */}
            <div className={styles.formGroup}>
              <label className={styles.label}>
                Contenido de la noticia
              </label>
              <WYSIWYGEditor
                value={formData.content}
                onChange={handleContentChange}
                placeholder="Escribe el contenido de la noticia aquí..."
                disabled={isLoading}
              />
              {errors.content && (
                <span className={styles.error}>{errors.content}</span>
              )}
            </div>

            {errors.submit && (
              <div className={styles.submitError}>
                {errors.submit}
              </div>
            )}

            {/* Acciones */}
            <div className={styles.actions}>
              <Button
                type="button"
                onClick={() => navigate('/dashboard')}
                variant="soft"
                disabled={isLoading}
              >
                Cancelar
              </Button>
              <Button
                type="submit"
                disabled={isLoading}
              >
                {isLoading ? '⏳ Creando noticia...' : '✅ Crear noticia'}
              </Button>
            </div>

            <p className={styles.info}>
              La noticia será enviada a revisión y necesitará ser aprobada antes de publicarse.
            </p>
          </form>
        </div>
      </Container>
    </>
  );
}
