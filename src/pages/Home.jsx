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
        <title>Big Mike 🤙</title>
        <meta name='description' content='A young web developer with heart!' />
        <meta
          name='keywords'
          content='web developer, developer, website, react, wordpress'
        />
        <meta name='author' content='Michael Campbell' />
        <meta property='og:title' content='Big Mike 🤙' />
        <meta
          property='og:description'
          content='A young web developer with heart!'
        />
        <meta property='og:image' content='https://example.com/image.jpg' />
        <meta property='og:url' content='https://example.com/my-page' />
        <meta name='twitter:title' content='My Page Title' />
        <meta
          name='twitter:description'
          content='This is a description of my page'
        />
        <meta name='twitter:image' content='https://example.com/image.jpg' />
        <meta name='twitter:card' content='summary_large_image' />
      </Helmet>
      <Hero />
      <Body />
      <ProjectSection />
    </div>
  );
}

export default MainPage;
