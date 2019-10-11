import React from "react";
import Card from "../Card";
import { createSectionLabel, scrollToElement } from "../utils";

const Section = ({ section, message }) => {
  const ref = React.useRef();

  React.useEffect(() => {
    if (message !== null && message.id === section.id) {
      scrollToElement(ref.current);
    }
  }, [section, message]);

  return <Card ref={ref} label={createSectionLabel(section)} />;
};

export default Section;
