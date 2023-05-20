import reactLogo from "../assets/react.svg";
import logo from "../images/logo.png";

export const Home = () => {
  return (
    <>
      <h1>Welcome</h1>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={logo} className="logo" alt="Vite logo" width={200} />
        </a>
        <a href="https://react.dev" target="_blank">
          <img
            src={reactLogo}
            className="logo react"
            alt="React logo"
            width={76}
            height={22}
          />
        </a>
      </div>
    </>
  );
};
