import { logoPicURL } from "../constants";
const Header = () =>{
    return (
        <div className="header">
        <a href="/" >
        <img src={logoPicURL} alt="logo" />
        </a>
        <ul>
           <a href="#home"> <li key="1">Home</li> </a> 
           <a href="#services"> <li key="2">Services</li> </a> 
           <a href="#contact"> <li key="3">Contact Us</li> </a> 
           <a href="#cart"> <li key="4">Cart</li> </a> 
        </ul>
        </div>
    );
}

export default Header ;