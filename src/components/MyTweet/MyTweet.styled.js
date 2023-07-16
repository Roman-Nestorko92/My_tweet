import styled from "@emotion/styled"

export const GoBackButton = styled.button`
  margin-left: 20px;
  background-color: orange;
  color: whitesmoke;
  border: none;
  border-radius: 4px;
  padding: 4px 12px;
  cursor: pointer;
  &:hover {
    transition: 250ms;
    background-color: orangered;
  }
`

export const Logo = styled.img``

export const LogoWrapper = styled.div`
  margin: 20px 0 0 20px;
`

export const MainImage = styled.img`
  display: block;
  margin: 0 auto 0 auto;
`

export const MainImageWrapper = styled.div`
  margin-bottom: 12px;
`

export const Avatar = styled.img`
  display: block;
  margin: -82px auto 0 auto;
  flex-shrink: 0;
  width: 64px;
  height: 64px;
  background: linear-gradient(
    to right,
    rgba(71, 28, 169, 1),
    rgba(87, 54, 163, 1),
    rgba(75, 42, 153, 1)
  );
  border-radius: 50%;
`

export const Circle = styled.img`
  display: block;
  margin: -44px auto 0 auto;
`

export const Line = styled.div`
  width: 100%;
  height: 8px;
  flex-shrink: 0;
  background: #ebd8ff;
  box-shadow: 0px 3.4369285106658936px 2.5776965618133545px 0px #fbf8ff inset,
    0px 3.4369285106658936px 3.4369285106658936px 0px rgba(0, 0, 0, 0.06),
    0px -1.7184642553329468px 3.4369285106658936px 0px #ae7be3 inset;
`

export const Tweets = styled.p`
  color: #ebd8ff;
  font-family: Montserrat;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-transform: uppercase;
  text-align: center;
  margin-top: 26px;
`

export const Followers = styled.p`
  color: #ebd8ff;
  font-family: Montserrat;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-transform: uppercase;
  text-align: center;
`

export const ButtonFollow = styled.button`
  display: flex;
  padding: 14px 54px;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  margin: 0 auto;
  border-radius: 6px;
  cursor: pointer;
`
