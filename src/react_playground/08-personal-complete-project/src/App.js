import React from 'react';
import AddUser from './components/Users/AddUsers';
import UsersList from './components/Users/UsersList';

function App() {
  return (
    <div>
      <AddUser />
      <UsersList users={[]}/>
    </div>
  );
}

export default App;
