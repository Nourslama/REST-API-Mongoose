import React, { Component } from 'react'
import Card from './components/cards'
import './App.css'
import AddContact from './components/addContact'

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>Contact List</h1>
        <AddContact/>
        <Card/>
      </div>
    )
  }
}
