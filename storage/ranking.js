import { storeData, retrieveData, removeData } from './utils';

const RANKING_KEY = 'ranking';
const DEFAULT_RANKING_SIZE = 4;

export const fetchRanking = async () => {
  const ranking = await retrieveData(RANKING_KEY);
  if (ranking) {
    return JSON.parse(ranking);
  }
  return null;
}

export const hasRanking = async () => {
  const ranking = await fetchRanking();
  return ranking !== null;
}

export const clearRanking = async() => {
  await removeData(RANKING_KEY);
}

export const addPersonToRanking = async (name, score) => {
  const record = { name, score };
  const ranking = await fetchRanking();
  if (!ranking) {
    await storeData(RANKING_KEY, JSON.stringify([record]));
  } else {
    ranking.push(record);
    await storeData(RANKING_KEY, JSON.stringify(ranking.sort((recordA, recordB) => recordB.score - recordA.score).splice(0, DEFAULT_RANKING_SIZE)));
  }
}
