import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { FaRegStarHalfStroke } from "react-icons/fa6";

export const generateStars =(stars)=>{
    let newstar = [];
    
    for(let i=0;i<5;i++){
        if( stars > i && stars >= i+1  ){
          newstar.push(<div key={`star${i}`} style={{color:'gold'}}><FaStar /></div>)
        }else if(stars < i+1 && stars > i ){
          newstar.push(<div key={`star${i}`} style={{color:'gold'}}><FaRegStarHalfStroke /></div>)
        }else{
          newstar.push(<div key={`star${i}`} ><CiStar /></div>)
        }
      }

      return newstar;
}