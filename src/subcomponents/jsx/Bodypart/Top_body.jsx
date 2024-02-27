import React from "react";
import "../../style/Top.css";
import {TOP_OPTIONS, TOP_PATH} from '../../../assets/data'

import { CiCircleCheck } from "react-icons/ci";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { CiSquareChevDown } from "react-icons/ci";
import { MdChevronRight } from "react-icons/md";

const Top = () => {
  return (
    <div id="BodyTop">
      <div className="headline">Best Website builders in the US</div>
      <hr className="line" />


      <div id="topinfo">
        <div id="topleft">
          <div>
          <CiCircleCheck />
          <p>Last Updated</p>
          <p>-</p>
          <p>February 22, 2020</p>
          </div>
         <div>
         <IoIosInformationCircleOutline />
          <p>Advertising Disclosure</p>
         </div>
        
        </div>
        <div id="topright">
          <p>Top Relevant</p>
          <CiSquareChevDown size={24} />
        </div>
      </div>


      <hr className="line" />
      <div 
      id="top_opt" 
      >
      {
        TOP_OPTIONS.map((data,i)=>(
          <p key={`${data}-${i}`}>{data}</p>
        ))
      }

      </div>

      <div 
      id="toppath"
      >
        {
          TOP_PATH.map((data,i)=>
          <div key={`${data}${i}`}>
          <p>{data}</p>
          {
            i !== TOP_PATH.length &&
            <MdChevronRight/>
          }
          </div>  
          )
        }
      </div>
    

    </div>
  );
};

export default Top;
