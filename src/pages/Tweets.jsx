import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectIsLoading, selectUsersWithFollowerOf } from "../redux/selectors";
import { PER_PAGE, fetchUsers } from "../redux/operations";
import UsersList from "../components/usersList/UsersList";
import { Button } from "../components/button/Button";

export const Tweets = () => {
  const [page, setPage] = useState(1);
  const users = useSelector(selectUsersWithFollowerOf);
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();
  console.log(users.length);

  useEffect(() => {
    if (users.length) {
      return;
    }
    dispatch(fetchUsers(page));
  }, [dispatch, page, users]);

  console.log(page);
  console.log(users);
  console.log(isLoading);

  const isShowButton = users.length && !isLoading && !(users.length % PER_PAGE);
  // users.length && !isLoading && !(users.length % PER_PAGE);
  const nextPage = () => {
    setPage((prevPage) => prevPage + 1);
    dispatch(fetchUsers(page + 1));
  };

  return (
    <>
      <UsersList />
      {isShowButton === true && <Button onClick={nextPage} />}
    </>
  );
};
