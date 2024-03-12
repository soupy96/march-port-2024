import { useEffect } from 'react';
import { Helmet } from 'react-helmet';

import Hero from '../components/Hero';
import Body from '../components/Body';
import ProjectSection from '../components/ProjectSection';

function MainPage() {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  });

  return (
    <div>
      <Helmet>
        <title>Big Mike ✌</title>
      </Helmet>
      <Hero />
      <Body />
      <ProjectSection />
    </div>
  );
}

export default MainPage;
