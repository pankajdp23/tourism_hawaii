import React from 'react'
import natureGreenary from '../../assets/Image.png';
import Style from "./Head.module.css";

const Head = () => {
  return (
    <div>
        <img src={natureGreenary} alt='Nature Image' className={Style.image}/>
    </div>
  )
}

export default Head