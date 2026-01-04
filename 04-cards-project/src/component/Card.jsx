import React from 'react'
import { Bookmark } from "lucide-react";

const Card = (props) => {

  console.log(props.company);

  return (
    <div className="card">
        <div className="top">
          <img src={props.brandLogo} alt="" />
          <button> Save <Bookmark /> </button>
        </div>

        <div className="center">
          <h3>{props.company} <span>{props.datePosted}</span></h3>
          <h2>{props.post}</h2>

          <div className='tag'>
            <h4>Part-Time</h4>
            <h4>Senior-level</h4>
          </div>
        </div>
        <div className="bottom">
          <div>
            <h3>$10,0{props.pay}</h3>
            <p>{props.location}</p>

          </div>
          <button>Apply Now</button>
        </div>
      </div>

  )
}

export default Card
