import styled from 'styled-components';

const QuizContainer = styled.div` 
  width: 90%; //largura
  max-width: 700px; //comprimento
  margin: 0px auto 0;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

QuizContainer.Result = styled.div` 
  width: 100%;
  max-width: 300px; //comprimento
  padding-top: -5px; //altura
  margin: auto 1%;
  @media screen and (max-width: 400px) {
    margin: auto;
    padding: 95px;
  }
`;

QuizContainer.Form = styled.div` 
  width: 90%; //largura
  max-width: 310px; //comprimento
  margin: 0px auto 0;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default QuizContainer;
