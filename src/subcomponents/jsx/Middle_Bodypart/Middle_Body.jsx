import React from 'react'


import { FaAngleDown } from "react-icons/fa";
import { CiCircleCheck } from "react-icons/ci";

const Middle_part = ({data}) => {

    


  return (
    <div className='productmiddle' >

    <div
    className='desname'
    ><span>{data.desname}</span> - {data.des}</div>

    {
        data.offer && <span className='offer'>{data.offeramount}% Off</span>
    }

    <div className='highlights'>Main Highlights</div>
    {
        data.descriptiontype === 1 ? 
        <div className='des'>[what You Get]:{data.whatyouget}</div>
        :
        <div className='des2'>
            {
            data.whatyouget.map((d,i)=>(
                <div key={`${d}${i}`}>
                <p>{d[1]}</p> <span>{d[0]}</span>   
                </div>
            ))
            }
        </div>
    }

    {
        data.recommended && <>
        <div className='whylove'>Why we love it</div>
        {
            data.whyrec.map((rd,i)=>(
                <div
                key={`${rd}${i}`}
                className='reason'
                >
                    <p>
                    <CiCircleCheck/>

                    </p>
                    <div  >{rd}</div>
                </div>
            ))
        }
        </>
    }

    <div className='linktomore'>Show more <FaAngleDown/></div>

</div>
  )
}

export default Middle_part
