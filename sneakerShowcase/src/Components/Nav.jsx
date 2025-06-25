import {NavLink} from "react-router-dom";


function Nav() {
    return(
        <div className="nav-container">
                <p className="logo">Sneaker Showcase</p>
                <ul className="nav-links">
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a>Mens</a></li>
                    <li><a>Womens</a></li>
                </ul>
                <div className="nav-spacer"></div>
            
        </div>
    );
}

export default Nav