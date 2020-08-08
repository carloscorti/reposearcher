import React, { useEffect } from 'react';

import { connect } from 'react-redux';
import * as actions from '../actions';

import Repository from './Repository';

const RepositoryList = (props) => {
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
            {user.data.map((repo) => (
              <Repository key={repo.id} data={repo} />
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
