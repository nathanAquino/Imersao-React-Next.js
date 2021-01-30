/* eslint-disable import/no-unresolved */

/* eslint-disable react/prop-types */
import React from 'react';
// import styled from 'styled-components';
import Head from 'next/head';
import { useRouter } from 'next/router';

import db from '../../db.json';
import Widget from '../../src/components/Widget';
import QuizBackground from '../../src/components/QuizBackground';
import QuizLogo from '../../src/components/QuizLogo';
import GitHuberCorner from '../../src/components/GitHuberCorner';
import QuizContainer from '../../src/components/QuizContainer';
import Button from '../../src/components/Button';
import AlternativesForm from '../../src/components/AlternativeForm';
import BackLinkArrow from '../../src/components/BackLinkArrow';

function ResultWidget({ results }) {
  const router = useRouter();
  return (
    <Widget>
      <Widget.Header>
        <BackLinkArrow href="/" />
        Tela de Resultado:
      </Widget.Header>

      <Widget.Content>
        <p>
          {router.query.name}
          {' '}
          Voce acertou
          {' '}
          {/* {results.reduce((somatoriaAtual, resultAtual) => {
            const isAcerto = resultAtual === true;
            if (isAcerto) {
              return somatoriaAtual + 1;
            }
            return somatoriaAtual;
          }, 0)} */}
          {results.filter((x) => x).length}
          {' '}
          Perguntas
        </p>
        <ul>
          {results.map((result, index) => (
            <li key={`result__${result}`}>
              #
              {index + 1 }
              {' '}
              Resultado:
              {result === true ? 'Acertou' : 'errou' }
            </li>
          ))}
        </ul>
      </Widget.Content>
    </Widget>
  );
}

function LoadingWidget() {
  return (
    <Widget>
      <Widget.Header>Carregando...</Widget.Header>
      <Widget.Content>
        <img
          style={{ width: '100%', height: '50%' }}
          src="https://64.media.tumblr.com/6f60e26503a4cce101743900a5f8de68/tumblr_mudyicriXf1sjro9ko1_250.gifv"
          alt="loading gif"
        />
      </Widget.Content>
    </Widget>
  );
}

function QuestionWidget({
  question,
  totalQuestions,
  questionIndex,
  onSubmit,
  addResult,
}) {
  const [selectAlternative, setSelectAlternative] = React.useState(undefined);
  const [isQuestionSubmited, setQuestionIsSubmited] = React.useState();
  const questionId = `question__${questionIndex}`;
  const isCorrect = selectAlternative === question.answer;
  const hasAlternativeSelected = selectAlternative !== undefined;

  return (
    <Widget>
      <Widget.Header>
        <BackLinkArrow href="/" />
        <h3>
          {`Pergunta ${questionIndex + 1} de ${totalQuestions}`}
        </h3>
      </Widget.Header>
      <img
        alt="Descrição"
        style={{
          width: '100%',
          height: '150px',
          objectFit: 'cover',
        }}
        src={question.image}
      />
      <Widget.Content>
        <h2>
          {question.title}
        </h2>
        <p>
          {question.description}
        </p>

        <AlternativesForm
          onSubmit={(infosDoEvento) => {
            infosDoEvento.preventDefault();
            setQuestionIsSubmited(true);
            setTimeout(() => {
              addResult(isCorrect);
              onSubmit();
              setQuestionIsSubmited(false);
              setSelectAlternative(undefined);
            }, 3 * 1000);
          }}
        >
          {question.alternatives.map((alternative, alternativeIndex) => {
            const alternativeId = `alternative__${alternativeIndex}`;
            const alternativeStatus = isCorrect ? 'SUCESS' : 'ERROR';
            const isSelected = selectAlternative === alternativeIndex;
            return (
              <Widget.Topic
                as="label"
                key={alternativeId}
                htmlFor={alternativeId}
                data-selected={isSelected}
                data-status={isQuestionSubmited && alternativeStatus}

              >
                <input
                  style={{ display: 'none' }}
                  id={alternativeId}
                  name={questionId}
                  onChange={() => setSelectAlternative(alternativeIndex)}
                  type="radio"
                />
                {alternative}
              </Widget.Topic>
            );
          })}
          {/*
          <pre>
            {JSON.stringify(question, null, 4)}
          </pre> */}

          <Button type="submit" disabled={!hasAlternativeSelected}>
            Confirmar
          </Button>
          {/* a parte abaixo mostra qual questao a pessoa
          seleciona no caso a variavel selectAlternative */
          /* <p>selectAlternative {`${selectAlternative}`} </p> */ }
          {isQuestionSubmited && isCorrect && <p> Voce acertou!! </p>}
          {isQuestionSubmited && !isCorrect && <p> Voce errou!! </p>}
        </AlternativesForm>
      </Widget.Content>
    </Widget>
  );
}

const screenStates = {
  QUIZ: 'QUIZ',
  LOADING: 'LOADING',
  RESULT: 'RESULT',
};

export default function QuizPage() {
  const [screenState, setScreenState] = React.useState(screenStates.LOADING);
  const [results, setResults] = React.useState([]);
  const totalQuestions = db.questions.length;
  const [currentQuestion, setCurrentQuestion] = React.useState(0);
  const questionIndex = currentQuestion;
  const question = db.questions[questionIndex];

  function addResult(result) {
    // results.push(result);
    setResults([
      ...results,
      result,
    ]);
  }

  React.useEffect(() => {
    // fetch() ...
    setTimeout(() => {
      setScreenState(screenStates.QUIZ);
    }, 4 * 1000);
  // nasce == didMount
  }, []);

  // [React chama de : Efeitos || Efects]
  // atualizado == WillUpdate
  // morre == willUnmount
  // React.useEffect

  function handleSubmitQuiz() {
    const nextQuestion = questionIndex + 1;
    if (nextQuestion < totalQuestions) {
      setCurrentQuestion(nextQuestion);
    } else {
      setScreenState(screenStates.RESULT);
    }
    // setScreenState(screenStates.RESULT);
  }
  return (
    <QuizBackground backgroundImage={db.bgQ}>
      <Head>
        <title>Assasin`s Creed</title>
      </Head>
      <QuizContainer>
        <QuizLogo />
        {screenState === screenStates.QUIZ && (
          <QuestionWidget
            question={question}
            questionIndex={questionIndex}
            totalQuestions={totalQuestions}
            onSubmit={handleSubmitQuiz}
            addResult={addResult}
          />
        )}

        {screenState === screenStates.LOADING && <LoadingWidget />}

        {screenState === screenStates.RESULT && <ResultWidget results={results} />}
      </QuizContainer>
      <GitHuberCorner projectUrl="https://github.com/nathanAquino" />
    </QuizBackground>
  );
}

