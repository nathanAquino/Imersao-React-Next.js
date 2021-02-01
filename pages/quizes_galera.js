import Head from 'next/head';
import React from 'react';
import { motion } from 'framer-motion';
// import { useRouter } from 'next/router';

import db from '../db.json';
import Widget from '../src/components/Widget';
import QuizBackground from '../src/components/QuizBackground';
import GitHuberCorner from '../src/components/GitHuberCorner';
import QuizContainer from '../src/components/QuizContainer';
import Link from '../src/components/Link';
import BackLinkArrow from '../src/components/BackLinkArrow';
import Footer from '../src/components/Footer';

export default function Home() {
  // const router = useRouter();
  return (
    <QuizBackground backgroundImage={db.bgG}>
      <Head>
        <title>Assasins Creed</title>
        <meta property="og:image" content="https://www.clipartkey.com/mpngs/m/200-2006275_transparent-assassins-creed-symbol-png-assassins-creed-2.png" />
        <meta property="og:title" content="Quiz Assasin's Creed" key="title" />
        <meta property="og:description" content="Que tal testar seus conhecimentos sobre a Triologia Assasin's Creed?" />
      </Head>
      <QuizContainer>
        <Widget
          as={motion.section}
          transition={{ delay: 0.5, duration: 0.5 }}
          variants={{
            show: { opacit: 10, y: '0' },
            hidden: { opacity: 10, y: '100%' },
          }}
          initial="hidden"
          animate="show"
        >
          <BackLinkArrow href="/" />
          <Widget.Header>
            <h1>Quiz dos brothers</h1>
          </Widget.Header>
          <Widget.Brother>
            {db.external.map((linkExterno) => {
              const [projectName, githubUser] = linkExterno
                .replace(/\//g, '')
                .replace('https:', '')
                .replace('.vercel.app', '')
                .split('.');

              return (
                <Widget.QuizBrothers key={linkExterno}>
                  <Widget.Topic
                    as={Link}
                    href={`/quiz/${projectName}___${githubUser}`}
                  >
                    {`${githubUser}/${projectName}`}
                  </Widget.Topic>
                </Widget.QuizBrothers>
              );
            })}
            {/* <ul>
                    <li><a href="https://thelastofus-quiz.rhafaelcosta.vercel.app/">The Last of US</a></li>
                    <li><a href="https://quiz-games.gabrielwolf-dev.vercel.app/">Quiz de Games</a></li>
                    <li><a href="https://quiz-star-wars.mattheussal.vercel.app/">Star Wars</a></li>
                    <li><a href="https://quiz-with-nextjs.davifelix.vercel.app/">Vingadores</a></li>
                    </ul> */}
            <p>SURREAL O QUE ESSE PESSOAL QUE CONHECI NA IMERSÃO FIZERAM!!</p>
          </Widget.Brother>
        </Widget>
      </QuizContainer>
      <Footer />
      <GitHuberCorner projectUrl="https://github.com/nathanAquino" />
    </QuizBackground>
  );
}
