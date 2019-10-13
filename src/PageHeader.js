import React from "react";
import { Box, Button, Heading } from "grommet";
import * as Icons from "grommet-icons";

const PageHeader = ({ onChangeSections }) => (
  <Box
    as="header"
    pad="medium"
    elevation="medium"
    direction="row-responsive"
    justify="between"
  >
    <Heading color="dark-1" size="small" margin="small">
      Imperative Updates in React
    </Heading>
    <Button
      icon={<Icons.Refresh />}
      label="Change Sections"
      onClick={onChangeSections}
    />
  </Box>
);

export default PageHeader;
