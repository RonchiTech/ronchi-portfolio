import React, { Suspense, lazy } from 'react';

const Main = lazy(() => import('./components/Main/Main'));
const AboutMe = lazy(() => import('./components/AboutMe/AboutMe'));
const Tech = lazy(() => import('./components/Tech/Tech'));
const Portfolio = lazy(() => import('./components/Portfolio/Portfolio'));
const Footer = lazy(() => import('./components/Footer/Footer'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Main />
      <AboutMe />
      <Tech />
      <Portfolio />
      <Footer />
    </Suspense>
  );
}

export default App;
