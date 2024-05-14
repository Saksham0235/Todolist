import React from 'react'

function Checkbox({completed,onChange}) {
  return (
    <input type="checkbox" class="checkbox-round"  checked={completed} onChange={onChange} />

  )
}

export default Checkbox
