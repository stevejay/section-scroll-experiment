import React from "react";
import { Box } from "grommet";
import Section from "./Section";
import Navigation from "./Navigation";

const UsingMessageExample = ({ sections }) => {
  const [message, setMessage] = React.useState(null);

  const handleNavClick = id => setMessage({ id });

  return (
    <Box gap="medium">
      <Navigation sections={sections} onNavClick={handleNavClick} />
      <Box gap="large">
        {sections.map(section => (
          <Section key={section.id} section={section} scrollMessage={message} />
        ))}
      </Box>
    </Box>
  );
};

export default UsingMessageExample;
