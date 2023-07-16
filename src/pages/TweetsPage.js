import React, { useEffect, useState } from 'react';
import { Filter } from 'components/Filter/Filter';

export const TweetsPage = () => {
  const [filter, setFilter] = useState('show all');
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

  const filterTweetUsers = users => {
    if (!users) {
      return [];
    }
    if (filter === 'follow') {
      return users.filter(user => user.isFollowing);
    } else if (filter === 'followings') {
      return users.filter(user => user.followersCount > 0);
    } else {
      return users;
    }
  };

  const filteredUsers = filterTweetUsers(tweetUsers);

  return (
    <>
      <Filter
        filter={filter}
        setFilter={setFilter}
        filteredUsers={filteredUsers}
      />
    </>
  );
};
