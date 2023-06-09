import { styled } from "styled-components";

export const CardBackground = styled.li`
  position: relative;
  width: 380px;
  height: 432px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 28px;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
`;

export const LogoContainer = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  width: 76px;
  height: 22px;
`;

export const BackgroundPicture = styled.img`
  width: 308px;
  height: 168px;
  justify-items: center;

  object-fit: cover;
`;
export const Line = styled.div`
  width: 100%;
  height: 8px;
  margin-top: 18px;

  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;
`;

export const FrameContainer = styled.div`
  position: absolute;
  top: 190px;
  left: 150px;
  width: 80px;
  height: 80px;
`;

export const AvatarContainer = styled.div`
  position: absolute;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  left: 12px;
  top: 8px;
`;

export const Avatar = styled.img`
  border-radius: 50%;
`;

export const TextTweets = styled.p`
  margin-top: 62px;
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;
  margin-left: auto;
  margin-right: auto;

  color: #ebd8ff;
`;

export const TextFollowers = styled.p`
  margin-top: 16px;
  margin-bottom: 0;
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;
  margin-left: auto;
  margin-right: auto;

  color: #ebd8ff;
`;

export const Button = styled.button`
  margin-top: 26px;
  justify-content: center;
  align-items: center;
  width: 196px;
  height: 50px;
  text-transform: uppercase;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
`;
