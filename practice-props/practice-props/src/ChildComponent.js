import React from 'react'

const ChildComponent = (props) => {
  return (
    <div>
      {/* {props.brand} */}
      {props.person.name}
      {/* here person is propertie */}
    </div>
  )
}

export default ChildComponent