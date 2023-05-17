import picture from "../../images/background-picture.png";
import logo from "../../images/logo.png";
import frame from "../../images/frame.png";
import {
  BackgroundPicture,
  Button,
  CardBackground,
  FrameContainer,
  Line,
  LogoContainer,
  TextFollowers,
  TextTweets,
} from "./Tweetcard.styled";

export const Tweetcard = () => {
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
        <span>777</span> tweets
      </TextTweets>
      <TextFollowers>
        <span>100,500</span> Followers
      </TextFollowers>
      <Button type="button">Follow</Button>
    </CardBackground>
  );
};
