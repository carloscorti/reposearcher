import React from 'react';

const Repository = ({ data }) => {
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

export default Repository;
