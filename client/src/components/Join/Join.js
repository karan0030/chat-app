import React, {useState} from 'react';
import {Link} from 'react-router-dom'; 
import './Join.css'

const Join = () => {

    const [name, setName] = useState('');
    const [room, setRoom] = useState('');

    return (
        <div className="join-outer-container">
            <div className="join-inner-container">
                <h1 className="heading">Superchat!</h1>
                <div><input onChange={(event) => setName(event.target.value) } type="text" placeholder="Name" className="join-input"/></div>
                <div><input onChange={(event) => setRoom(event.target.value)} type="text" placeholder="Room" className="join-input mt-20"/></div>
                <Link onClick={(event) => (!name || !room) ? event.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
                    <button className="button mt-20" type="submit">Sign In</button>
                </Link>
            </div>
        </div>
    );
}

export default Join;