import { TRIVIA_API_KEY } from '../.env.json';

const BASE_URL = `https://quizapi.io/api/v1/questions?limit=20&apiKey=${TRIVIA_API_KEY}`;

export default BASE_URL;
