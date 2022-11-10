import React, {useState} from 'react';
import UserForm from "./components/UserForm/UserForm";
import {User} from "./types";
import Users from "./components/Users/Users";

function App() {

  const [users, setUsers] = useState<User[]>([
    {id: '1', name: 'Duulat', role: 'Admin', email: 'duulat.akmatbekov@mail.ru', isActive: true},
    {id: '2', name: 'Guliza', role: 'Admin', email: 'g.omyrbek@mail.ru', isActive: false}
  ]);

  const addUser = (newUser: User) => {
    setUsers(prevState => [...prevState, newUser]);
  };

  return (
    <>
      <main className="container">
        <div className="row mt-2 gap-3">
          <div className="col">
            <UserForm onSubmit={addUser}></UserForm>
          </div>
          <div className="col">
          <Users users={users}/>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
