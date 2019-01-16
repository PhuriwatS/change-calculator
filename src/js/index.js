import React, { Component } from 'react'
import { Input } from './component/common'
import './index.scss'

class App extends Component {
  state = {
    amount: '',
    hundredDollar: '',
    fiftyDollar: '',
    twentyDollar: '',
    tenDollar: '',
    fiveDollar: '',
    oneDollar: '',
    quarter: '',
    dime: '',
    nickel: '',
    penny: '',
  }

  handleInputChange = (e) => {
    const target = e.target
    const name = target.name
    const value = target.type === 'checkbox' ? target.checked : target.value
    this.setState({
      [name]: value,
    })
  }

  render() {
    const {
      amount,
      hundredDollar,
      fiftyDollar,
      twentyDollar,
      tenDollar,
      fiveDollar,
      oneDollar,
      quarter,
      dime,
      nickel,
      penny,
    } = this.state
    return (
      <div className="home-container">
        <div className="home-header">
          <p>Change calculator</p>
        </div>
        <div className="home-content">
          <Input label="Amount" name="amount" value={amount} onChange={this.handleInputChange} />
          <p>----- Change -----</p>
          <Input label="$100 dollar" name="hundredDollar" value={hundredDollar} onChange={this.handleInputChange} />
          <Input label="$50 dollar" name="fiftyDollar" value={fiftyDollar} onChange={this.handleInputChange} />
          <Input label="$20 dollar" name="twentyDollar" value={twentyDollar} onChange={this.handleInputChange} />
          <Input label="$10 dollar" name="tenDollar" value={tenDollar} onChange={this.handleInputChange} />
          <Input label="$5 dollar" name="fiveDollar" value={fiveDollar} onChange={this.handleInputChange} />
          <Input label="$1 dollar" name="oneDollar" value={oneDollar} onChange={this.handleInputChange} />
          <Input label="$0.25 cents (quarter)" name="quarter" value={quarter} onChange={this.handleInputChange} />
          <Input label="$0.10 cents (dime)" name="dime" value={dime} onChange={this.handleInputChange} />
          <Input label="$0.05 cents (nickel)" name="nickel" value={nickel} onChange={this.handleInputChange} />
          <Input label="$0.01 cents (penny)" name="penny" value={penny} onChange={this.handleInputChange} />
        </div>
      </div>
    )
  }
}

export default App
