import React from 'react';

const UserCard = (props) => {
  console.log(props);

  const renderContent = (user) => {
    switch (user) {
      case null:
        return (
          <>
            <aside>
              <img src="/MVST.png" />
              <h3>MVST</h3>
              <p className="grey-text bio">React Task</p>
              {/* <hr className="seperator" /> */}
            </aside>
          </>
        );
      default:
        return (
          <>
            {/* <li>{user.login}</li>
            <li>{user.bio}</li>
            <img src={user.avatar_url} /> */}
            <aside>
              <img src={user.avatar_url} />
              <h3>{user.login}</h3>
              <p className="grey-text bio">{user.bio}</p>
              {/* <hr className="seperator" /> */}
            </aside>
          </>
        );
    }
  };

  return <>{renderContent(props.user)}</>;
};

export default UserCard;
