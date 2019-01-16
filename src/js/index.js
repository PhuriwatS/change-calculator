import React, { Component } from 'react'
import { Input } from './component/common'
import './index.scss'

const money = [
  { name: "hundredDollar", value: 100 },
  { name: "fiftyDollar", value: 50 },
  { name: "twentyDollar", value: 20 },
  { name: "tenDollar", value: 10 },
  { name: "fiveDollar", value: 5 },
  { name: "oneDollar", value: 1 },
  { name: "quarter", value: 0.25 },
  { name: "dime", value: 0.1 },
  { name: "nickel", value: 0.05 },
  { name: "penny", value: 0.01 },
]

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

  calculateChange = (e) => {
    const value = e.target.value
    let change = value
    money.forEach(cv => {
      let count = Math.floor(change / cv.value)
      change -= (count * cv.value)
      change = change.toFixed(2)
      this.setState({ [cv.name]: count })
    })
    this.setState({ amount: value })
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
          <Input label="Amount" className="amount" name="amount" value={amount} onChange={this.calculateChange} />
          <p>----- Change -----</p>
          <Input label="$100 dollar" className="hundredDollar" name="hundredDollar" value={hundredDollar} readOnly />
          <Input label="$50 dollar" className="fiftyDollar" name="fiftyDollar" value={fiftyDollar} readOnly />
          <Input label="$20 dollar" className="twentyDollar" name="twentyDollar" value={twentyDollar} readOnly />
          <Input label="$10 dollar" className="tenDollar" name="tenDollar" value={tenDollar} readOnly />
          <Input label="$5 dollar" className="fiveDollar" name="fiveDollar" value={fiveDollar} readOnly />
          <Input label="$1 dollar" className="oneDollar" name="oneDollar" value={oneDollar} readOnly />
          <Input label="$0.25 cents (quarter)" className="quarter" name="quarter" value={quarter} readOnly />
          <Input label="$0.10 cents (dime)" className="dime" name="dime" value={dime} readOnly />
          <Input label="$0.05 cents (nickel)" className="nickel" name="nickel" value={nickel} readOnly />
          <Input label="$0.01 cents (penny)" className="penny" name="penny" value={penny} readOnly />
        </div>
      </div>
    )
  }
}

export default App
