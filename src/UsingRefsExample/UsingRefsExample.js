import React from "react";
import { Box } from "grommet";
import { scrollToElement, useRefsMap } from "../utils";
import Section from "./Section";
import Navigation from "./Navigation";

const UsingRefsExample = ({ sections }) => {
  const refsMap = useRefsMap(sections);

  const handleNavClick = id => scrollToElement(refsMap[id].current);

  return (
    <Box gap="medium">
      <Navigation sections={sections} onNavClick={handleNavClick} />
      <Box gap="large">
        {sections.map(section => (
          <Section
            key={section.id}
            section={section}
            ref={refsMap[section.id]}
          />
        ))}
      </Box>
    </Box>
  );
};

export default UsingRefsExample;
