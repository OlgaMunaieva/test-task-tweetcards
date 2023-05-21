import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectUsersWithFollowerOf } from "../../redux/selectors";
import PropTypes from "prop-types";
import { useEffect } from "react";
import { fetchUsers } from "../../redux/operations";
import { UserCard } from "../userCard/UserCard";
import { MainContainer } from "./UsersList.styled";
// import installHook from "../../redux/installHook";

const UsersList = () => {
  const location = useLocation();
  // console.log(location);
  const usersWithFollowerOf = useSelector(selectUsersWithFollowerOf);
  const dispatch = useDispatch();

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

// UsersList.propTypes = {
//   page: PropTypes.number.isRequired,
// };

export default UsersList;

{
  /* <AiOutlineCloseCircle onClick={() => onDelete(id)} />; */
}
