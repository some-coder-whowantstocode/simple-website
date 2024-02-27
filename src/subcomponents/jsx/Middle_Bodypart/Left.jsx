import React from 'react'
import defaultimg from '../../../assets/defaultimage.png'

const Left = ({image,i,name}) => {
  return (
    <>
        <div className='productleft' >
                    <span >{i+1}</span>
                   { image ? <img className='productimg' src='' alt='image'/> : <img className='productimg' src={defaultimg} alt="" />}
                   <div>{name}</div>
        </div>
    </>
  )
}

export default Left
