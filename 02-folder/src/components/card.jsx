 //RAFCE
 
 import React from 'react'
 import {Bookmark} from'lucide-react'

 const card = (props) => {
   return (
     <div className="card">
         <div className="top">
          <img src={props.logo} alt="Nahi Ya" />
          <button>Save <Bookmark size={13}/></button>
         </div>
         <div className="center">
          <h3>{props.company} <span>{props.posted}</span></h3>
          <h2>{props.role}</h2>
          <div>
            <h4>{props.type}</h4>
            <h3>{props.level}</h3>
          </div>
         </div>
         <div className="bottom">
          <div> 
            <h3>{props.pay}</h3>
            <p>{props.location}</p>
          </div>
          <button>Apply Now</button>
         </div>

      </div>
   )
 }
 
 export default card