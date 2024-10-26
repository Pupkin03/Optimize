import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
    const navList = [
        {name: "Home", path: "/"},
        {name: "Log In", path: "Login"},
        {name: "Create Account", path: "CreateAccount"},
    ];


  return (
    <div className="navbar">
            <p className="navtext">OptimizeHK</p>
            <h6 className="navbarList">{navList.map((list, index) => (
                <p key ={index}>
                <Link to={list.path}>{list.name}</Link>
                </p>
                ))}
            </h6>
    </div>
  )
}

export default Navbar