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
    this.deleteProperty = this.deleteProperty.bind(this)
  }

  getProperties() {
    axios.get('/api/properties').then(res => {
      this.setState({properties: res.data})
    })
  }

  componentDidMount() {
    this.getProperties()
  }

  deleteProperty(id) {
    axios.delete(`/api/properties/${id}`).then(res => this.getProperties())
  }

  render() {
    const properties = this.state.properties.map(elem => {
      return <House key={elem.id} propertyData={elem} deletePropertyFn={this.deleteProperty}/>
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