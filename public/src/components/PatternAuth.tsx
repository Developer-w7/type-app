import { useContext, useId, createContext, useEffect, useState } from "react";
import ConfirmAuth from "./ConfirmAuth";


type listItems={
    list:string[]
};
const initialState={
   
}
export const ApplicationContex = createContext(initialState);
function PatternAuth({list}:listItems):JSX.Element {
const unxId =useId();

const [showConfirmPage, setShowConfirmPage]=useState(false);
useEffect(() => {
    
}, []);


function processListItems(items:string[]):JSX.Element[]{
return items.map((v,index)=><span className="auth-items" key={index+unxId}>{v}</span>)
}

    return(
        <ApplicationContex.Provider value={{name:"TEST"}}>
        <div>
        <div className="auth-tile-wrap">
        {processListItems(list)}
        </div>
        <button onClick={()=>setShowConfirmPage(true)} className="auth-tile-button">Proceed</button>
        </div>
        {showConfirmPage ?
        <ConfirmAuth list={list}/>:null
        }
        </ApplicationContex.Provider>
    )
}


export default PatternAuth;