import React, { memo } from 'react'
import { useNavigate } from 'react-router-dom'

const Menu = memo(() => {
  const navigate = useNavigate()
  return (
    <div>
      <button onClick={e=> navigate('/home')}>menu</button>
    </div>
  )
})

export default Menu