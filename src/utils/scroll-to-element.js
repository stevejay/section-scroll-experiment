const scrollToElement = node =>
  node.scrollIntoView({ behavior: "smooth", block: "start" });

export default scrollToElement;
