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
    shallow(<Alert>Message</Alert>)
  ).toHaveText('Message')

  expect(
    shallow(<Alert><p>Paragraph</p></Alert>)
  ).toContainReact(<p>Paragraph</p>)
})

it('renders variations', () => {
  expect(
    shallow(<Alert />)
  ).toHaveClassName('alert')

  expect(
    shallow(<Alert variation='dark' />)
  ).toHaveClassName('alert-dark')

  expect(
    shallow(<Alert variation='danger' />)
  ).toHaveClassName('alert-danger')
})
