import React, { Component } from 'react';

class ListContacts extends Component {


  render() {
    const contacts = this.props.listcontacts
    return(
      <ol className='contact-list'>
        {contacts.map( (people) => (
          <li key={people.id} className='contact-list-item'>
            <div
                className='contact-avatar'
                style={{backgroundImage: `url(${people.avatarURL})`}}>

            </div>
          </li>
        ))}

      </ol>
    )
  }
}


export default ListContacts;