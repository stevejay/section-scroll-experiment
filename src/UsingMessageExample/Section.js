import React from "react";
import Card from "../Card";
import { createSectionLabel, scrollToElement } from "../utils";

const Section = ({ section, scrollMessage }) => {
  const ref = React.useRef();

  React.useEffect(() => {
    if (scrollMessage && scrollMessage.id === section.id) {
      scrollToElement(ref.current);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scrollMessage]);

  return <Card ref={ref} label={createSectionLabel(section)} />;
};

export default Section;
