import React, { useEffect, useState } from 'react';
import { Home } from 'components/Home/Home';
import UsersList from 'components/UsersList/UsersList';

export const HomePage = () => {
  const [tweetUsers, setTweetUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://64b06ec3c60b8f941af5b4c3.mockapi.io/api/r1/users'
        );
        const data = await response.json();
        setTweetUsers(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <Home />

      {tweetUsers && <UsersList tweetUsers={tweetUsers} />}
    </>
  );
};
