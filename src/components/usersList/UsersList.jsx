import { useSelector } from "react-redux";
import { selectUsersWithFollowerOf } from "../../redux/selectors";
import { UserCard } from "../userCard/UserCard";
import { MainContainer } from "./UsersList.styled";

const UsersList = () => {
  const usersWithFollowerOf = useSelector(selectUsersWithFollowerOf);

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

export default UsersList;
