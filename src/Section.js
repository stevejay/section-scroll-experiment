import React from "react";
import styled from "styled-components/macro";
import { SectionHeading } from "./SectionHeading";

const StyledSection = styled.section`
  background-color: papayawhip;
  height: 30rem;
  margin: 2rem;
`;

const Section = React.forwardRef(({ section }, ref) => (
  <StyledSection ref={ref}>
    <SectionHeading>Section {section.id.toUpperCase()}</SectionHeading>
  </StyledSection>
));

export { Section };
