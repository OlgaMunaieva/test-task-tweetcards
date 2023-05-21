import styled from "styled-components";

export const Header = styled.header`
  /* position: fixed; */
  /* z-index: 99; */
  padding: 20px;
  font-size: 38px;
  box-shadow: rgb(0 0 0 / 20%) 0px 9px 9px -6px,
    rgb(0 0 0 / 14%) 0px 9px 12px 0px, rgb(0 0 0 / 12%) 0px 3px 24px 0px;
`;

export const Main = styled.main`
  /* margin-top: 60px; */
  padding: 20px;
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  /* gap: 100px; */
  & a {
    padding-left: 10px;
    padding-right: 10px;
    text-decoration-line: none;
  }
  & .active {
    color: red;
  }
`;
