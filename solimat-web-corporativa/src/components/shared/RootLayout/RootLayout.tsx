import { Outlet } from 'react-router-dom';
import Footer from '../Footer';
import Header from '../Header';
import TopBar from '../TopBar';
import styles from './RootLayout.module.css';

export default function RootLayout() {
  return (
    <div className={styles.page}>
      <TopBar />
      <Header />
      <main className={styles.main}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
