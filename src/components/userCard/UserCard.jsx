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
import { useState } from "react";

export const UserCard = ({ user: { followers, tweets, user } }) => {
  console.log(user);
  const [isFollow, setIsFollow] = useState(false);
  // const [followersLength, setFollowersLength] = useState(100500);
  // console.log(isFollow);

  const handelOnClick = () => {
    isFollow ? followers - 1 : followers - 1;

    setIsFollow((prev) => !prev);
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
  user: PropTypes.objectOf(
    PropTypes.shape({
      followers: PropTypes.number,
      tweets: PropTypes.number,
      user: PropTypes.string,
    })
  ).isRequired,
};
