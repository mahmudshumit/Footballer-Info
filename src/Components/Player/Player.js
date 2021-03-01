import React , {useState} from 'react';

const Player = (props) => {
    const { name, salary, Club, image } = props.player;
    const imageStyle = { height: '150px' }
    const playerStyle = { border: '1px solid red', margin: '10px', padding: '10px' }
    const handleAddPlayer = props.handleAddPlayer;
    const [ isClicked, setIsClicked ] =  useState(false);
    return (
        <div style={playerStyle}>


            <h2>Player Name: {name}</h2>
            <img style={imageStyle} src={image} alt="" />
            <p>Player Salary: {salary}</p>
            <p><small>Club Name : {Club}</small></p>
            <button disabled={isClicked} onClick={() =>  {
                        props.handleAddPlayer(props.player)
                        setIsClicked(true) 
                     }} className="btn btn-success">
                        {isClicked ? "✓ Already added " : "Player Info"}
                    </button>
        </div>
    );
};

export default Player;