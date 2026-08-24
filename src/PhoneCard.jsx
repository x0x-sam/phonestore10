import { useState } from "react"
import NavBar from "./assets/NavBar"
import {Link} from "react-router-dom"

function PhoneCard(props){
    const cart = props.cart
    const setCart = props.setCart
const itemList = props.item
const category = props.category
const [searchQuery, setSearchQuery] = useState("")


    const listedItems = itemList.map(item => item.brand.toLowerCase().startsWith(searchQuery) &&<div key={item.id} className="Lists">
                                                                                                                <img src={item.image} alt="Phone Image" className="img"></img>
                                                                                                                <h3>{item.name} </h3>
                                                                                                                <p>Brand: {item.brand} </p>
                                                                                                                <p>Price: ₦{item.price.toLocaleString()}</p>
                                                                                                                <button onClick={()=>setCart([...cart, item])}>Add to Cart</button>
                                                                                                                </div>)

    const handleSearch = (e)=>{
        e.preventDefault()
    }

    return (
    <div className="main">
        <NavBar/>
        <div className="txt">
                <h2>Quality 200</h2>
            <p>Tested and trusted by alot of people, including you</p>
        </div>
        <form className="search" onSubmit={handleSearch}>
            <input type="text" className="searchInput" placeholder="Search phones..." value={searchQuery} onChange={(e)=> setSearchQuery(e.target.value)}></input>
            <input type="submit" className="submitBtn"  value="Search"></input>
        </form>
        <div className="CandL">
            <div className="viewCartArea">
                <h2>{category}</h2>
                <Link to ="/viewcart"><button>ViewCart</button></Link>
            </div>
            <p>{listedItems}</p>
        </div>
    </div>
)
}
export default PhoneCard

