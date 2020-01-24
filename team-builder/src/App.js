import React, { useState } from 'react';
import './App.css';
import MemberCard from './Components/Card';
import Form from './Components/Form';

function App() {
  const [member, setMember] = useState([])

  const addNewMember = person => {
    const newMember = {
      id: Date.now(),
      name: person.name,
      email: person.email,
      role: person.role

    };
    setMember([...member, newMember]);
  }

  
  return (
    <div className="Main-container">
      <h1 className="App-header">Build Team</h1>
      <div className="form">
        <Form addNewMember={addNewMember} />
        <MemberCard member={member} />
      </div>

    </div>
  );
}

export default App;
