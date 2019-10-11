import React from "react";
import Card from "../Card";
import { createSectionLabel, scrollToElement } from "../utils";

const Section = ({ section, scrollCounter }) => {
  const ref = React.useRef();

  React.useEffect(() => {
    if (scrollCounter > 0) {
      scrollToElement(ref.current);
    }
  }, [scrollCounter]);

  return <Card ref={ref} label={createSectionLabel(section)} />;
};

export default Section;
