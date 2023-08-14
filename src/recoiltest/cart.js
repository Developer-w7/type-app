import { Outlet } from "react-router-dom"
import { useRecoilValue } from "recoil";
import { sliderRangeTextState, sliderState } from "../atoms/sliderAtom";

const Cart = () => {
    
    const rangeText = useRecoilValue(sliderRangeTextState);

    console.log("Cart rendered")
    return (
        <main className="App">
           <p>Cart</p>
           <p>{rangeText}</p>
        </main>
    )
}

export default Cart
