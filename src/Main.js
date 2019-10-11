import styled from "styled-components/macro";

const Main = styled.main`
  padding: 1rem;

  & > * + * {
    margin-top: 1rem;
  }
`;

export default Main;
