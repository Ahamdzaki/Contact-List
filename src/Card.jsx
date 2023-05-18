import {StrictMode} from "react";
import "./styles.css"
import Avater from "./Avater";
import Details from "./Details";
function Card (props){
  return (
   <div className = "card">
      <div className = "top">
          <h2 className = "name" >{props.name}</h2>
          <Avater image = {props.img} />
      </div>
      <div className = "bottom">
          <Details Details = {props.tel} />
		  <Details Details = {props.email} />
      </div>
   </div>
    
  )
   
}
export default Card;