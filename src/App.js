import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './bootstrap-4.0.0-beta.2-dist/css/bootstrap.css'
import Button from './components/Button'
import Alert from './components/Alert'
import Card from './components/Card'
import { Nav, NavItem } from './components/Nav'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Card 
        title='I am a card' 
        body='Hi there, its lovely to meet you'
        width='20rem'
        imageAlt='BB-8'
        imageURL='https://media.giphy.com/media/xT9Igr8ml6q7Sil8qs/source.gif'
        buttonWords='My man'
        buttonURL='https://giphy.com/embed/qPVzemjFi150Q'
        buttonVarition='dark'
        />
        <Alert title='Welcome! I am a PRIMARY alert' variation = 'primary' />
        <Alert title='Welcome! I am a SECONDARY alert' variation = 'secondary' />
        <Alert title='Welcome! I am a SUCCESS alert' variation = 'success' />
        <Alert title='Welcome! I am a DANGER alert' variation = 'danger' />
        <Alert title='Welcome! I am a WARNING alert' variation = 'warning' />
        <Alert title='Welcome! I am a INFO alert' variation = 'info' />
        <Alert title='Welcome! I am a LIGHT alert' variation = 'light' />
        <Alert title='Welcome! I am a DARK alert' variation = 'dark' />
        <div className='mt-3'>
          <Button title='Google' href='https://www.google.com/' />
          <Button title='Second' variation='primary' />
          <Button title='Third' variation='success' />
        </div>
        <div className='mt-3'>
          <Nav>
            <NavItem>First</NavItem>
            <NavItem active={ true }>Second</NavItem>
            <NavItem>Third</NavItem>
          </Nav>
        </div>
      </div>
    );
  }
}

export default App;
