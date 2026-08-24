import {NavLink} from "react-router-dom"

function NavBar(){
    return(
        <main className="Navbar">
            <NavLink className={({ isActive }) => isActive ? "active" : ""} to ="/phonecard">Home</NavLink>
            <NavLink className={({ isActive }) => isActive ? "active" : ""} to ="/viewcart">Cart</NavLink>
        </main>
    )
}
export default NavBar