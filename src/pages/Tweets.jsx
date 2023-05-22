import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectIsLoading,
  selectUsers,
  selectModifiedUsers,
} from "../redux/selectors";
import { PER_PAGE, fetchUsers } from "../redux/operations";
import UsersList from "../components/usersList/UsersList";
import { Button } from "../components/button/Button";
import { useLocation, useSearchParams } from "react-router-dom";
import { clearUsers } from "../redux/usersSlice";
import { LinkButton } from "../components/linkButton/LinkButton.styled";

export const Tweets = () => {
  const location = useLocation();
  const backLinkLocation = useRef(location.state?.from ?? `/`);
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = searchParams.get("currentPage") ?? "";
  const modifiedUsers = useSelector(selectModifiedUsers);
  const users = useSelector(selectUsers);
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    if (modifiedUsers.length && !currentPage) {
      dispatch(clearUsers());
      setSearchParams({ currentPage: 1 });
      return;
    }
    if (!currentPage) {
      setSearchParams({ currentPage: 1 });
      return;
    }
    dispatch(fetchUsers(currentPage));
  }, [dispatch, currentPage]);

  const isShowButton = users.length && !isLoading && !(users.length % PER_PAGE);
  const nextPage = () => {
    const page = Number(currentPage) + 1;
    setSearchParams({ currentPage: page });
  };

  return (
    <>
      <LinkButton to={backLinkLocation.current}>Go back</LinkButton>
      <UsersList />
      {isShowButton === true && <Button onClick={nextPage} />}
    </>
  );
};
