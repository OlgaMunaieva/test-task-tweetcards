import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import UsersList from "./components/usersList/UsersList";
import logo from "./images/logo.png";
import { useDispatch, useSelector } from "react-redux";
import { selectIsLoading, selectUsersWithFollowerOf } from "./redux/selectors";
import { PER_PAGE } from "./redux/operations";
import Button from "./components/button/Button";

function App() {
  const [page, setPage] = useState(1);
  const users = useSelector(selectUsersWithFollowerOf);
  const isLoading = useSelector(selectIsLoading);

  console.log(page);
  console.log(users);
  console.log(isLoading);

  const isShowButton = users.length && !isLoading && !(users.length % PER_PAGE);
  // users.length && !isLoading && !(users.length % PER_PAGE);
  const nextPage = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <>
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
      <UsersList page={page} />
      {isShowButton === true && <Button onClick={nextPage} />}
    </>
  );
}

export default App;
