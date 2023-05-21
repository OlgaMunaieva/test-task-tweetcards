import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectIsLoading,
  selectUsers,
  selectUsersWithFollowerOf,
} from "../redux/selectors";
import { PER_PAGE, fetchUsers } from "../redux/operations";
import UsersList from "../components/usersList/UsersList";
import { Button } from "../components/button/Button";
import { useLocation, useParams, useSearchParams } from "react-router-dom";
import { clearUsers } from "../redux/usersSlice";
import { LinkButton } from "../components/linkButton/LinkButton.styled";

export const Tweets = () => {
  const location = useLocation();
  console.log(location);
  const backLinkLocation = useRef(location.state?.from ?? `/`);
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = searchParams.get("currentPage") ?? "";
  //   const location = useLocation();
  //   const { page } = useParams();
  //   console.log(location.search);

  //   const [page, setPage] = useState(1);
  const usersWithFollowerOf = useSelector(selectUsersWithFollowerOf);
  const users = useSelector(selectUsers);
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();
  console.log(currentPage);
  console.log(users);

  useEffect(() => {
    if (usersWithFollowerOf.length && !currentPage) {
      dispatch(clearUsers());
      setSearchParams({ currentPage: 1 });
      return;
    }
    if (!currentPage) {
      //   setSearchParams({ currentPage: page });
      setSearchParams({ currentPage: 1 });
      //   dispatch(fetchUsers(currentPage));
      return;
    }
    dispatch(fetchUsers(currentPage));
  }, [dispatch, currentPage]);

  //   useEffect(() => {
  //     if (page === 1) return;
  //     dispatch(fetchUsers(page));
  //   }, [page]);

  //   useEffect(() => {
  //     dispatch(fetchUsers(page));
  //   }, [page]);

  //   console.log(page);
  console.log(users);
  console.log(isLoading);

  const isShowButton = users.length && !isLoading && !(users.length % PER_PAGE);
  // users.length && !isLoading && !(users.length % PER_PAGE);
  const nextPage = () => {
    console.log(currentPage);
    //   setPage((prevPage) => prevPage + 1);
    const page = Number(currentPage) + 1;
    console.log(page);
    setSearchParams({ currentPage: page });
    // dispatch(fetchUsers(currentPage));
    // window.location.href = `/tweets?${searchParams.toString()}`;
  };

  return (
    <>
      <LinkButton to={backLinkLocation.current}>Go back</LinkButton>
      <UsersList />
      {isShowButton === true && <Button onClick={nextPage} />}
    </>
  );
};
