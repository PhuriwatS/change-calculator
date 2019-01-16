import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import App from '../js'

Enzyme.configure({ adapter: new Adapter() })
describe('Component Input', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<App />)
  })

  it('App has classname', () => {
    expect(wrapper.find('.home-container').length).toEqual(1)
  })

  it('App change amount value to 1.00', () => {
    wrapper.find('.amount').simulate('change', { target: { value: 1.00 } })
    expect(wrapper.state('amount')).toEqual(1)
    expect(wrapper.state('oneDollar')).toEqual(1)
  })

  it('App change amount value to 0.99', () => {
    wrapper.find('.amount').simulate('change', { target: { value: 0.99 } })
    expect(wrapper.state('amount')).toEqual(0.99)
    expect(wrapper.state('quarter')).toEqual(3)
    expect(wrapper.state('dime')).toEqual(2)
    expect(wrapper.state('penny')).toEqual(4)
  })

  it('App change amount value to 124.67', () => {
    wrapper.find('.amount').simulate('change', { target: { value: 124.67 } })
    expect(wrapper.state('amount')).toEqual(124.67)
    expect(wrapper.state('hundredDollar')).toEqual(1)
    expect(wrapper.state('twentyDollar')).toEqual(1)
    expect(wrapper.state('oneDollar')).toEqual(4)
    expect(wrapper.state('quarter')).toEqual(2)
    expect(wrapper.state('dime')).toEqual(1)
    expect(wrapper.state('nickel')).toEqual(1)
    expect(wrapper.state('penny')).toEqual(2)
  })
})
