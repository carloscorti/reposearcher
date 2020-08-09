import React, { useState, useEffect } from 'react';

import { connect } from 'react-redux';
import * as actions from '../actions';

import SearchBar from './SearchBar';
import RepositoryList from './RepositoryList';

import pickBy from 'lodash.pickby';

const Header = () => <p>Header</p>;
const UserCard = () => <p>UserCard</p>;

const App = (props) => {
  // const [repos, setRepos] = useState({});
  // const [search, setSearch] = useState('');

  // console.log(search);

  // console.log(user);

  console.log(props);

  useEffect(() => {
    props.fetchRepos();
    // setSearch(props.search);
    // setUser(props.user);
    console.log('remount');
    return () => {};
    // }, [props.search]);
  }, []);

  // const filter = (search, user) => {
  //   if (user) {
  const filter = (search, repos) => {
    if (repos) {
      const searchRE = new RegExp(search, 'i');
      // const repos = user.data;
      let filteredRepos;
      if (search) {
        filteredRepos = pickBy(repos, (value) => {
          return (
            // value.full_name.match(searchRE) || value.description.match(searchRE)
            value.full_name.match(searchRE)
          );
        });
      } else {
        filteredRepos = repos;
      }
      return filteredRepos;
    }
  };

  return (
    <>
      <Header />
      <SearchBar />
      <UserCard />
      <RepositoryList filteredRepos={filter(props.search, props.repos)} />
    </>
  );
};

const mapStatetoProps = ({ repos, welcome, search }) => {
  return { repos, welcome, search };
};

export default connect(mapStatetoProps, actions)(App);
