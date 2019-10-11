// Could do this like window.scrollTo(0, refsMap[id].current.offsetTop);

const scrollToElement = node =>
  node.scrollIntoView({ behavior: "smooth", block: "start" });

export default scrollToElement;
