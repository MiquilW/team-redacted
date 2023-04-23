import React from 'react'

const Species = props => {
  return (
    <div className='species'>
        <img className='pic' src={require('./pfp_1.png')} alt='lol'/>
        <h2 className='name'>{props.name}</h2>
    </div>
  )
}

export default Species