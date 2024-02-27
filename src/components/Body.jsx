import React, { useRef } from 'react'
import '../ComponentStyles/Body.css'
import Top_body from '../subcomponents/jsx/Bodypart/Top_body'
import Middle_body from '../subcomponents/jsx/Bodypart/Middle_body'
import Bottom_body from '../subcomponents/jsx/Bodypart/Bottom_body'

const Body = () => {

  return (
    <div
    id='Body'
    >
      <div id='container'>
        <Top_body/>
        <Middle_body/>
        <div className='headline' >Related deals you might like</div>
        <div className='cards' >
        {
          Array.from({length:3},(_,i)=>(
            <Bottom_body key={`bodypart${i}`}/>
          ))
        }
        </div>
        <div className='signupbox'>
          <div className='headline'>Sign up and get exclusive special deals</div>
          <div className='sbox_input'>
            <input type="text" />
            <span>Sign Up</span>
          </div>
          </div>      
      </div>
    </div>
  )
}

export default Body
