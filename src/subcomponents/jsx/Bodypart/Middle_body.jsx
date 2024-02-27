import React, { useEffect, useState } from 'react'
import '../../style/Middle.css'
import { MIDDLE_BODY } from '../../../assets/data'
import Left from '../Middle_Bodypart/Left';
import Middle_part from '../Middle_Bodypart/Middle_Body';
import Right from '../Middle_Bodypart/Right';
import Custom from '../Middle_Bodypart/Custom';

const Middle = () => {

  const width = 665;

  const [reorganize,setsize]  = useState(false);

  useEffect(()=>{
      window.onresize =()=>{
          if(window.innerWidth < width)
          {
           setsize(true);
          } 
          else if(reorganize) setsize(false);
      }
  },[reorganize])


  return (
    <div
    id='MIDDLE_BODY'
    >
      {
        MIDDLE_BODY.map((data,i)=>(
            <div 
            key={data.name+i}
            className='Product'
            >
              <Left image={data.img} i={i} name={data.name}/>
              {
                reorganize  ?
                <>
                <Custom data={data}/>
                </>

                :

                <>
                <Middle_part data={data}/>
                <Right rating={data.rating} remark={data.remark} stars={data.stars}/>
                </>
              }

            </div>
        ))
      }
    </div>
  )
}

export default Middle
