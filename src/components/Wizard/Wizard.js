import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

export default class Wizard extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      address: '',
      city: '',
      state: '',
      zip: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.addProperty = this.addProperty.bind(this)
  }

  handleChange(key, value) {
    this.setState({[key]: value})
  }

  addProperty() {
    let {name, address, city, state, zip} = this.state
    axios.post('/api/properties', {name, address, city, state, zip})
  }

  render() {
    return(
      <div>
        <h1>I am Wizard</h1>
        <input placeholder='name' onChange={(e) => this.handleChange('name', e.target.value)}/>
        <input placeholder='address' onChange={(e) => this.handleChange('address', e.target.value)}/>
        <input placeholder='city' onChange={(e) => this.handleChange('city', e.target.value)}/>
        <input placeholder='state' onChange={(e) => this.handleChange('state', e.target.value)}/>
        <input placeholder='zip' onChange={(e) => this.handleChange('zip', e.target.value)}/>
        <Link to='/'><button onClick={this.addProperty}>Complete</button></Link>
        <Link to='/'><button>Cancel</button></Link>
      </div>
    )
  }
}