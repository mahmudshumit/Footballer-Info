import React from 'react';

const Cart = (props) => {
    const cart=props.cart;
  
    const totalSalary = cart.reduce((sum,player)=>sum+player.salary,0)
    const totalName = cart.reduce((sum,player)=>sum+player.name,[])

    return (
        <div>
           <h2>Player Cart :{cart.length}</h2> 
           <p>Player Name: :{totalName} </p>
           <p>Total Salary :{totalSalary}</p>
        </div>
    );
};

export default Cart;