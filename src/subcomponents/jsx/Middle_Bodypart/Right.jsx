import React, { useEffect, useState } from 'react'


import { generateStars } from '../../../utils/Generate_stars';

const Right = ({rating,remark,stars}) => {
  const [star,setstars] = useState([]);

  useEffect(()=>{
   let newstar = generateStars(stars);
    setstars(newstar)
  },[stars])

  return (
    <div className='productright' >
      <div className='righttop'>
      <div className='rating'> {rating} </div>
      <div className='remark'> {remark} </div>
      <div className='stars'> {star} </div>
      </div>

      <div className='viewbtn'>view</div>     

    </div>
  )
}

export default Right
