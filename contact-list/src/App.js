import React, {Component} from 'react';
import ListContacts from './ListContacts';
import * as ContactAPI from './utils/ContactsAPI';
import CreateContact from './CreateContact';
import { Route } from "react-router-dom";


class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            contacts: []
        }
        this.removeContact = this.removeContact.bind(this)
    }

    componentDidMount() {
        ContactAPI.getAll()
            .then((contacts) => {
                this.setState(() => ({
                    contacts
                }))
            })
    }

    //Remove contact. Once you click on the button,
    // the method will return a new array that does
    // not include contact.id
    removeContact = (contact) => {
        this.setState((currentState) => ({
            contacts: currentState.contacts.filter((c) => {
                return c.id !== contact.id
            })
        }))

        ContactAPI.remove(contact)
    }

    createContact = (contact) => {
        ContactAPI.create(contact).then((contact) => {
            this.setState((currentState) => ({
                contact: currentState.contacts.concat([contact])
            }))

        })
    }


    render() {
        return (
            <div>
                <Route exact path="/" render = {() => (
                    <ListContacts
                        listcontacts={this.state.contacts}
                        onDeleteContact={this.removeContact}
                    />
                )}/>
                <Route path = "/create" render = {({history}) => (
                    <CreateContact
                        onCreateContact={(contact) => {
                            this.createContact(contact)
                            history.push('/')
                        }}
                    />
                )} />
            </div>
        )
    }
}

export default App;
