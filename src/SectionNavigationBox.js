import React from "react";
import { Box } from "grommet";

const SectionNavigationBox = ({ children }) => (
  <Box
    as="nav"
    direction="row-responsive"
    justify="center"
    gap="small"
    margin={{ top: "medium" }}
  >
    {children}
  </Box>
);

export default SectionNavigationBox;
