import React from 'react'

function Aside(){
    return (
        <div Style={{
            width: "200px",
            height: "100px",
            background: "#f4f4f4",
            padding: "20px",
           }}
        >
            <ul>
                <li>Home</li>
                <li>Sobre o sistema</li>
                <li>Serviços</li>
                <li>Contato</li>
            </ul>
        </div>
    );
}

export default Aside;