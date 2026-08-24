import NavBar from "./NavBar"
function ViewCart(props){

    const cart = props.cart
    const setCart = props.setCart

    const listedCart = cart.map(cartItem => <div key={cartItem .id} className="Lists">
                                                                                                                <img src={cartItem .image} alt="Phone Image" className="img"></img>
                                                                                                                <h3>{cartItem.name} </h3>
                                                                                                                <p>Brand: {cartItem.brand} </p>
                                                                                                                <p>Price: ₦{cartItem.price.toLocaleString()}</p>
                                                                                                                <button onClick={()=>setCart(cart.filter(item => item.id !== cartItem.id))}>Remove Item</button>
                                                                                                                </div>)

    return(
        <div className="main">
            <NavBar/>
                    <h2 className="cartno">Cart Items <span>({cart.length})</span></h2>
        {listedCart}
        </div>
    )
}
export default ViewCart