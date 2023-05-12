import { useState } from "react"
import star from "../assets/star.jpg"
import "./Rate.css"
 
 export default function Rate(props) {
   const button = [1, 2, 3, 4, 5];
   
   


   return (
      <div className="rate-div">
         <img src={star}/>
         <h1>How did we do?</h1>
         <p>
            Please let as know how we did with your support
            appreciated to help us improve aur offering!
         </p>
         <div>
            {button.map((item) => (
               <button onClick={() => props.setRate(item)} 
               key={item}
               className={item == props.rate ? "active": ""}>{item}</button>
            ))}
         </div>
         <battons className="submit" onClick={() => {if(props.rate) {props.setSubmit(true)}}}>SUBMIT</battons>
      </div>
   );
}