import React, {useState} from 'react';
import AddUser from './components/Users/AddUsers';
import UsersList from './components/Users/UsersList';

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserToListHandler = (uName, uAge) => {
    setUsersList((prevUsersList) => {
      return [...prevUsersList,
              {id: Math.random().toString(), name: uName, age: uAge}];
    })
  };

  return (
    <div>
      <AddUser onAddUser={addUserToListHandler}/>
      <UsersList users={usersList}/>
    </div>
  );
}

export default App;
