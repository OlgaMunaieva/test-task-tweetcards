import { NavLink, Outlet } from "react-router-dom";
import { Header, Main, Nav } from "./Layout.styled";

const Layout = () => {
  return (
    <div>
      <Header>
        <Nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/tweets">Tweets</NavLink>
        </Nav>
      </Header>
      <Main>
        <Outlet />
      </Main>
    </div>
  );
};

export default Layout;
