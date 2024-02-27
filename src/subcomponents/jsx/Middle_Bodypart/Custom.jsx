import React, { useEffect, useState } from 'react'
import { generateStars } from '../../../utils/Generate_stars';

const Custom = ({data}) => {

    const [star,setstars] = useState([]);

    useEffect(()=>{
     let newstar = generateStars(data.stars);
      setstars(newstar)
      
    },[data.stars])



  return (
    <div
    id='custom_part'
    >
      <div
    className='desname'
    ><span>{data.desname}</span> - {data.des}</div>
    <div className='stars'> {star} </div>
    <div className='rating'> {data.rating} </div>
      <div className='remark'> {data.remark} </div>
      <div className='viewbtn'>view</div>     
    </div>
  )
}

export default Custom
