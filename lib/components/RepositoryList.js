import React, { useEffect } from 'react';

import { connect } from 'react-redux';
import * as actions from '../actions';

import Repository from './Repository';

const RepositoryList = (props) => {
  // console.log(props);

  useEffect(() => {
    props.fetchUser();
    return () => {};
  }, []);

  const renderContent = (user, welcome) => {
    switch (user) {
      case null:
        return <li>{welcome}</li>;
      default:
        return (
          <>
            {props.user.repos.map((repo) => (
              <Repository key={repo.data} data={repo.data} />
            ))}
          </>
        );
    }
  };

  return (
    <>
      <p>RepositoryList</p>
      <ul>{renderContent(props.user, props.welcome)}</ul>
    </>
  );
};

const mapStatetoProps = ({ user, welcome }) => {
  return { user, welcome };
};

export default connect(mapStatetoProps, actions)(RepositoryList);
