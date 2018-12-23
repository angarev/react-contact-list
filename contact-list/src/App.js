import React, { Component } from 'react';
import ListContacts from './ListContacts';


class App extends Component {
  state = {
    contacts: [
      {
        "id": "karen",
        "name": "Karen Isgrigg",
        "handle": "@karen_isgrigg",
        "avatarURL": "http://localhost:5001/karen.jpg"
      },
      {
        "id": "richard",
        "name": "Richard Kalehoff",
        "handle": "@richardkalehoff",
        "avatarURL": "http://localhost:5001/richard.jpg"
      },
      {
        "id": "tyler",
        "name": "Tyler McGinnis",
        "handle": "@tylermcginnis",
        "avatarURL": "http://localhost:5001/tyler.jpg"
      },
      {
        "id": "pancho",
        "name": "Panayot Angarev",
        "handle": "@pangarev",
        "avatarURL": "http://localhost:5001/pancho.jpg"
      }
    ]
  }
  render() {
    return (
        <div>
          <ListContacts listcontacts = {this.state.contacts}/>
        </div>
    )
  }
}

export default App;
