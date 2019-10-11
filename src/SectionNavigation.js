import React from "react";
import Button from "./Button";
import Nav from "./Nav";
import createSectionLabel from "./create-section-label";

const SectionNavigation = ({ sections, onButtonClick }) => (
  <Nav>
    {sections.map(section => (
      <Button key={section.id} onClick={() => onButtonClick(section.id)}>
        {createSectionLabel(section.id)}
      </Button>
    ))}
  </Nav>
);

export default SectionNavigation;
