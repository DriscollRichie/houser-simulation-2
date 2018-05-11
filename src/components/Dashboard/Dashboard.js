import React, {Component} from 'react'
import House from '../House/House'
import {Link} from 'react-router-dom'
import axios from 'axios'

export default class Dashboard extends Component {
  constructor() {
    super()
    this.state = {
      properties: []
    }
  }

  componentDidMount() {
    axios.get('/api/properties').then(res => {
      this.setState({properties: res.data})
    })
  }

  render() {
    const properties = this.state.properties.map(elem => {
      return <House key={elem.id} propertyData={elem}/>
    })
    return(
      <div>
        <h1>I am Dashboard</h1>
        {properties}
        <Link to='/wizard'><button>Add New Property</button></Link>
      </div>
    )
  }
}