import { useContext, useId, createContext, useState, useEffect } from "react";
import { ApplicationContex } from "./PatternAuth";


type listItems={
    list:string[]
};


function ConfirmAuth({list}:listItems):JSX.Element {
const unxId =useId();

const ContexValue = useContext(ApplicationContex);
const [selectedList, setSelected]=useState<{}[]>([]);

const [listItems, setItems]=useState<{}[] | null>(null);

function manageSelection(itm:any){
    let tempList:any=[...selectedList];
    if(tempList.map((i:any)=>i.item).includes(itm.item)) return null;
    let index =tempList.findIndex((i:any)=>i.item ==="");
   
    if(index >= 0) tempList[index].item = itm.item;
    setSelected(tempList);
}

function removeSelection(itm:any){
    let tempList:any=[...selectedList];
    let index =tempList.findIndex((i:any)=>i.item === itm.item);
    
    if(index >= 0) tempList[index].item = "";
    setSelected(tempList);
}



function confirmList(){
    let tempList:any=[...selectedList];
    let emptyIndex =tempList.findIndex((i:{index:number,item:string})=>i.item === "");
    if(emptyIndex >= 0) {alert('Please select ALL items'); return null;}

    let validity = true;
    tempList.forEach((i:any) => {
        let itemFound:any =listItems?.find((v:any)=>v.item === i.item) || null;
        if(i.index !== itemFound.index) validity = false;
        // console.log(itemFound)

    });
   validity === true? alert('successfully matched'):alert('Fail matching');
    return validity;
}

useEffect(() => {
let itemList:{}[] =list.map((v,index) => {return({index,item:""})})
    let shuffled:{}[] = itemList
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value).slice(3)
   setSelected(shuffled);
}, [list]);

useEffect(() => {
    processListItems(list)
}, [list]);

function processListItems(items:string[]):void{
let itemList:{}[] =items.map((v,index) => {return({index,item:v})})
// console.log(itemList)
let shuffled:{}[] = itemList
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)
// let randomList=itemList.sort(() => (Math.random() > .5) ? 1:-1);
// console.log(shuffled)
setItems(shuffled)
// return shuffled.map((v:any,index)=><span onClick={()=>manageSelection(v)} className="auth-items" key={index+unxId}>{v.item}</span>)

}
// console.log(itemList)
function processSelectedItems(items:{}[]):JSX.Element[] {
    return items.map((v:any,index)=><span className="auth-items" key={index+unxId}>{v.index+1}{v.item}</span>)
}

    return(
        <>
        <div className="auth-tile-wrap">
       
         {processSelectedItems(selectedList)}  
         </div>
    
       
        <div style={{display:'flex',width:'100%',flexDirection:"row", justifyContent:'center',gap:10}}>
         {listItems ? listItems.map((v:any,index)=><div style={{position:'relative'}}>{selectedList.map((i:any)=>i.item).includes(v.item) && <span style={{position:'absolute',right:5,top:-12,color:"#fff",cursor:'pointer'}} onClick={()=>removeSelection(v)}>x</span>}<span onClick={()=>manageSelection(v)} className="auth-items" key={index+unxId}>{v.item}</span></div>):null}
         </div>
        <button onClick={()=>confirmList()} className="auth-tile-button">Confirm</button>
        </>
    )
}


export default ConfirmAuth;