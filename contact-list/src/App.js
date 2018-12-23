import React, { Component } from 'react';
import ListContacts from './ListContacts';

const contacts = [
  {
    "id": "karen",
    "name": "Karen Isgrigg",
    "handle": "@karen_isgrigg",
    "avatarURL": "images/michael.jpg"
  },
  {
    "id": "richard",
    "name": "Richard Kalehoff",
    "handle": "@richardkalehoff",
    "avatarURL": "images/ryan.jpg"
  },
  {
    "id": "tyler",
    "name": "Tyler McGinnis",
    "handle": "@tylermcginnis",
    "avatarURL": "images/tyler.jpg"
  },
  {
    "id": "pancho",
    "name": "Panayot Angarev",
    "handle": "@pangarev",
    "avatarURL": "images/IMG_3269.jpg"
  }
];

class App extends Component {
  render() {
    return (
        <div>
          <ListContacts listcontacts = {contacts}/>
        </div>
    )
  }
}

export default App;
