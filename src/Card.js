import React from "react";
import { Box, Heading } from "grommet";

const Card = React.forwardRef(({ label, id }, ref) => (
  <Box
    ref={ref}
    as="section"
    background="neutral-2"
    elevation="large"
    fill="horizontal"
    height="medium"
    pad="medium"
    round="medium"
    id={id}
  >
    <Heading level={2} margin="none" size="small">
      {label}
    </Heading>
  </Box>
));

export default Card;
