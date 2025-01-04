import { Outlet } from "react-router-dom"
import { atom, atomFamily, errorSelector, useRecoilCallback, useRecoilSnapshot, useRecoilState, useRecoilValue } from "recoil";
import { sliderRangeTextState, sliderState } from "../atoms/sliderAtom";


const elementPositionStateFamily = atomFamily({
    key: 'ElementPosition',
    default: param => param===1?[]:[2,4,5],
  });
  
  function ElementListItem({elementID}) {
    const position = useRecoilValue(elementPositionStateFamily(elementID));
    const [val,set] = useRecoilState(elementPositionStateFamily(elementID));
    return (
      <div>
        Element: {elementID}
        Position: {position}
        <button onClick={()=>set(['f','l'])}>set value</button>
      </div>
    );
  }

  const myAtom = atom({
    key: 'My Atom',
    default: errorSelector('Attempt to use Atom before initialization'),
  });

  const itemsInCart = atom({
    key: 'itemsInCart',
    default: {a:1,b:6},
  });
const Cart = () => {
    
    const rangeText = useRecoilValue(sliderRangeTextState);
    const [item,setItem] = useRecoilState(itemsInCart);
    const logCartItems = useRecoilCallback(({snapshot}) => async () => {
        const numItemsInCart = await snapshot.getPromise(itemsInCart);
        console.log('Items in cart: ', numItemsInCart);
      }, []);
    
    return (
        <main className="App">
           <p>Cart</p>
           <p>{rangeText}</p>
           {/* <p>{errorext}</p> */}
           <button onClick={()=>{logCartItems();setItem({g:1});logCartItems()}}>Log Cart Items</button>

         {[1,2,3].map(v=><ElementListItem elementID={v}/>)}
        </main>
    )
}

export default Cart
