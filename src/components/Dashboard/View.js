import React from 'react'

const View = ({ children }) => {
  return (
    <div className='body-container flex-col items-start justify-start flex-1 overflow-y-auto p-1'>
      <div className='min-h-full min-w-full'>{children}</div>
    </div>
  )
}

export default View
