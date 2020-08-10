import React from 'react';

const UserCard = (props) => {
  console.log(props);

  const renderContent = (user) => {
    switch (user) {
      case null:
        return <img src="/MVST.png" />;
      default:
        return (
          <>
            <li>{user.login}</li>
            <li>{user.bio}</li>
            <img src={user.avatar_url} />
          </>
        );
    }
  };

  return (
    <>
      <p>UserCard</p>
      <ul>{renderContent(props.user)}</ul>
    </>
  );
};

export default UserCard;
