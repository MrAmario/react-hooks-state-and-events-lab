import React, {useState} from "react";

function Item({ name, category }) {
  
  const [isOn, setIsOn]= useState(false)
  const onCart= isOn ? "in-cart" : ""
  function handleClick(){
    setIsOn(!isOn)
  }




  return (
    <li className={onCart}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleClick}>{isOn? "Remove From Cart" : "Add to Cart"} </button>
    </li>
  );
}

export default Item;
