import React from "react";
import Card from "../Card";
import { createSectionLabel, scrollToElement } from "../utils";

const Section = React.forwardRef(({ section }, ref) => {
  const cardRef = React.useRef();

  React.useImperativeHandle(ref, () => ({
    scrollToElement: () => {
      scrollToElement(cardRef.current);
    }
  }));

  return <Card ref={cardRef} label={createSectionLabel(section)} />;
});

export default Section;
