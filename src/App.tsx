import { useEffect, useState } from 'react';
import { MainLayout } from './layouts/MainLayout';
import { DemoPage } from './pages/DemoPage';
import { LandingPage } from './pages/LandingPage';

export default function App() {
  const [pathname, setPathname] = useState(window.location.pathname);

  useEffect(() => {
    const handleRouteChange = () => {
      setPathname(window.location.pathname);
      window.scrollTo({ top: 0, behavior: 'instant' });
    };

    window.addEventListener('popstate', handleRouteChange);
    return () => window.removeEventListener('popstate', handleRouteChange);
  }, []);

  const page = pathname === '/demo' ? <DemoPage /> : <LandingPage />;

  return <MainLayout>{page}</MainLayout>;
}
