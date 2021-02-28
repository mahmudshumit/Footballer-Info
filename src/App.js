 import React, { useEffect, useState } from 'react';
 import playerData from './fakeData/data';




function App() {
  const [palyers,setPlayers]=useState([]);
  useEffect(()=>{
    setPlayers(playerData);
    console.log(playerData);


  }, [])
  
  
 
 
  return (
       
     <>
     <ul>
       {/* {
         Data[0].name
       } */}
     </ul>
     </>
  );
}

export default App;
