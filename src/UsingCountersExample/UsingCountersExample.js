import React from "react";
import { Box } from "grommet";
import Section from "./Section";
import Navigation from "./Navigation";

const createCountersMap = sections =>
  sections.reduce((acc, section) => {
    acc[section.id] = 0;
    return acc;
  }, {});

const UsingCountersExample = ({ sections }) => {
  const [countersMap, setCountersMap] = React.useState(() =>
    createCountersMap(sections)
  );

  React.useEffect(() => {
    setCountersMap(createCountersMap(sections));
  }, [sections]);

  const handleNavClick = id =>
    setCountersMap(countersMap => ({
      ...countersMap,
      [id]: countersMap[id] + 1
    }));

  return (
    <Box gap="medium">
      <Navigation sections={sections} onNavClick={handleNavClick} />
      <Box gap="large">
        {sections.map(section => (
          <Section
            key={section.id}
            section={section}
            scrollCounter={countersMap[section.id]}
          />
        ))}
      </Box>
    </Box>
  );
};

export default UsingCountersExample;
