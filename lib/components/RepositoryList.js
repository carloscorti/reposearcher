import React from 'react';

import { connect } from 'react-redux';
// import * as actions from '../actions';

import Repository from './Repository';

const RepositoryList = (props) => {
  // console.log(props);

  const renderContent = (repos, welcome, filteredRepos) => {
    switch (repos) {
      case null:
        return <li>{welcome}</li>;
      default:
        return (
          <>
            {Object.values(filteredRepos).map((repo) => (
              <Repository key={repo.id} data={repo} />
            ))}
          </>
        );
    }
  };

  return (
    <>
      <p>RepositoryList</p>
      <ul>{renderContent(props.repos, props.welcome, props.filteredRepos)}</ul>
    </>
  );
};

const mapStatetoProps = ({ repos, welcome }) => {
  return { repos, welcome };
};

export default connect(mapStatetoProps)(RepositoryList);
