import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './bootstrap-4.0.0-beta.2-dist/css/bootstrap.css'
import Button from './components/Button'
import Alert from './components/Alert'
import Card, { CardText } from './components/Card'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className='d-flex justify-content-around mt-3'>
          <Button title='Google' href='https://www.google.com/' />
          <Button title='Second' variation='primary' />
          <Button title='Third' variation='success' />
        </div>
        <div className='mt-3'>
          <Alert variation='danger'>🚨 Danger! 🚨</Alert>
          <Alert variation='success'>Your are our one millionth visitor!</Alert>
          <Alert variation='info'>Seals can hold their breath for 2 hours which is a record in the animal world.</Alert>
        </div>
        <div className='mt-3'>
        <Card
            header='Header'
            mb={ 3 }
          >
            <h4>With header and text</h4>
            <p className='card-text'>Lorem ipsum</p>
          </Card>
          <Card
            imageTop={
              <img className="card-img-top" src="https://placehold.it/1200x200" alt="Card image cap" />
            }
          >
            <h4>With top image</h4>
            <p className='card-text'>Lorem ipsum</p>
          </Card>
        </div>
      </div>
    );
  }
}

export default App;
