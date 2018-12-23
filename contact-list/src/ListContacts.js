import React, { Component } from 'react';

class ListContacts extends Component {


  render() {
    const contacts = this.props.listcontacts
    return(
      <ol className='contact-list'>
        {contacts.map( (people) => (
          <li key={people.id}>{people.name}</li>
        ))}

      </ol>
    )
  }
}


export default ListContacts;
