import { useSelector } from "react-redux";
import { selectModifiedUsers } from "../../redux/selectors";
import { UserCard } from "../userCard/UserCard";
import { MainContainer } from "./UsersList.styled";

const UsersList = () => {
  const modifiedUsers = useSelector(selectModifiedUsers);

  return (
    <MainContainer>
      {modifiedUsers &&
        modifiedUsers.map(({ id, tweets, followers, avatar, isFollow }) => (
          <UserCard
            key={id}
            tweets={tweets}
            followers={followers}
            avatar={avatar}
            id={id}
            isFollow={isFollow}
          />
        ))}
    </MainContainer>
  );
};

export default UsersList;
