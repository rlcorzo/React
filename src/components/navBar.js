import { useRef } from "react";
import CartWidget from "./CartWidget/index";
import {FaBars, FaTimes} from "react-icons/fa";
import "../Styles/main.css";
 

function NavBar () {
    const navRef = useRef();

    const showNavbar = () =>{
       navRef.current.classList.toggle("responsive_nav");
    }

    return ( 
        
        <header>
            <h3>Logo</h3>
            <nav ref={navRef}>
                <a href="#">Inicio</a>
                <a href="#">Nosotros</a>
                <a href="#">Productos</a>
                <a href="#">Contacto</a>
                <a href="#">
                    <CartWidget/>
                </a>
                <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                    <FaTimes/>
                </button>
            </nav>
            <button className="nav-btn" onClick={showNavbar}>
                <FaBars/>
            </button>
        </header>

     );
}

export default NavBar ;