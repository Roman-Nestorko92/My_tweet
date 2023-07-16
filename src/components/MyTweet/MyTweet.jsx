import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import TestContainer from '../Container/Container';
import logo from '../../images/test_Logo.png';
import mainImage from '../../images/test_img.png';
import avatar from '../../images/test_boy.png';
import circle from '../../images/test_circle.png';
import {
  Avatar,
  ButtonFollow,
  Circle,
  Followers,
  GoBackButton,
  Line,
  Logo,
  LogoWrapper,
  MainImage,
  MainImageWrapper,
  Tweets,
} from './MyTweet.styled';

const MyTweet = () => {
  const location = useLocation();
  const userId = location.state?.id;

  const [isFollowing, setIsFollowing] = useState(() => {
    const isFollowingData =
      JSON.parse(localStorage.getItem('isFollowing')) || {};
    return isFollowingData[userId] || false;
  });

  const [followersCount, setFollowersCount] = useState(() => {
    const followers = JSON.parse(localStorage.getItem('followers')) || {};
    return followers[userId] || 0;
  });

  useEffect(() => {
    const isFollowingData =
      JSON.parse(localStorage.getItem('isFollowing')) || {};
    localStorage.setItem(
      'isFollowing',
      JSON.stringify({ ...isFollowingData, [userId]: isFollowing })
    );
  }, [isFollowing, userId]);

  useEffect(() => {
    const followers = JSON.parse(localStorage.getItem('followers')) || {};
    localStorage.setItem(
      'followers',
      JSON.stringify({ ...followers, [userId]: followersCount })
    );
  }, [followersCount, userId]);

  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  const formatNumber = number => {
    return number.toLocaleString('de-DE');
  };

  const handleClick = () => {
    setIsFollowing(prevState => {
      const newIsFollowing = !prevState;
      const newFollowersCount = newIsFollowing
        ? followersCount + 1
        : followersCount - 1;
      setFollowersCount(newFollowersCount);
      return newIsFollowing;
    });
  };

  return (
    <>
      <GoBackButton type="button" onClick={handleGoBack}>
        go back
      </GoBackButton>
      <TestContainer>
        <LogoWrapper>
          <Logo src={logo} alt="logo" />
        </LogoWrapper>
        <MainImageWrapper>
          <MainImage src={mainImage} alt="mainImage" />
        </MainImageWrapper>
        <Line></Line>
        <Circle src={circle} alt="circle" />
        <Avatar src={avatar} alt="avatar" />
        <Tweets>777 tweets</Tweets>
        <Followers>{formatNumber(followersCount)} followers</Followers>
        <ButtonFollow
          type="button"
          onClick={handleClick}
          style={{ background: isFollowing ? '#5CD3A8' : '#EBD8FF' }}
        >
          {isFollowing ? 'Following' : 'Follow'}
        </ButtonFollow>
      </TestContainer>
    </>
  );
};

export default MyTweet;
