import axios from 'axios';
import React, { useState } from 'react';


function Form() {
    let [stock,setStock] = useState("");
    let [name,setName] = useState("");
    let [price,setPrice] = useState("");
    let [discontinued,setDiscontinued] = useState("");

  return (
    <>
    <form 
    action="" 
    onSubmit={(e) => {
        e.preventDefault();
    }}>
        <input 
        type='text'
        value={name}
        placeholder='Enter the name'
        onChange={(e) => {
            setName(e.target.value);
        }}
        />
        <br />
        <input 
        type='number'
        value={price}
        placeholder='Enter the price'
        onChange={(e) => {
            setPrice(e.target.value)
        }}
         />
         <br />
          <input 
       
        value={discontinued}
        placeholder='Enter the discontinued'
        onChange={(e) => {
            setDiscontinued(e.target.value)
        }}
        />
        <br />
      
        <input 
        type='number'
        value={stock}
        placeholder='Enter the stock'
        onChange={(e) => {
            setStock(e.target.value)
        }}
         />
         <br />
         <button
         type="submit"
         colorScheme="green"
         onClick={() => {
            let obj = {
                name: name,
                unitPrice:price,
                unitsInStock:stock,
            };
            setName("");
            setPrice("");
            setDiscontinued("");
            setStock("");
            axios
            .post("https://northwind.vercel.app/api/products/", obj)
            .then((res) => {
                setData([...data, res.data]);
            });
         }}
         >
            Add
         </button>
        
    </form>
    </>
  )
}

export default Form