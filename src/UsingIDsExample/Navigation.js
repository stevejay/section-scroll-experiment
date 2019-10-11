import React from "react";
import { Button } from "grommet";
import SectionNavigationBox from "../SectionNavigationBox";
import { createSectionLabel, scrollToElement } from "../utils";

const Navigation = ({ sections }) => (
  <SectionNavigationBox>
    {sections.map(section => (
      <Button
        key={section.id}
        label={`To ${createSectionLabel(section)}`}
        onClick={() => scrollToElement(document.getElementById(section.id))}
      />
    ))}
  </SectionNavigationBox>
);

export default Navigation;
