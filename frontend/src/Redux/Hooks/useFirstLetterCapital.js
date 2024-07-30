export const FirstLetterCapitalConvertor = (word) => {
  if (!word) return;
  const newWord = word.charAt(0).toUpperCase() + word.slice(1);
  return [newWord];
};
