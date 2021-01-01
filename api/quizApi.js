import axios from 'axios';
import { shuffle } from 'underscore';
import baseURL from './constants';

export async function fetchQuestions() {
  const response = await axios.get(`${baseURL}`);
  if (response && response.data) {
    return response.data.map((question) => {
      let correctAnswer = question.answers[question.correct_answer];
      let answers = Object.values(question.answers);
      if (question.multiple_correct_answers) {
        const firstCorrectAnswerKey = Object.keys(question.correct_answers).find((correctAnswerKey) => question.correct_answers[correctAnswerKey]);
        const wrongAnswers = Object.keys(question.correct_answers).filter((correctAnswerKey) => question.correct_answers[correctAnswerKey] === 'false');
        answers = Object.keys(question.answers).filter((answerKey) => wrongAnswers.includes(`${answerKey}_correct`) || firstCorrectAnswerKey === `${answerKey}_correct`)
          .map(answerKey => question.answers[answerKey]);
        correctAnswer = question.answers[firstCorrectAnswerKey.split('_correct')[0]];
      }
      return {
        ...question,
        answers: shuffle(answers.filter(answer => answer !== null)),
        correctAnswer
      }
    }).filter(question => question.answers.length > 2);
  }
  return [];
}
