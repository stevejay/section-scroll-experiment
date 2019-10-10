import React from "react";
import { Button } from "./Button";

const NavBar = ({ sections }) => (
  <nav>
    {sections.map(section => (
      <Button
        key={section.id}
        onClick={() => {
          document
            .getElementById(section.id)
            .scrollIntoView({ behavior: "smooth" });
        }}
      >
        Section {section.id.toUpperCase()}
      </Button>
    ))}
  </nav>
);

export { NavBar };