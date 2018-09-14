import React from 'react'
import { shallow, mount } from 'enzyme'

import Header from '../../client/components/Header'


test('Header returns an h1 tag', () => {
  const wrapper = mount(<Header />)
  const actual = wrapper.find('h1').text()
  console.log(wrapper.text())
  expect (actual).toEqual('Header')
})


