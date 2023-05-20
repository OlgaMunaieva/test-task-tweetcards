import { useDispatch, useSelector } from "react-redux";
import { selectUsersWithFollowerOf } from "../../redux/selectors";
import { useEffect } from "react";
import { fetchUsers } from "../../redux/operations";
import { UserCard } from "../userCard/UserCard";
import { MainContainer } from "./UsersList.styled";

const UserstList = () => {
  const usersWithFollowerOf = useSelector(selectUsersWithFollowerOf);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <MainContainer>
      {usersWithFollowerOf &&
        usersWithFollowerOf.map(
          ({ id, tweets, followers, avatar, isFollow }) => (
            <UserCard
              key={id}
              tweets={tweets}
              followers={followers}
              avatar={avatar}
              id={id}
              isFollow={isFollow}
            />
          )
        )}
    </MainContainer>
  );
};

export default UserstList;

{
  /* <AiOutlineCloseCircle onClick={() => onDelete(id)} />; */
}
