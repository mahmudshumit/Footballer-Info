 import React, { useEffect, useState } from 'react';
import Cart from './Components/Player/Cart/Cart';
import Player from './Components/Player/Player';


 import playerData from './fakeData/data';
 




function App() {
  const [palyers,setPlayers]=useState([]);
  const [cart,setCart]=useState([]);


  useEffect(()=>{
    setPlayers(playerData);

  }, [])
  
  
  const handleAddPlayer =(player)=> {

   const newCart =[...cart,player];
   setCart(newCart);
 
   
}

 
  return (
       
    <div>
      <h1>Total Player Number :{palyers.length}</h1>
      <h1>Player Added :{cart.length}</h1>
      {
        cart.map(cart=><li> Name: {cart.name}, Salary {cart.salary},  Club: {cart.Club}  </li>)
      }
      <Cart cart={cart}></Cart>
     
      
        {
          playerData.map(player=><Player player={player} handleAddPlayer={handleAddPlayer} key={player.id}></Player>)
        }
    
    </div>

 
    
  );
}

export default App;
