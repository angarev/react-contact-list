import React from 'react';
import PropTypes from 'prop-types';


function ListContacts(props) {
  const contacts = props.listcontacts;
  return(
      <ol className='contact-list'>
        {contacts.map( (people) => (
            <li key={people.id} className='contact-list-item'>
              <div
                  className='contact-avatar'
                  style={{backgroundImage: `url(${people.avatarURL})`}}>
              </div>
              <div className='contact-details'>
                <p>{people.name}</p>
                <p>{people.handle}</p>
              </div>
              <button
                  onClick={() => props.onDeleteContact(people)}
                  className='contact-remove'>
                Remove
              </button>
            </li>
        ))}
      </ol>
  )
}

ListContacts.propTypes = {
    listcontacts: PropTypes.array.isRequired,
    onDeleteContact: PropTypes.func.isRequired
}

export default ListContacts;
