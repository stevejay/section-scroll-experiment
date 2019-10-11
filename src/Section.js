import React from "react";
import styled from "styled-components/macro";
import SectionHeading from "./SectionHeading";
import createSectionLabel from "./create-section-label";

const StyledSection = styled.section`
  background-color: papayawhip;
  min-height: 80vh;
`;

const Section = React.forwardRef(({ section }, ref) => (
  <StyledSection ref={ref}>
    <SectionHeading>{createSectionLabel(section.id)}</SectionHeading>
  </StyledSection>
));

export default Section;
