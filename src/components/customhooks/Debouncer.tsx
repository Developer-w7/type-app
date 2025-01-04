
import { useState, useRef, useEffect } from "react";

export const Debounc = (count:number,delay:number,setCountable:any):[number,any] =>{
    const timeOutRef:any=useRef();
    const callBackRef=useRef(setCountable);
    const [countDown, setCountDown]=useState<number>(0);

    function setTimer(){
        timeOutRef.current=setTimeout(() =>{setCountable(count)},3000)
    }
    function clearTimer(){
       timeOutRef.current && clearTimeout(timeOutRef.current) 
    }
    useEffect(() => {
        clearTimer()
        setTimer()
    }, [count]);
    
    useEffect(() => {
        clearTimer()
    }, []);
    
    return [countDown,setCountDown]
}

