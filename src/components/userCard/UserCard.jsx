import picture from "../../images/background-picture.png";
import logo from "../../images/logo.png";
import frame from "../../images/frame.png";
import PropTypes from "prop-types";
import {
  BackgroundPicture,
  Button,
  CardBackground,
  FrameContainer,
  Line,
  LogoContainer,
  TextFollowers,
  TextTweets,
} from "./UserCard.styled";
import { selectFollowerOf } from "../../redux/selectors";
import { useDispatch, useSelector } from "react-redux";
import { addFollowId } from "../../redux/followerOfSlice";

export const UserCard = ({ tweets, followers, avatar, id, isFollow }) => {
  const followerOf = useSelector(selectFollowerOf);
  console.log(followerOf);
  console.log(isFollow);
  const dispatch = useDispatch();
  console.log(id);
  // const [isFollow, setIsFollow] = useState(false);
  // const [followersLength, setFollowersLength] = useState(100500);
  // console.log(isFollow);

  const handelOnClick = () => {
    dispatch(addFollowId(id));
    // isFollow ? followers - 1 : followers - 1;

    // setIsFollow((prev) => !prev);
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
        <img src={avatar} alt="frame" width={80} height={80} />
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
