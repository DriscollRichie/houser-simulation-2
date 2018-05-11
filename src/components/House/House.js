import React from 'react'

export default function House(props) {
  return(
    <div>
      <span>Address</span>
      <h1>{props.propertyData.address}</h1>
      <br/>
      <br/>
      <span>Property Name</span>
      <h1>{props.propertyData.name}</h1>
      <br/>
      <br/>
      <span>City</span>
      <h2>{props.propertyData.city}</h2>
      <br/>
      <br/>
      <span>State</span>
      <h2>{props.propertyData.state}</h2>
      <br/>
      <br/>
      <span>ZIP Code</span>
      <h2>{props.propertyData.zip}</h2>
      <br/>
      <button>Delete Property</button>
      <br/>
      <br/>
      <br/>
      <br/>
    </div>
  )
}