let counter = 0;


const fetchSections = () => {
    counter++;
    if (counter % 2 === 0) {
        return [0, 1, 2, 3].map(addition => ({ id: `${3 + addition}` }));
    } else {
        return [0, 1, 2, 3].map(addition => ({ id: `${1 + addition}` }));
    }
};

export default fetchSections;



// const fetchSections = () => {
//     const firstIndex = Math.floor(Math.random() * 10 + 1);
//     return [0, 1, 2, 3].map(addition => ({ id: `${firstIndex + addition}` }));
//   };
  
//   export default fetchSections;
  