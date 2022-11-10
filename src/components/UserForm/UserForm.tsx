import React, {useState} from 'react';
import {User, UserMutation} from "../../types";

interface Props {
  onSubmit: (user: User) => void;
}

const UserForm: React.FC<Props> = ({onSubmit}) => {

  const [user, setUser] = useState<UserMutation>({
    name: '',
    email: '',
    isActive: false,
    role: '',
  });

  const onTextTyping = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const {name, value} = e.target;
    setUser(prev => ({...prev, [name]: value}));
  };

  const onCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, checked} = e.target;
    setUser(prev => ({...prev, [name]: checked}));
  };


  const onFormSubmit =(e:React.FormEvent) => {
    e.preventDefault();
    onSubmit ({
      id:Math.random().toString(),
      ...user,
    })
  };

  return (
    <form onSubmit={onFormSubmit}>
      <h4 className="text-center my-3">Add new user</h4>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="form-control"
          value={user.name}
          onChange={onTextTyping}
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="form-control"
          value={user.email}
          onChange={onTextTyping}
        />
      </div>
      <div className="form-group my-3">
        <label>Active <input
          id="isActive"
          name="isActive"
          type="checkbox"
          checked={user.isActive}
          onChange={onCheck}
        /> </label>
      </div>
      <div className="form-group mb-4">
        <label htmlFor="role" className="me-2">Role </label>
        <select
          name="role"
          required
          value={user.role}
          onChange={onTextTyping}
        >
          <option disabled value=''>Select your role</option>
          <option>User</option>
          <option>Editor</option>
          <option>Admin</option>
        </select>
      </div>
      <button type="submit" className="btn btn-dark">Create</button>
    </form>
  );
};

export default UserForm;