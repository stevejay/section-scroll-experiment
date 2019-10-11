import React from "react";
import Card from "../Card";
import { createSectionLabel } from "../utils";

const Section = ({ section }) => (
  <Card id={section.id} label={createSectionLabel(section)} />
);

export default Section;
