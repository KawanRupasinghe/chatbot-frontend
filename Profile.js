import React from 'react';
import './Profile.css';

const Profile = ({ user, onClose }) => {
  return (
    <div className="profile-modal">
      <div className="profile-header">
        <h3>Profile</h3>
        <button className="close-button" onClick={onClose}>X</button>
      </div>
      <div className="profile-info">
        <img src={user.avatar} alt="Profile" className="profile-avatar" />
        <div className="profile-details">
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
