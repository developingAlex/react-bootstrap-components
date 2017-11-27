import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './bootstrap-4.0.0-beta.2-dist/css/bootstrap.css'
import Button from './components/Button'
import Alert from './components/Alert'
import { Nav, NavItem } from './components/Nav'

class App extends Component {
  render() {
    return (
      <div className="App">
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
