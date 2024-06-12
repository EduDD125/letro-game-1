const words = ['APPLE', 'BERRY', 'CHERRY', 'DATES', 'ELDER'];


export const getRandomWord = (): string => {
  return words[Math.floor(Math.random() * words.length)];
};

export const isValidWord = (word: string): boolean => {
  return words.includes(word.toUpperCase());
};