import React from "react"
import {
  InfoUser,
  Label,
  Option,
  Select,
  Title,
  UserList,
  UserListItem,
} from "./Filter.styled"

export const Filter = ({ filter, setFilter, filteredUsers }) => {
  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }

  return (
    <>
      <Title>My tweets:</Title>
      <div>
        <Label htmlFor="filter">Tweets filter:</Label>{" "}
        <Select
          id="filter"
          value={filter}
          onChange={handleFilterChange}
        >
          <Option value="show all">Show All</Option>
          <Option value="follow">Follow</Option>
          <Option value="followings">Followings</Option>
        </Select>
      </div>
      <UserList>
        {filteredUsers?.map(({ id, user, tweets, followers, avatar }) => (
          <UserListItem key={id}>
            <div>
              <InfoUser style={{ fontWeight: 500 }}>{user}</InfoUser>
              <img
                src={avatar}
                alt="avatar"
              />
              <InfoUser>Tweets: {tweets}</InfoUser>
              <InfoUser>Followers: {followers}</InfoUser>
            </div>
          </UserListItem>
        ))}
      </UserList>
    </>
  )
}
