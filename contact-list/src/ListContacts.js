import React from 'react';


function ListContacts(props) {
  const contacts = props.listcontacts
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
              <button className='contact-remove'>
                Remove
              </button>
            </li>
        ))}
      </ol>
  )
}


export default ListContacts;
