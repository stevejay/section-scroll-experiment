const fetchSections = () => {
  const firstIndex = Math.floor(Math.random() * 10 + 1);
  return [0, 1, 2, 3].map(addition => ({ id: `${firstIndex + addition}` }));
};

export default fetchSections;
