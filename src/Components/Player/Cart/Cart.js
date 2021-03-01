import React from 'react';

const Cart = (props) => {
    const cart=props.cart;
  
    const totalSalary = cart.reduce((sum,player)=>sum+player.salary,0)
    const totalName = cart.reduce((sum,player)=>sum+player.name,[])

    return (
        <div>
        
     
         
           <h2>Total Salary :{totalSalary}</h2>
        </div>
    );
};

export default Cart;