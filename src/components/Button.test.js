import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'
import Button from './Button'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Button />, div)
})

it('renders title', () => {
  const el = shallow(<Button title='The title' />)

  expect(el.text()).toBe('The title')
})

it('renders appropriate tag', () => {
  const el1 = shallow(<Button />)
  expect(el1.type()).toBe('button')

  const el2 = shallow(<Button href='/' />)
  expect(el2.type()).toBe('a')

  const el3 = shallow(<Button href='https://www.example.com/' />)
  expect(el3.type()).toBe('a')
})

it('renders links', () => {
  const el = shallow(<Button href='https://www.example.com/' />)

  expect(el.prop('href')).toBe('https://www.example.com/')
})

it('renders variations', () => {
  const el1 = shallow(<Button />)
  expect(el1.hasClass('btn')).toBeTruthy()

  const el2 = shallow(<Button variation='dark' />)
  expect(el2.hasClass('btn-dark')).toBeTruthy()

  const el3 = shallow(<Button variation='danger' />)
  expect(el3.hasClass('btn-danger')).toBeTruthy()
})
