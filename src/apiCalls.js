export const fetchPokeData = async () => {
  const url = 'http://localhost:3001/types';
  const response = await fetch(url);
  const result = await response.json();
  return result;
};
