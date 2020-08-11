import React from 'react';

const UserCard = ({ user }) => {
  const renderContent = (user) => {
    switch (user) {
      case null:
        return (
          <>
            <aside>
              <img src="/MVST.png" />
              <h3>MVST</h3>
              <p className="grey-text bio">React Task</p>
            </aside>
          </>
        );
      default:
        return (
          <>
            <aside>
              <img src={user.avatar_url} />
              <h3>{user.login}</h3>
              <p className="grey-text bio">{user.bio}</p>
            </aside>
          </>
        );
    }
  };

  return <>{renderContent(user)}</>;
};

export default UserCard;
