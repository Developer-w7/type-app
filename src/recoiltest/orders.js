import { Outlet } from "react-router-dom"
import { sliderState } from "../atoms/sliderAtom";
import { useRecoilValue } from "recoil";

const Orders = () => {
    const range = useRecoilValue(sliderState);
    console.log("Orders rendered")
    return (
        <main className="App">
           <p>Orders</p>
           <p>{range}</p>
        </main>
    )
}

export default Orders
