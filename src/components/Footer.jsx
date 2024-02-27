import React from 'react'
import '../ComponentStyles/Footer.css'

const Footer = () => {
  return (
    <div className="container">
    <div className="row">
        <div className="categories">Categories</div>
          <span>Web Builder</span>
          <span>Hosting</span>
          <span>Data Center</span>
          <span>Robotic-Automation</span>

               
    </div>
    <div className="row">
        <div className="categories">Contact</div>
      
          <span>Contact</span>
          <span>Privacy Policy</span>
          <span>Terms of Service</span>
          <span>Categories</span>
          <span>About</span>

    </div>
    <div className="row">
        <div className="united-states">United States</div>
    </div>
</div>
  )
}

export default Footer
