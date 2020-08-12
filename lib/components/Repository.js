import React from 'react';
import PropTypes from 'prop-types';

/**
 * Repository comoponent: Displays repo card
 *
 * @param  {Object}  props  must have "data" key, and data object must have
 *   name, description, language, updated_at, html_url keys
 */

const Repository = ({ data }) => {
  /**
   * Data Object: contains repo card info to display
   *
   * @key  {string}  name         repo short name
   * @key  {string}  description  repo description
   * @key  {string}  language     repo main programming lenguaje
   * @key  {string}  updated_at   repo last updated date
   * @key  {string}  html_url     repo url
   */
  const { name, description, language, updated_at, html_url } = data;

  const updatedDate = new Date(updated_at);
  const daysSinceUpdate = Math.round(
    (Date.now() - updatedDate) / (1000 * 60 * 60 * 24)
  );

  return (
    <>
      <div className="pinned-repo-wrapper">
        <div className="pinned-repo">
          <h3>{name}</h3>
          <p>{description}</p>
          <ul className="stats">
            <li>
              <span className="icon">🔵</span>
              <span>{language}</span>
            </li>
            <li>
              <span className="icon"></span>
              <span>Updated {daysSinceUpdate} days ago</span>
            </li>
            <li>
              <span className="icon"></span>
              <span>
                <a href={html_url} target="_blank" rel="noopener noreferrer">
                  Go to repo
                </a>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

Repository.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
    language: PropTypes.string,
    updated_at: PropTypes.string,
    html_url: PropTypes.string,
  }).isRequired,
};

export default Repository;
