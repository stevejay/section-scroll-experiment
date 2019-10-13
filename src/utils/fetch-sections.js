let counter = 0;

const fetchSections = () => {
  const startIndex = counter % 2 === 0 ? 1 : 3;
  counter++;
  return [0, 1, 2, 3].map(index => ({ id: `${startIndex + index}` }));
};

export default fetchSections;
