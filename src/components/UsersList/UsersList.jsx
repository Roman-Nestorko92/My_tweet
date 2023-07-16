import React from 'react';
import { Title, UserItem, Userlist, LinkName } from './UsersList.styled';

const UsersList = ({ tweetUsers }) => {
  return (
    <>
      <Title>Tweets:</Title>
      <Userlist>
        {tweetUsers &&
          tweetUsers.map(({ id, user, tweets, followers, avatar }) => (
            <UserItem key={id}>
              <img src={avatar} alt="avatar" />
              <LinkName
                to={{
                  pathname: `/tweets/${id}`,
                  state: {
                    id,
                    tweets,
                    followers,
                    avatar,
                  },
                }}
              >
                Name: {user}
              </LinkName>
            </UserItem>
          ))}
      </Userlist>
    </>
  );
};

export default UsersList;
