import React from 'react';

/**
 * UserCard comoponent: Displays user card,
 * in case user=null displays MVST logo img and text "React Task"
 *
 * @param  {Object}  props  must have "user" key
 */
const UserCard = ({ user }) => {
  /**
   * Function renderUserContent: depending on user arg, displays user card if any
   * or presentation card is user=null
   *
   * @param  {Object}  user  user to display
   * @return {jsx}           jsx snippet to render in each case
   */
  const renderUserContent = (user) => {
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

  return <>{renderUserContent(user)}</>;
};

export default UserCard;
