import perfilAsesoria from '../../../images/perfil-asesoria.png';
import perfilAutonomo from '../../../images/perfil-autonomo.png';
import perfilEmpresa from '../../../images/perfil-empresa.png';
import perfilTrabajador from '../../../images/perfil-trabajador.png';
import Container from '../../shared/Container';
import SectionHeading from '../../shared/SectionHeading';
import ProfileCard, { type ProfileCardLink } from '../ProfileCard';
import styles from './ProfilesSection.module.css';

interface ProfileData {
  image: string;
  title: string;
  description: string;
  links: ProfileCardLink[];
  ctaHref: string;
}

const PROFILES: ProfileData[] = [
  {
    image: perfilEmpresa,
    title: 'Empresa',
    description: 'Protegemos a tus trabajadores, ofreciéndoles una gran calidad asistencial.',
    links: [
      { label: 'Asóciate con nosotros', href: '/para-empresa' },
      { label: 'Asistencia Sanitaria', href: '/asistencia-sanitaria' },
      { label: 'Trámites', href: '/para-empresa' },
      { label: 'Red de centros', href: '/red-de-centros' },
      { label: 'Recursos y Herramientas', href: '/recursos-y-herramientas' },
    ],
    ctaHref: '/para-empresa',
  },
  {
    image: perfilTrabajador,
    title: 'Trabajador',
    description: 'Ponemos a tu servicio una atención cercana y personalizada con profesionales especializados.',
    links: [
      { label: 'Asistencia Sanitaria', href: '/asistencia-sanitaria' },
      { label: 'Prestaciones Económicas', href: '/prestaciones-economicas' },
      { label: 'Trámites', href: '/para-trabajador' },
      { label: 'Red de Centros', href: '/red-de-centros' },
      { label: 'Recursos y Herramientas', href: '/recursos-y-herramientas' },
    ],
    ctaHref: '/para-trabajador',
  },
  {
    image: perfilAutonomo,
    title: 'Autónomo',
    description: 'Cuidamos tu salud laboral y te ayudamos a gestionar tus trámites.',
    links: [
      { label: 'Adhiérete con nosotros', href: '/para-autonomo' },
      { label: 'Asistencia Sanitaria', href: '/asistencia-sanitaria' },
      { label: 'Prestaciones Económicas', href: '/prestaciones-economicas' },
      { label: 'Trámites', href: '/para-autonomo' },
      { label: 'Red de Centros', href: '/red-de-centros' },
      { label: 'Recursos y Herramientas', href: '/recursos-y-herramientas' },
    ],
    ctaHref: '/para-autonomo',
  },
  {
    image: perfilAsesoria,
    title: 'Asesoría Laboral',
    description: 'Trabajamos para contribuir y facilitar tu gestión diaria.',
    links: [
      { label: 'Colabora con nosotros', href: '/para-asesoria-laboral' },
      { label: 'Asistencia Sanitaria', href: '/asistencia-sanitaria' },
      { label: 'Prestaciones económicas', href: '/prestaciones-economicas' },
      { label: 'Trámites para empresa', href: '/para-empresa' },
      { label: 'Trámites para autónomo', href: '/para-autonomo' },
      { label: 'Red de centros', href: '/red-de-centros' },
      { label: 'Recursos y herramientas', href: '/recursos-y-herramientas' },
    ],
    ctaHref: '/para-asesoria-laboral',
  },
];

export default function ProfilesSection() {
  return (
    <Container as="section" id="perfiles" className={styles.section}>
      <SectionHeading
        eyebrow="Estamos contigo"
        title="¿Cómo podemos ayudarte?"
        description="Elige tu perfil y accede a la información, trámites y servicios que necesitas."
        align="center"
      />
      <div className={styles.grid}>
        {PROFILES.map((profile) => (
          <ProfileCard key={profile.title} {...profile} />
        ))}
      </div>
    </Container>
  );
}
