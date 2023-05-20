import picture from "../../images/background-picture.png";
import logo from "../../images/logo.png";
import frame from "../../images/frame.png";
import PropTypes from "prop-types";
import {
  Avatar,
  AvatarContainer,
  BackgroundPicture,
  Button,
  CardBackground,
  FrameContainer,
  Line,
  LogoContainer,
  TextFollowers,
  TextTweets,
} from "./UserCard.styled";
import { selectFollowerOf, selectUsers } from "../../redux/selectors";
import { useDispatch, useSelector } from "react-redux";
import { addFollowId, excludeFollowId } from "../../redux/followerOfSlice";
import { updateUser } from "../../redux/operations";
import { decreaseFollowers, increaseFollowers } from "../../redux/usersSlice";

export const UserCard = ({ tweets, followers, avatar, id, isFollow }) => {
  const followerOf = useSelector(selectFollowerOf);
  const users = useSelector(selectUsers);
  const dispatch = useDispatch();

  const handelOnClick = () => {
    followerOf.includes(id)
      ? dispatch(excludeFollowId(id))
      : dispatch(addFollowId(id));
    isFollow
      ? dispatch(decreaseFollowers(id))
      : dispatch(increaseFollowers(id));
    // fetch(`https://64540bc3e9ac46cedf3665cc.mockapi.io/users/${id}`, {
    //   method: "PUT", // or PATCH
    //   headers: { "content-type": "application/json" },
    //   body: JSON.stringify({ followers: users[id].followers + 1 }),
    // })
    //   .then((res) => {
    //     console.log(res);
    //     if (res.ok) {
    //       return res.json();
    //     }
    //     throw new Error("Error");
    //   })
    //   .catch((e) => {
    //     alert(e);
    //   });
  };

  const formatNumber = (number) => {
    return number.toLocaleString("en-US");
  };

  return (
    <CardBackground>
      <LogoContainer>
        <img src={logo} alt="logo" width={76} height={22} />
      </LogoContainer>
      <BackgroundPicture src={picture} alt="picture" width={308} height={168} />
      <Line></Line>
      <FrameContainer>
        <AvatarContainer>
          <Avatar src={avatar} alt="frame" width={56} height={56} />
        </AvatarContainer>
        <img src={frame} alt="frame" width={80} height={80} />
      </FrameContainer>
      <TextTweets>
        <span>{formatNumber(tweets)}</span> tweets
      </TextTweets>
      <TextFollowers>
        <span>{formatNumber(followers)}</span> Followers
      </TextFollowers>
      <Button
        style={{ background: isFollow ? "#5CD3A8" : "#ebd8ff" }}
        onClick={handelOnClick}
      >
        {isFollow ? "Following" : "Follow"}
      </Button>
    </CardBackground>
  );
};

UserCard.propTypes = {
  followers: PropTypes.number.isRequired,
  tweets: PropTypes.number.isRequired,
  avatar: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  isFollow: PropTypes.bool.isRequired,
};
