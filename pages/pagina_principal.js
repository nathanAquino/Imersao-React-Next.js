/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable react/jsx-pascal-case */
/* eslint-disable jsx-a11y/alt-text */
import Head from 'next/head';
import React from 'react';
import { useRouter } from 'next/router';

import db from '../db.json';
import QuizBackground from '../src/components/QuizBackground';
import GitHuberCorner from '../src/components/GitHuberCorner';

export default function Home() {
  // const router = useRouter(); // hooks
  // React.useEffect(() => {
  //   // fetch() ...
  //   setTimeout(() => {
  //     setScreenState(screenStates.QUIZ);
  //   }, 4 * 1000);
  // nasce == didMount
  // }, []);
  return (
    <QuizBackground backgroundImage={db.bg3}>
      <Head>
        <title>Assasins Creed</title>
        <meta property="og:image" content="https://www.clipartkey.com/mpngs/m/200-2006275_transparent-assassins-creed-symbol-png-assassins-creed-2.png" />
        <meta property="og:title" content="Quiz Assasin's Creed" key="title" />
        <meta property="og:description" content="Que tal testar seus conhecimentos sobre a Triologia Assasin's Creed?" />
      </Head>
      <div style={{
        width: '100%', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center',
      }}
      >
        <img
          style={{ width: '30%', height: '30%', objectFit: 'contain' }}
          src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/643db68c-81c8-406a-9eb8-5b7dc9077d73/d3a4mor-afbc47af-398e-462d-9950-47bd760910f9.gif"
        />
        <form onLoad={function evento(infoDoEvento) {
          setTimeout(() => {
            infoDoEvento.preventDefault();
            router.push('/pagina_principal');
          }, 5 * 1000);
        }}
        />
      </div>
      <GitHuberCorner projectUrl="https://github.com/nathanAquino" />
    </QuizBackground>
  );
}
