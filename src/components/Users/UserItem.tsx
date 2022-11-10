import React from 'react';
import {User} from "../../types";

interface Props {
  user: User;
}

const UserItem: React.FC<Props> = ({user}) => {

  const userActivity = user.isActive ? 'Yes' : 'No';

  const mailTo = `mailto:${user.email}`;

  return (
    <div className="card mb-2 bg-dark text-center text-white fw-bold">
      <div className="col">
        <div className="card-body">
          <h4 className="card-title">{user.name}</h4>
          <p className="card-text"><a href = {mailTo} className="text-white">{user.email}</a></p>
          <p className="card-text">Active: {userActivity}</p>
          <p className="card-text">{user.role}</p>
        </div>
      </div>
    </div>
  );
};

export default UserItem;