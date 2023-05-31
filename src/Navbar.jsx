import React from 'react';
import "./Navbar.css"

const Navbar = () => {

    return (
        <nav>
            <img src="../img/logo.jpg" alt="" width={120}/>
            <div className="direita">
                <img src="../img/avatar.png" alt="" width={40}/>
                ⏷
            </div>
        </nav>
    );
}

export default Navbar;
