import CentersBand from '../../components/home/CentersBand';
import Hero from '../../components/home/Hero';
import InterestSection from '../../components/home/InterestSection';
import NewsSection from '../../components/home/NewsSection';
import ProfilesSection from '../../components/home/ProfilesSection';
import QuickAccessGrid from '../../components/home/QuickAccessGrid';

export default function HomePage() {
  return (
    <>
      <Hero />
      <QuickAccessGrid />
      <ProfilesSection />
      <CentersBand />
      <InterestSection />
      <NewsSection />
    </>
  );
}
