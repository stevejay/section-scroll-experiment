import styled from "styled-components/macro";

const Nav = styled.nav`
  display: flex;
  justify-content: center;

  & > * + * {
    margin-left: 1rem;
  }
`;

export default Nav;
