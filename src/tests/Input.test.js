import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { Input } from '../js/component/common'

Enzyme.configure({ adapter: new Adapter() })
describe('Component Input', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<Input type='text' onChange={jest.fn()} />)
  })

  it('Input has classname', () => {
    expect(wrapper.find('.input-container').length).toEqual(1)
  })

  it('Input has value', () => {
    wrapper = shallow(<Input type='text' onChangeHandler={jest.fn()} value={'test'} displayText={'test'} />)
    wrapper.find('.input-box').simulate('change', { target: { value: 'test' } })
    expect(wrapper.find('.input-box').length).toEqual(1)
  })
})
