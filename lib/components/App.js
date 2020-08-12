import React, { useEffect } from 'react';

import { connect } from 'react-redux';
import * as actions from '../actions';

import SearchBar from './SearchBar';
import RepositoryList from './RepositoryList';
import UserCard from './UserCard';
import Header from './Header';

import pickBy from 'lodash.pickby';

/**
 * App comoponent: App'structure, takes store state and action from redux as props
 * and passes necesary data to each children
 */

const App = (props) => {
  useEffect(() => {
    props.fetchRepos();
    props.fetchUser();
  }, []);

  /**
   * Function filter: filters repos by name atribute given a seach word
   *
   * @param  {string} search  seach word to filter by
   * @param  {Array}  repos   repos to filter by name atribute
   * @return {Array}          if filtered repos returns filtered repos, else all repos
   */
  const filter = (search, repos) => {
    if (repos) {
      const searchRE = new RegExp(search, 'i');
      let filteredRepos;
      if (search) {
        filteredRepos = pickBy(repos, (value) => {
          return value.name.match(searchRE);
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
      <main>
        <UserCard user={props.user} />
        <section>
          <SearchBar repos={props.repos} />
          <RepositoryList
            filteredRepos={filter(props.search, props.repos)}
            search={props.search}
            welcome={props.welcome}
            repos={props.repos}
          />
        </section>
      </main>
    </>
  );
};

const mapStatetoProps = ({ repos, welcome, search, user }) => {
  return { repos, welcome, search, user };
};

export default connect(mapStatetoProps, actions)(App);
