import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ListContacts extends Component {

    static propTypes = {
        listcontacts: PropTypes.array.isRequired,
        onDeleteContact: PropTypes.func.isRequired
    }

    state = {
        query: ''
    }

    updateQuery = (query) => {
        this.setState(() => ({
            query: query.trim()
        }))
    }

    render() {
        const contacts = this.props.listcontacts;
        const deleteContact = this.props.onDeleteContact;

        return(
            <div className='list-contacts'>
                {JSON.stringify(this.state)}
                <div className='list-contacts-top'>
                    <input
                        className='search-contacts'
                        type='text'
                        placeholder={'Search contacts'}
                        value={this.state.query}
                        onChange={(event) => this.updateQuery(event.target.value)}
                    />
                </div>
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
                                onClick={() => deleteContact(people)}
                                className='contact-remove'>
                                Remove
                            </button>
                        </li>
                    ))}
                </ol>
            </div>
        )
    }
}


export default ListContacts;
