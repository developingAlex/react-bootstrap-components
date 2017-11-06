import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'
import Alert from './Alert'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Alert />, div)
})

it('renders children', () => {
  expect(
    shallow(<Alert>Message</Alert>).contains('Message')
  ).toBeTruthy()

  expect(
    shallow(<Alert><p>Paragraph</p></Alert>).contains(<p>Paragraph</p>)
  ).toBeTruthy()
})

it('renders variations', () => {
  const el1 = shallow(<Alert />)
  expect(el1.hasClass('alert')).toBeTruthy()

  const el2 = shallow(<Alert variation='dark' />)
  expect(el2.hasClass('alert-dark')).toBeTruthy()

  const el3 = shallow(<Alert variation='danger' />)
  expect(el3.hasClass('alert-danger')).toBeTruthy()
})
