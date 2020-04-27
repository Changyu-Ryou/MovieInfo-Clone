import React from 'react';
import {Link} from 'react-router-dom';
import './Navigation.css';

function Navigtion (){
    return <div className="Navi">
        <Link className="link" to="/">Home</Link><br/>
        <Link className="link" to="/about">About</Link>
    </div>
}

export default Navigtion;