import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Favicon from 'react-favicon';

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
        <meta name='twitter:title' content='Big Mike' />
        <meta
          name='twitter:description'
          content='A young web developer with heart!'
        />
        <meta name='twitter:card' content='summary_large_image' />
        <Favicon url='https://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/call-me-hand.png' />
      </Helmet>
      <Hero />
      <Body />
      <ProjectSection />
    </div>
  );
}

export default MainPage;
