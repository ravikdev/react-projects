import React from 'react'
import ChildComponent from './ChildComponent'

const ParentComponent = () => {
  return (
    <div>
      <ChildComponent person = {{name :'ravi',id:1}}/>
    </div>
  )
}

export default ParentComponent