import React from "react";
import { Box } from "grommet";
import Section from "./Section";
import Navigation from "./Navigation";

const UsingIDsExample = ({ sections }) => (
  <Box gap="medium">
    <Navigation sections={sections} />
    <Box gap="large">
      {sections.map(section => (
        <Section key={section.id} section={section} />
      ))}
    </Box>
  </Box>
);

export default UsingIDsExample;
