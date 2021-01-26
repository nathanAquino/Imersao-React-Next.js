import styled from 'styled-components'
import db from '../db.json'
import Widget from '../src/components/Widget'
import QuizBackground from '../src/components/QuizBackground'
import Footer from '../src/components/Footer'
import GitHuberCorner from '../src/components/GitHuberCorner'
import QuizLogo from '../src/components/QuizLogo'
import Head from 'next/head'
import Link from 'next/link'
// const Title = styled.h1` nao sera mais necessario
//  font-size: 50px;
//  color: ${({ theme }) => theme.colors.primary};
// `
//e a mesma coisa do de cima
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

const QuizContainer = styled.div` 
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

//parte visual do projeto
export default function Home() {
  return (
    <QuizBackground backgroundImage= {db.bg}>
    <QuizContainer>
      <QuizLogo/>
      <Widget>
        <Widget.Header>
          <h1>{db.title}</h1>
        </Widget.Header>
        <Widget.Content>
          <p>{db.description}</p>
        </Widget.Content>
      </Widget>
      
      <Widget>
        <Widget.Content>
          <h1>Quiz dos brothers</h1>

          <p>Surreal o que eles fizeram</p>
        </Widget.Content>
      </Widget>
      <Footer />
    </QuizContainer>
    <GitHuberCorner projectUrl="https://github.com/nathanAquino"/>
  </QuizBackground>
  ); 
}
