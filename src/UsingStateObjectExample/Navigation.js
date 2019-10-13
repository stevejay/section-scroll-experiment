import React from "react";
import { Button } from "grommet";
import SectionNavigationBox from "../SectionNavigationBox";
import { createSectionLabel } from "../utils";

const Navigation = ({ sections, onNavClick }) => (
  <SectionNavigationBox>
    {sections.map(section => (
      <Button
        key={section.id}
        label={`To ${createSectionLabel(section)}`}
        onClick={() => onNavClick(section.id)}
      />
    ))}
  </SectionNavigationBox>
);

export default Navigation;
