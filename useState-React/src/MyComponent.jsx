import React,{useState} from "react";

function MyComponent(){
  const [name,setName]=useState("Guest");
  const [quantity,setQuantity]=useState(1);
  const [cmt,setCmt]=useState("");
  const [payment,setPayment]=useState("");
  const [shipping,setShipping]=useState("");

  function handleNameChange(event){
    setName(event.target.value);
  }
  function handleQuantityChange(event){
    setQuantity(event.target.value);
  }
  function handleCommentChange(event){
    setCmt(event.target.value);
  }
  function handlePaymentChange(event){
    setPayment(event.target.value);
  }
  function handleShippingChange(event){
    setShipping(event.target.value);
  }

  return(
    <div>
      <input value={name} onChange={handleNameChange}></input>
      <p>Name: {name}</p>

      <input value={quantity} onChange={handleQuantityChange} type="number"></input>
      <p>Quantity: {quantity}</p>

      <textarea value={cmt} onChange={handleCommentChange} placeholder="Enter delivery instructions"></textarea>
      <p>Comments: {cmt}</p>

      <select value={payment} onChange={handlePaymentChange}>
        <option value="">Select an option</option>
        <option value="Visa">Visa</option>
        <option value="MasterCard">MasterCard</option>
        <option value="GiftCard">Giftcartd</option>
      </select>
      <p>Payment:{payment}</p>

      <label>
        <input type="radio" value="Pick up" checked={shipping==="Pick up"} onChange={handleShippingChange}></input>
        Pick up
      </label>
      <input type="radio" value="Delivery" checked={shipping==="Delivery"} onChange={handleShippingChange}></input>
      <label>
        Delivery
      </label>
      <p>Shipping: {shipping}</p>
    </div>
  );
}
export default MyComponent;