import React from "react";
import { Button } from "./Button";

const NavBar = ({ sections, onButtonClick }) => (
  <nav>
    {sections.map(section => (
      <Button key={section.id} onClick={() => onButtonClick(section.id)}>
        Section {section.id.toUpperCase()}
      </Button>
    ))}
  </nav>
);

export { NavBar };
