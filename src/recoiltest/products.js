import { Outlet } from "react-router-dom"
import DiscreteSlider from "./slider"
import { selectorFamily, useRecoilRefresher_UNSTABLE, useRecoilState, useRecoilValue, useResetRecoilState, useSetRecoilState } from "recoil";
// import { currentUpdateList, productCountState, productFetchQuery, productReloadQueryTwo, productState } from "../atoms/productAtom";
import { useEffect } from "react";
const userInfoQuery = selectorFamily({
    key: 'UserInfoQuery',
    get: limit => async () => {
        console.log('called')
        const response = await fetch(`https://fakestoreapi.com/products?limit=${limit}`)
        .then(res=>res.json())
        .then(json=>json)
        .catch(e=>e)
     
  return response;
    }
  })

  const userInfoQueryTwo = selectorFamily({
    key: 'UserInfoQueryTwo',
    get: limit => async () => {
        console.log('called')
        const response = await fetch(`https://fakestoreapi.com/products/categories`)
        .then(res=>res.json())
        .then(json=>json)
        .catch(e=>e)
     
  return response;
    }
  })

  
const Products = () => {
    // const productText = useRecoilValue(productCountState);
    // const products = useRecoilValue(productState);
    // const [productss,productUpdates] = useRecoilState(productFetchQuery);
    // const [productss,productUpdates] = useRecoilState(productReloadQueryTwo(10));
    // const reset = useResetRecoilState(productFetchQuery);
    // const productUpdate = useSetRecoilState(productFetchQuery);
    // const refreshUserInfo = useRecoilRefresher_UNSTABLE(productFetchQuery);
    const products = useRecoilValue(userInfoQuery(5));
    const refreshUserInfo = useRecoilRefresher_UNSTABLE(userInfoQuery(5));
    // const productReload = useGet(productFetchQuery);
    // const [currentProducts,updateProd] = useRecoilState(currentUpdateList);

    // const prods= useRecoilValue(productReloadQueryTwo(10));
    // console.log("Products rendered")

    // useEffect(()=>{
    //     console.log(prods)
    // },[prods])
  

    const addToCart=(item)=>{

    }
    const updateList=()=>{
//   updateProd();
refreshUserInfo();
// productUpdates()
// reset()
    }
    const addProduct=async()=>{
        let item =[{
            "id": Math.random(),
            "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
            "price": 109.95,
            "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
            "category": "men's clothing",
            "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
            "rating": {
                "rate": 3.9,
                "count": 120
            }
        }]

        // console.log(await productUpdate(item))
    }

 
    return (
        <main className="App">
           <p>Products</p>
           <button onClick={()=>addProduct()}>Add New</button>
           <button onClick={()=>updateList()}>Update List</button>
           <button onClick={() => refreshUserInfo()}>Refresh</button>

           {/* <p>{productText}</p> */}
           {products.map(item=><div key={item.id}><p>{item.title}:{item.price}</p><button onClick={(item)=>{addToCart(item)}}>Add</button></div>)}

        </main>
    )
}

export default Products
