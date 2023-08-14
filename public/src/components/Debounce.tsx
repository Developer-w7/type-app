import React,{useCallback, useEffect, useRef, useState, useTransition} from 'react';
import { ReactNode } from 'react';
import {Debounc} from './customhooks/Debouncer';

type DebounceComponentProps={
    delay:number;
}



function Debounce({delay}:DebounceComponentProps) {
    const [count, setCount]=useState<number>(0);
    const [countable, setCountable]=useState(0);
    const [countDown, setCountDown]= Debounc(count,delay,setCountable);


    useEffect(() => {
        console.log(countDown);
    }, [countDown]);


const calculateThings=useCallback(()=>{
    let counter=0;
for(let i=0;i < 100000;i++){
    counter+=1;
}
for(let i=0;i < 100000;i++){
    counter+=1;
}
for(let i=0;i < 100000;i++){
    counter+=1;
}
for(let i=0;i < 100000;i++){
    counter+=1;
}
console.log('completed',counter)
},[countable])

const [isPending, startTransition] = useTransition()


return(
    <>
    <p>{count}</p>
    <p>{countable}</p>
    {/* {calculateThings()} */}
    <button onClick={()=>setCount(count+1)}>Add Count</button>
   
    <button onClick={()=>setCountable(Math.random())}>Add Count</button>

    <button onClick={()=>setCountDown(countDown+1)}>Add CountDown</button>
    </>
)
}


export default Debounce;