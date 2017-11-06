import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'
import Button from './Button'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Button />, div)
})

it('renders title', () => {
  expect(
    shallow(<Button title='The title' />)
  ).toHaveText('The title')
})

it('renders appropriate tag', () => {
  expect(
    shallow(<Button />)
  ).toHaveTagName('button')

  expect(
    shallow(<Button href='/' />)
  ).toHaveTagName('a')

  expect(
    shallow(<Button href='https://www.example.com/' />)
  ).toHaveTagName('a')
})

it('renders links', () => {
  expect(
    shallow(<Button href='https://www.example.com/' />)
  ).toHaveProp('href', 'https://www.example.com/')
})

it('renders variations', () => {
  expect(
    shallow(<Button />)
  ).toHaveClassName('btn')

  expect(
    shallow(<Button variation='dark' />)
  ).toHaveClassName('btn-dark')

  expect(
    shallow(<Button variation='danger' />)
  ).toHaveClassName('btn-danger')
})
