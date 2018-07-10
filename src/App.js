import React, { Component } from 'react';  
import UserList from './components/useList';
import ActiveUser from './components/useDetails';
class App extends Component {
  render() {
    return (
      <div className="App">
         <h1> User Name</h1>
         <UserList/>
         <hr/>
         <h1>User Details</h1>
         <ActiveUser/>
         <hr/>
      </div>
    );
  }
}

export default App;
