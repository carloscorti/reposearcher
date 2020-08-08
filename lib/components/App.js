import React from 'react';

import RepositoryList from './RepositoryList';

const Header = () => <p>Header</p>;
const SearchBar = () => <p>SearchBar</p>;
const UserCard = () => <p>UserCard</p>;

const App = () => {
  return (
    <>
      <Header />
      <SearchBar />
      <UserCard />
      <RepositoryList />
    </>
  );
};

export default App;
