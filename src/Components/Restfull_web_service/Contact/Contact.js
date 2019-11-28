import React from 'react'
import Navbar from '../../Navbar/Navbar';

const Contact = ({ list1, list2 }) => {
  return (
    <div>
      <Navbar />
      <h1>Contact Lists</h1>
      <div>
        <h2>{list1.url}</h2>
        <h2>{list1.id}</h2>
        <h2>{list1.blog}</h2>
        <h2>{list1.location}</h2>
        <h2>{list1.created_at}</h2>
        <h2>{list1.bio}</h2>
      </div>
      <hr />
      <div>
            <h1>Contact List2</h1>
          </div>

      {list2.map((Contact) => (
        <div>
          <div>
            <h3>{Contact.id}</h3>
            <h3>{Contact.name}</h3>
            <hr/>
          </div>
        </div>
      ))}
    </div>
  )
};

export default Contact;