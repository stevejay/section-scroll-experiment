import React from "react";
import { Box } from "grommet";
import Section from "./Section";
import Navigation from "./Navigation";

const UsingRefsExample = ({ sections }) => {
  const refsMap = React.useMemo(
    () =>
      sections.reduce((acc, section) => {
        acc[section.id] = React.createRef();
        return acc;
      }, {}),
    [sections]
  );

  const handleNavClick = id => refsMap[id].current.scroll();

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
