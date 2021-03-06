import React from 'react'
import { Personajes } from './Personajes';
import {Link} from 'react-router-dom';


export const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-sm navbar-light bg-light">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#opciones">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <a className="navbar-brand" href="/">
                    <img src="http://www.tutorialesprogramacionya.com/imagenes/foto1.jpg" width="30" height="30" alt="" />
                </a>
                <div className="collapse navbar-collapse" id="opciones">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/Mensaje">Mensaje</Link>
                        </li> 
                    </ul>
                </div>
            </nav>
            <Personajes />
        </div>
    )
}
