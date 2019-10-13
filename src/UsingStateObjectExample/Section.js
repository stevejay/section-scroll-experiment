import React from "react";
import Card from "../Card";
import { createSectionLabel, scrollToElement } from "../utils";

const Section = ({ section, scrollState }) => {
  const ref = React.useRef();

  React.useEffect(() => {
    if (scrollState && scrollState.id === section.id) {
      scrollToElement(ref.current);
    }
  }, [section.id, scrollState]);

  return <Card ref={ref} label={createSectionLabel(section)} />;
};

export default Section;
