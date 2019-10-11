import React from "react";
import Card from "../Card";
import { createSectionLabel, scrollToElement } from "../utils";

const Section = ({ section, scrollMessage }) => {
  const ref = React.useRef();

  React.useEffect(() => {
    if (scrollMessage !== null && scrollMessage.id === section.id) {
      scrollToElement(ref.current);
    }
  }, [scrollMessage]); // eslint-disable-line react-hooks/exhaustive-deps

  return <Card ref={ref} label={createSectionLabel(section)} />;
};

export default Section;
