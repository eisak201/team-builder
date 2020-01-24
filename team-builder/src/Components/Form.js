
import React, { useState } from "react";

const Form = props => {
  const [member, setMember] = useState({
    id: Date.now(),
    name: "",
    email: "",
    role: ""
  });

  const handleChanges = e => {
    setMember({
      ...member,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    props.addNewMember(member);
    setMember({ name: "", email: "", role: "" });
  };

  return (
    <div className='info'>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Members' Name</label>
        <br />
        <input
          type="text"
          id="name"
          placeholder="First and Last Name"
          name="name"
          value={member.name}
          onChange={handleChanges}
          required
        /><br></br>
        <br />
        <label htmlFor="email">Members' Email</label>
        <br />
        
        <input
          type="email"
          id="email"
          placeholder="Email Address"
          name="email"
          value={member.email}
          onChange={handleChanges}
          required
        /><br></br>
        <br />
        <label htmlFor="role">Members' Role</label>
        <br />
        <select
          name="role"
          id="role"
          value={member.role}
          onChange={handleChanges}
        >
          <option value="Backend Engineer">Backend Engineer</option>
          <option value="Frontend Engineer">Frontend Engineer</option>
          <option value="Fullstack Engineer">Full Stack Engineer</option>
          <option value="UX Designer">UX Designer</option>
          <option value="UI Appentice">UI Apprentice</option>
          <option value="Graphic Designer">Graphic Designer</option>
          
        </select>
        <br /><br></br>
        
        <button type="submit" id="addMember">
          Add Member
        </button>
      </form>
    </div>
  );
};

export default Form
