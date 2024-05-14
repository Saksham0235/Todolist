import React from 'react'

function Checkbox({completed,onChange}) {
  return (
    <input type="checkbox"   checked={completed} onChange={onChange} />

  )
}

export default Checkbox
