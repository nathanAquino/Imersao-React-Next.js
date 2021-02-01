/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable react/jsx-pascal-case */
/* eslint-disable jsx-a11y/alt-text */
import Head from 'next/head';
import React from 'react';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';

import db from '../db.json';
import QuizBackground from '../src/components/QuizBackground';
import GitHuberCorner from '../src/components/GitHuberCorner';
import Widget from '../src/components/Widget';

export default function Home() {
  const router = useRouter(); // hooks
  // React.useEffect(() => {
  //   // fetch() ...
  //   setTimeout(() => {
  //     setScreenState(screenStates.QUIZ);
  //   }, 4 * 1000);
  // nasce == didMount
  // }, []);
  React.useEffect(() => {
    // fetch() ...
    setTimeout(() => {
      router.push('/pagina_principal');
    }, 6 * 1090);
    // nasce == didMount
  }, []);
  return (
    <QuizBackground backgroundImage={db.bgB}>
      <Head>
        <title>Assasins Creed</title>
        <meta property="og:image" content="https://www.clipartkey.com/mpngs/m/200-2006275_transparent-assassins-creed-symbol-png-assassins-creed-2.png" />
        <meta property="og:title" content="Quiz Assasin's Creed" key="title" />
        <meta property="og:description" content="Que tal testar seus conhecimentos sobre a Triologia Assasin's Creed?" />
      </Head>
      <Widget.BemVindo
        as={motion.section}
        transition={{ delay: 0, duration: 0.5 }}
        variants={{
          show: { opacit: 10, y: '0' },
          hidden: { opacity: 10, y: '100%' },
        }}
        initial="hidden"
        animate="show"
      >
        <span className="FM">B</span>
        EM VINDO A
        <span className="FM">O</span>
        <style>
          {'\
          .FM{\
            font-size: 120px;\
            margin-top:30px;\
          }\
        '}
        </style>

      </Widget.BemVindo>
      <Widget.QuizAssassinos
        as={motion.section}
        transition={{ delay: 0.5, duration: 0.5 }}
        variants={{
          show: { opacit: 10, y: '0' },
          hidden: { opacity: 10, y: '100%' },
        }}
        initial="hidden"
        animate="show"
      >
        QUIZ DOS ASSASINOS
      </Widget.QuizAssassinos>
      <GitHuberCorner projectUrl="https://github.com/nathanAquino" />
    </QuizBackground>
  );
}
