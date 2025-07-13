import * as React from 'react';
import { useState, useEffect } from 'react';
import { Outlet } from "react-router-dom";
import { ReactNode } from 'react';

import { useActionData } from "react-router-dom";
import PatternAuth from './components/PatternAuth';
import CompoundComponent from './components/CompoundComponent';
import Debounce from './components/Debounce';
import PostsTab from './components/PostsTab';
interface HomeProps {
    number: number,
}
interface FloorProps {
    message:string
}

interface PersonNameInterface { name: string }
interface Person1 extends PersonNameInterface { age: number }

type PersonNameType = { name: string }
interface Person2 extends PersonNameType { age: number }

class PersonClass { name = "Jhon" }
interface Person3 extends PersonClass { age: number }

interface Person {
    name: string
    obj: {}
    union: string | number
    tuple: [string, number]
    fun:(x: number,y: number) => number | void | JSX.Element
  }
  type funType = { fun:(x: number,y: number) => number | void }

// primitive
// type Name = string;

// object
// type PersonName = { name: string; };
// type PersonAge = { y: number; };

// union
// type PartialPoint = PersonName | PersonAge;

// tuple
// type Data = [number, string];


type fun=(x: number,y: number) => number | void




const Floor = ({ message}: FloorProps): JSX.Element => <div>{message}</div>;
function Home({number}:HomeProps):JSX.Element {

    const ref = React.useRef<HTMLInputElement>(null)
    const ref2 = React.useRef<number | null>(null)

    let actionData = useActionData();

    console.log(actionData)
    // Array Types
    let superPower1:Array<Number> = [];
    let superPower2:number[] = [];
    let superPower3:number[][][] = [];
    let superPower4:(string|number)[] = [];
    let superPower5:[string,number,boolean] = ["",0,false];
    superPower1.push(20);
    superPower2.push(20);
    superPower3.push([[20,30,40], [20,30,40]])
    superPower4.push(10,20);
    superPower5.push("10",20,true);


    // Enums Types
    enum Power{
        wind=50,
        wave,
        tidel
    }
    const myPower = Power.wind;
    console.log(myPower)

   let setRef:fun=function(x,y){
     return 10;
    }
    useEffect(() => {
        setRef(10,20);
        // throw new Error("error");
    }, []);
    const [isPending, startTransition] = React.useTransition();
    const [tab, setTab] = useState('about');
    if (isPending) {
        console.log('pending')
      }else{
        console.log('completed')
      }

    function selectTab(nextTab:string) {
       startTransition(() => {
          setTab(nextTab);
        });
        // setTab(nextTab);
      }
    return (
        <>
        <p>{isPending}</p>
    {/* <Outlet /> */}
    {/* <p>{number}</p>
    <Floor message='Happy'/> */}
    {/* <PatternAuth list={["apple","orange","kiwi","pine","avo","fig"]}/> */}
    {/* <CompoundComponent title="testTitle"
     titleNode={<CompoundComponent.Title><p>Title</p></CompoundComponent.Title>}
     PriceNode={<CompoundComponent.Title><p>Price</p></CompoundComponent.Title>}
    /> */}
    {/* <Debounce delay={20}/> */}

    <button onClick={()=>selectTab('about')}>about</button>
    <button onClick={()=>selectTab('posts')}>posts</button>
    <button onClick={()=>selectTab('contact')}>contact</button>
    {tab === 'about' && <Floor message='About'/>}
    {tab === 'posts' && <PostsTab/>}
    {tab === 'contact' && <Floor message='contact'/>}
    <Buttons>
     <ButtonSub title="ButtonSub"/>
     h
      <>Haii</>
    </Buttons>
   
    {/* <input type="text" ref={ref} /> */}
        
    </> 
        )
}
function ButtonSub({title}:{title:string}){
  return(<><p>{title}</p></>)
}
function Buttons({children}:{children:ReactNode}){
  return(<>
  {React.Children.map(children,(child)=>{if(React.isValidElement(child)){
    console.log(child); console.log(true)}
    
    })}
  {children}
  
  </>)
}
export default Home;