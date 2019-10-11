import React from "react";
import Card from "../Card";
import { createSectionLabel } from "../utils";

const Section = React.forwardRef(({ section }, ref) => (
  <Card ref={ref} label={createSectionLabel(section)} />
));

export default Section;
