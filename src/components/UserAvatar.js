import React from 'react';
import PropTypes from 'prop-types';
import './userAvatar.css';

function UserAvatar(props) {
  const { avatar, userId, forGameCell } = props;

  return (
    <div className={`user-icon-${userId} ${forGameCell ? 'icon-for-cell' : ''}`}>
      <img className={forGameCell ? 'image-for-cell': ''} src={avatar} alt={`user-avatar-${userId}`}/>
    </div>
  );
}

UserAvatar.propTypes = {
  avatar: PropTypes.any.isRequired,
  userId: PropTypes.number.isRequired
};

export default UserAvatar;
