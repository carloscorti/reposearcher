import React from 'react';

// import { connect } from 'react-redux';
// import * as actions from '../actions';

import Repository from './Repository';

const RepositoryList = (props) => {
  // console.log(props);

  const renderContent = (repos, welcome, filteredRepos) => {
    switch (repos) {
      case null:
        return (
          <>
            {/* <nav>
              <ul className="repo-nav">
                <li>Repositories</li>
              </ul>
            </nav> */}
            <section className="repositories">
              <div className="pinned-repo-wrapper">
                <div className="pinned-repo">
                  <h3>{welcome}</h3>
                  {/* <p>{description}</p>
                  <ul className="stats">
                    <li>
                      <span className="icon">🔵</span>
                      <span>{language}</span>
                    </li>
                  </ul> */}
                </div>
              </div>
            </section>
          </>
        );
      default:
        return (
          <>
            {/* <nav>
              <ul className="repo-nav">
                <li>Repositories {filteredRepos.length}</li>
              </ul>
            </nav> */}
            <section className="repositories">
              {repos.length !== Object.values(filteredRepos).length && (
                <div className="pinned-repo-wrapper match">
                  <div className="pinned-repo">
                    <p>
                      <b>{Object.values(filteredRepos).length}</b> repositories
                      matching <b>{props.search}</b>
                    </p>
                  </div>
                </div>
              )}
              {Object.values(filteredRepos).map((repo) => (
                <Repository key={repo.id} data={repo} />
              ))}
            </section>
          </>
        );
    }
  };

  return <>{renderContent(props.repos, props.welcome, props.filteredRepos)}</>;
};

// const mapStatetoProps = ({ repos, welcome }) => {
//   return { repos, welcome };
// };

// export default connect(mapStatetoProps)(RepositoryList);

export default RepositoryList;
