import { useDispatch, useSelector } from "react-redux";
import { selectUsersWithFollowerOf } from "../../redux/selectors";
import { useEffect } from "react";
import { fetchUsers } from "../../redux/operations";
import { UserCard } from "../userCard/UserCard";

const UserstList = () => {
  const usersWithFollowerOf = useSelector(selectUsersWithFollowerOf);
  console.log(usersWithFollowerOf);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  //   const onDelete = (id) => dispatch(deleteContact(id));

  return (
    <ul>
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
    </ul>
  );
};

export default UserstList;

{
  /* <AiOutlineCloseCircle onClick={() => onDelete(id)} />; */
}
