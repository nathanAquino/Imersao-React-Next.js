/* eslint-disable react/jsx-curly-brace-presence */
/* eslint-disable react/style-prop-object */
/* eslint-disable no-var */
import Head from 'next/head';
import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';

import db from '../db.json';
import Widget from '../src/components/Widget';
import QuizBackground from '../src/components/QuizBackground';
import Footer from '../src/components/Footer';
import GitHuberCorner from '../src/components/GitHuberCorner';
import QuizLogo from '../src/components/QuizLogo';
import Button from '../src/components/Button';
// import Name from '../src/components/Name';
import Input from '../src/components/Input';
import QuizContainer from '../src/components/QuizContainer';
// import App from '../src/components/Animation';
// import Link from '../src/components/Link';

// const Title = styled.h1` nao sera mais necessario
//  font-size: 50px;
//  color: ${({ theme }) => theme.colors.primary};
// `
// e a mesma coisa do de cima
// function Title(props){ //propcidades/propriedades
//   return (
//     <h1>
//       {props.children}
//     </h1>
//   )
// }

// const BackgroundImage = styled.div`//´ tag function //extensao styled-components //javascript
//   background-image: url(${db.bg});
//   flex: 1;
//   background-size: cover;
//   background-position: center;
// `;

// Ai adiciona isso aqui no pack.json:scripts "eslint:init": "eslint --init"
// e para rodar no terminal npm run eslint:init
// parte visual do projeto

export default function Home() {
  const router = useRouter(); // hooks
  const [name, setName] = React.useState(''); // hooks

  return (
    <QuizBackground backgroundImage={db.bgI}>
      <Head>
        <title>Assasins Creed</title>
        <meta property="og:image" content="https://www.clipartkey.com/mpngs/m/200-2006275_transparent-assassins-creed-symbol-png-assassins-creed-2.png" />
        <meta property="og:title" content="Quiz Assasin's Creed" key="title" />
        <meta property="og:description" content="Que tal testar seus conhecimentos sobre a Triologia Assasin's Creed?" />
      </Head>
      <QuizLogo src={db.logo} alt="Logotipo Assasin's" />
      <QuizContainer.Form>
        <Widget
          as={motion.section}
          transition={{ delay: 0, duration: 0.5 }}
          variants={{
            show: { opacit: 10, y: '0' },
            hidden: { opacity: 10, y: '100%' },
          }}
          initial="hidden"
          animate="show"
        >
          <Widget.Header>
            <h1>{db.title}</h1>
          </Widget.Header>
          <Widget.Content>
            <form onSubmit={function evento(infosDoEvento) {
              infosDoEvento.preventDefault();
              router.push(`/quiz?name=${name}`); // ${} ostentação bigodinho
              // router manda para a proxima pagina
            }}
            >
              {/* <Input
                onChange={(event) => {
                  setName(event.target.value);
                }}
                placeholder="Digite seu nome"
              /> */}
              <Input
                name="nomedoUsuario"
                onChange={(infosDoEvento) => {
                  // State
                  // name = infoDoEvento.target.value;
                  setName(infosDoEvento.target.value);
                }}
                placeholder="Diz ai seu nome"
                value={name}
              />
              <Button type="submit" disabled={name.length === 0}>
                {`Jogar ${name}`}
              </Button>
              {/* <Button type="submit" disabled={name.length === 0}>
                Jogar
              </Button> */}
            </form>
            <Button onClick={() => (router.push('/quizes_galera'))}>
              QUIZ DOS OUTROS BROTHERS
            </Button>
          </Widget.Content>
        </Widget>
      </QuizContainer.Form>
      <Footer />
      <GitHuberCorner projectUrl="https://github.com/nathanAquino" />
    </QuizBackground>
  );
}
