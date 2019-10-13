import React from "react";
import { Box } from "grommet";
import Section from "./Section";
import Navigation from "./Navigation";

const UsingStateObjectExample = ({ sections }) => {
  const [scrollState, setScrollState] = React.useState(null);

  React.useEffect(() => setScrollState(null), [sections]);

  const handleNavClick = id => setScrollState({ id });

  return (
    <Box gap="medium">
      <Navigation sections={sections} onNavClick={handleNavClick} />
      <Box gap="large">
        {sections.map(section => (
          <Section
            key={section.id}
            section={section}
            scrollState={scrollState}
          />
        ))}
      </Box>
    </Box>
  );
};

export default UsingStateObjectExample;
