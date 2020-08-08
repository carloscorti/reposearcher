import React from 'react';

const Repository = ({ data }) => {
  const { full_name, description, language } = data;
  return (
    <>
      <li>
        <ul>
          <li>repo name: {full_name}</li>
          <li>repo description: {description}</li>
          <li>repo language: {language}</li>
        </ul>
      </li>
    </>
  );
};

export default Repository;
