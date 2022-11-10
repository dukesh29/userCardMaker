import React from 'react';
import {User} from "../../types";

interface Props {
  user:User;
}

const UserItem:React.FC<Props> = ({user}) => {

  const userActivity = user.isActive ? 'Yes': 'No';

  return (
    <div className="card mb-2">
      <div className="row no-gutters">
        <div className="col-sm-8">
          <div className="card-body">
            <h5 className="card-title">{user.name}</h5>
            <p className="card-text small">{user.email}</p>
            <p className="card-text small">Active: {userActivity}</p>
            <p className="card-text">{user.role} KGS</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserItem;