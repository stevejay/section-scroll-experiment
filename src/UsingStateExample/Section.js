import React from "react";
import Card from "../Card";
import { createSectionLabel, scrollToElement } from "../utils";

const Section = ({ section, scrollSectionId, onSectionScrolled }) => {
  const ref = React.useRef();

  React.useEffect(() => {
    if (scrollSectionId && scrollSectionId === section.id) {
      scrollToElement(ref.current);
      onSectionScrolled();
    }
  }, [section.id, scrollSectionId, onSectionScrolled]);

  return <Card ref={ref} label={createSectionLabel(section)} />;
};

export default Section;
