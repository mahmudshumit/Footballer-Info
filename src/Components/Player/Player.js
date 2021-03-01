import React from 'react';

const Player = (props) => {
    const {name,salary,Club,image}=props.player;
    // console.log(name);
    const imageStyle ={height:'150px'}
    const playerStyle ={border:'1px solid red', margin:'10px',padding:'10px' }
    const handleAddPlayer = props.handleAddPlayer;
    return (
        <div style={playerStyle}>
        
             
            <h2>Player Name: {name}</h2>
            <img style={imageStyle} src={image} alt=""/>

            <p>Player Salary: {salary}</p>
            <p><small>Club Name : {Club}</small></p>
            <button onClick={()=> handleAddPlayer(props.player)} type="button" class="btn btn-outline-success">Player Info</button>



        </div>
    );
};

export default Player;