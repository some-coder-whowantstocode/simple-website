import React, { useEffect, useRef, useState } from 'react'
import '../ComponentStyles/Nav.css'

import { CiSearch } from "react-icons/ci";

const Navbar = () => {
    const width = 600;

    const [toggle, settoggle] = useState(true);
    const [reorganize,setcheck] = useState(false);
    const [val,setvalue] = useState('');
    const searchref = useRef(null);
    

    const handleClick = (event)=>{
        event.stopPropagation();
        if(val === '') settoggle(!toggle);
    }
    
    useEffect(()=>{

        const handleresize =()=>{
            if(window.innerWidth < width)
            {
                setcheck(true); 
                settoggle(true);
                
            } 
            else if(reorganize) setcheck(false)
        }


        window.addEventListener('resize',handleresize);

        return()=>{
            window.removeEventListener('resize',handleresize)
        }
       
    },[reorganize])

  return (
    <div
    id='Navbar'

    onClick={()=>{
        if(val === '') settoggle(true)
    }}
    >
        <div
        id='mininav'
        >
            <div
            id='searchbox'
            ref={searchref}
            onClick={(e)=>handleClick(e)}
            style={{
                width: reorganize ? toggle ? '24px' : '100px' : '258px',
                height: reorganize ? toggle ? '24px' : '37px' :'37px',
                transition: 'width 0.5s ease-in-out',
                background:'#212731',
            }}
            >
             <input type="text" id='input'
             value={val}
             onChange={(e)=>setvalue(e.target.value)}
             readOnly= {toggle}
             style={{
                width: reorganize ? toggle ? '0px' : '100px' : '258px',
                height: reorganize ? toggle ? '0px' : '37px' :'37px',
                color:toggle ? 'white'  :'#8d8d8d' ,
             }}
             />
             <span id='searchbtncover' 
              style={{ 
                position:'absolute', 
                top:'30%',
                right: toggle ? 'calc(100% - 30px)' :  '10px',
                transition: 'right 0.5s ease-in-out'
              }}     
             >
             <CiSearch id='searchbtn' />
             </span>
            </div>
            <button className='navBtn' >Categories</button>
            <button className='navBtn' >Website Builders</button>
            <button className='navBtn' >Today's deals</button>
        </div>
       
       
    </div>
  )
}

export default Navbar
