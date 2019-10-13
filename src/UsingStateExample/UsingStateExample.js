import React from "react";
import { Box } from "grommet";
import Section from "./Section";
import Navigation from "./Navigation";

const UsingStateExample = ({ sections }) => {
  const [scrollSectionId, setScrollSectionId] = React.useState(null);

  const handleSectionScrolled = React.useCallback(
    () => setScrollSectionId(null),
    []
  );

  return (
    <Box gap="medium">
      <Navigation sections={sections} onNavClick={setScrollSectionId} />
      <Box gap="large">
        {sections.map(section => (
          <Section
            key={section.id}
            section={section}
            scrollSectionId={scrollSectionId}
            onSectionScrolled={handleSectionScrolled}
          />
        ))}
      </Box>
    </Box>
  );
};

export default UsingStateExample;
