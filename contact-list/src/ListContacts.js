import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

class ListContacts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            query: ''
        }
        this.updateQuery = this.updateQuery.bind(this)
        this.showAllContacts = this.showAllContacts.bind(this)
    }

    //Set PropTypes
    static propTypes = {
        listcontacts: PropTypes.array.isRequired,
        onDeleteContact: PropTypes.func.isRequired
    }

    //Update query state after type something in the input field
    updateQuery = (query) => {
        this.setState(() => ({
            query: query.trim()
        }))
    }

    showAllContacts = () => {
        this.updateQuery('')
    }

    render() {
        const {listcontacts,onDeleteContact} = this.props;
        const {query}= this.state;

        //Filter the name. If the query is empty showContact
        // will be the same as listcontacts. If type something
        // the includes() method determines whether an array includes
        // the query value and filter method will return a new array
        //only with the name includes the query
        const showContacts = query === '' ? listcontacts : listcontacts.filter((c) => (
            c.name.toLowerCase().includes(query.toLowerCase())
        ))

        return(
            <div className='list-contacts'>
                <div className='list-contacts-top'>
                    <input
                        className='search-contacts'
                        type='text'
                        placeholder={'Search contacts'}
                        value={query}
                        onChange={(event) => this.updateQuery(event.target.value)}
                    />
                    <Link to='/create' className='add-contact'>Add contact</Link>
                </div>
                {showContacts.length !== listcontacts.length && (
                    <div className='showing-contacts'>
                        <span>Now showing {showContacts.length} of {listcontacts.length} </span>
                        <button onClick={this.showAllContacts}>Show all</button>
                    </div>
                )}
                <ol className='contact-list'>
                    {showContacts.map( (people) => (
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
                                onClick={() => onDeleteContact(people)}
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
