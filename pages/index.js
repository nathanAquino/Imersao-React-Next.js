import styled from 'styled-components';
import Head from 'next/head';
import React from 'react';
import { useRouter } from 'next/router';

import db from '../db.json';
import Widget from '../src/components/Widget';
import QuizBackground from '../src/components/QuizBackground';
import Footer from '../src/components/Footer';
import GitHuberCorner from '../src/components/GitHuberCorner';
import QuizLogo from '../src/components/QuizLogo';
import Button from '../src/components/Button';
import Name from '../src/components/Name';

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

const QuizContainerForm = styled.div` 
  width: 90%; //largura
  max-width: 280px; //comprimento
  padding-top: 225px; //altura
  margin: auto 1%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

const QuizContainer = styled.div` 
  width: 100%;
  max-width: 300px; //comprimento
  padding-top: -5px; //altura
  margin: auto 1%;
  @media screen and (max-width: 400px) {
    margin: auto;
    padding: 95px;
  }
`;
// Ai adiciona isso aqui no pack.json:scripts "eslint:init": "eslint --init"
// e para rodar no terminal npm run eslint:init
// parte visual do projeto
export default function Home() {
  const router = useRouter(); // hooks
  const [name, setName] = React.useState(''); // hooks

  return (
    <QuizBackground backgroundImage={db.bg2}>
      <Head>
        <title>Assasins Creed</title>
        <meta property="og:image" content="https://www.clipartkey.com/mpngs/m/200-2006275_transparent-assassins-creed-symbol-png-assassins-creed-2.png" />
        <meta property="og:title" content="Quiz Assasin's Creed" key="title" />
        <meta property="og:description" content="Que tal testar seus conhecimentos sobre a Triologia Assasin's Creed?" />
      </Head>
      <QuizContainerForm>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1>{db.title}</h1>
          </Widget.Header>
          <Widget.Content>
            <form onSubmit={function evento(infoDoEvento) {
              infoDoEvento.preventDefault();
              router.push(`/quiz?name=${name}`); // ${} ostentação bigodinho
              // router manda para a proxima pagina
            }}
            >
              <Name
                onChange={(event) => {
                  setName(event.target.value);
                }}
                placeholder="Digite seu nome"
              />
              {/* <input
                onChange={function evento(infoDoEvento) {
                  // State
                  // name = infoDoEvento.target.value;
                  setName(infoDoEvento.target.value);
                }}
                placeholder="Diz ai seu nome"
              /> */}
              <Button type="submit" disabled={name.length === 0}>
                Jogar
              </Button>
            </form>
          </Widget.Content>
        </Widget>
      </QuizContainerForm>
      <QuizContainer>
        <Widget>
          <Widget.Header>
            <h1>Quiz dos brothers</h1>
          </Widget.Header>
          <Widget.Content>
            <ul>
              <li><a href="https://thelastofus-quiz.rhafaelcosta.vercel.app/">The Last of US</a></li>
              <li><a href="https://quiz-games.gabrielwolf-dev.vercel.app/">Quiz de Games</a></li>
              <li><a href="https://quiz-padrao-projetos.thassya.vercel.app">Padrão de Projetos</a></li>
              <li><a href="https://aluraquiz-base.henrique1818.vercel.app">Vingadores</a></li>
            </ul>
            <p>SURREAL O QUE ELES FIZERAM!!</p>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHuberCorner projectUrl="https://github.com/nathanAquino" />
    </QuizBackground>
  );
}
