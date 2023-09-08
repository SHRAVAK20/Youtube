import React from 'react'
import Button from './Button'

const list = ["All", "Cricket", "Soccer", "News", "Live", "Songs", "Trending"]

const ButtonList = () => {
  return (
    <div className='flex'>
      {list.map((new_name) => <Button key={Math.floor(Math.random() * 100)} name={new_name}/>)}
    </div>
  )
}

export default ButtonList
