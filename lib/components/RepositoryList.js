import React from 'react';

import Repository from './Repository';

/**
 * RepositoryList component: renders repos cards, in case repos=null displays welcome message
 */

const RepositoryList = (props) => {
  /**
   * Function renderContent: depending on repos arg, displays repos card if any
   * or welcome message is repos=null
   *
   * @param  {Array}  repos    repos to display
   * @param  {string} welcome  message to display if repos=null
   * @return {jsx}             jsx snippet to render in each case
   */
  const renderContent = (repos, welcome, filteredRepos) => {
    switch (repos) {
      case null:
        return (
          <>
            <section className="repositories">
              <div className="pinned-repo-wrapper">
                <div className="pinned-repo">
                  <h3>{welcome}</h3>
                </div>
              </div>
            </section>
          </>
        );
      default:
        return (
          <>
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

export default RepositoryList;
