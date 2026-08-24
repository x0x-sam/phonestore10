import {Routes, Route} from "react-router-dom"
import SamsungPic from "./assets/1.jpg"
import iPhonePic from "./assets/iPhone.jpg"
import XiaomiPic from "./assets/xiaomi.jpg"
import iPhone15Pic from "./assets/iPhone15.jpg"
import PhoneCard from "./PhoneCard"
import NavBar from "./assets/NavBar"
import ViewCart from "./assets/ViewCart"
import { useState } from "react"

function App() {
const [cart, setCart] = useState([]);

  const PhoneDetails =[{
              id:1,
              name: "Samsung S25",
              price: 140000,
              brand:"Samsung",
              image: SamsungPic
        },
      {
              id:2,
              name: "iPhone 17 Pro",
              price: 70000,
              brand:"Apple",
              image: iPhonePic
          },
         {
              id:3,
              name: "XIAOMI Redmi Note 15 PRO",
              price: 5500,
              brand:"Xiaomi",
              image: XiaomiPic
          },
             {
              id:4,
              name: "Apple iPhone 16 Pro",
              price: 35500,
              brand:"Apple",
              image: iPhone15Pic
          }
    ]

  
  return (
    <>
    <Routes>
            <Route path="/" element={ <><PhoneCard item={PhoneDetails} category="Mobile Phones" cart={cart} setCart={setCart}/> </>}/>
      <Route path="/phonecard" element={ <PhoneCard item={PhoneDetails} category="Mobile Phones" cart={cart} setCart={setCart}/>}/>
      <Route path="/viewcart" element={<ViewCart cart={cart} setCart={setCart}/>}/>
    </Routes>
    </>
  )
}

export default App
