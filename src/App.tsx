import React, {useState} from 'react';
import UserForm from "./components/UserForm/UserForm";
import {User} from "./types";

function App() {

  const [users, setUsers] = useState<User[]>([
    {id: '1', name: 'Duulat', role: 'Admin', email: 'duulat.akmatbekov@mail.ru', isActive: true},
    {id: '2', name: 'Guliza', role: 'Admin', email: 'g.omyrbek@mail.ru', isActive: true}
  ]);

  const addUser = (newUser: User) => {
    setUsers(prevState => [...prevState, newUser]);
  };


  return (
    <>
      <main className="container-fluid">
        <div className="row mt-2">
          <div className="col">
            <UserForm onSubmit={addUser}></UserForm>
          </div>
          <div className="col">

          </div>
        </div>
      </main>
    </>
  );
}

export default App;
