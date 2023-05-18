import { useDispatch, useSelector } from "react-redux";
import { selectUsers } from "../../redux/UserSelectors";
import { useEffect } from "react";
import { fetchUsers } from "../../redux/userOperations";
import { UserCard } from "../userCard/UserCard";

const UserstList = () => {
  const users = useSelector(selectUsers);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  //   const onDelete = (id) => dispatch(deleteContact(id));

  return (
    <ul>
      {users && users.map((item) => <UserCard key={item.id} user={item} />)}
    </ul>
  );
};

export default UserstList;

{
  /* <AiOutlineCloseCircle onClick={() => onDelete(id)} />; */
}
