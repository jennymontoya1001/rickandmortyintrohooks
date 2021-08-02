import React from 'react'

export const Mensaje = ({history}) => {
    return (
        <div>
            <h1>Hola soy un mensaje</h1>
            <button className="btn btn-primary" 
            onClick={() => history.push('/')}>Regresar</button>
        </div>
    )
}
