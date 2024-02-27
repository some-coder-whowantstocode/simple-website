import React from 'react'
import '../../style/Bottom.css'
import defaultimage from '../../../assets/defaultimage.png'

const Bottom_body = () => {
  return (
    <div className="containerBox">
    <img src={defaultimage} className='productimg' alt="Top Image" />
    <div className="contentBox">
      <div className="discountBox">
        <span>20% off</span> <span>Limited time</span>
      </div>
      <div className="webbuilderBox">Webbuilder 1</div>
      <div className="descriptionBox">Computer Modern Classic with Wix Support</div>
      <div className="priceBox">
        <span className='offerprice'>$39.96</span>
        <span className='actualprice'>$49.96</span>
        <span className='discount'>{`(20% Off)`}</span>
        </div>
      <button className="dealButtonBox">View Deal</button>
    </div>
  </div>
  )
}

export default Bottom_body
