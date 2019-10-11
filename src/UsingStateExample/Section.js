import React from "react";
import Card from "../Card";
import { createSectionLabel, scrollToElement } from "../utils";

const Section = ({ section, scrollSectionId, onSectionScrolled }) => {
  const ref = React.useRef();

  React.useEffect(() => {
    if (scrollSectionId !== null && scrollSectionId === section.id) {
      scrollToElement(ref.current);
      onSectionScrolled();
    }
  }, [section, scrollSectionId, onSectionScrolled]);

  return <Card ref={ref} label={createSectionLabel(section)} />;
};

export default Section;
