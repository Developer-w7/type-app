import { useRef, useState, useEffect, FC } from 'react';
import Clock from 'react-live-clock';


import useAuth from '../../hooks/useAuth';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import axios from '../../api/axios';
import useAxiosPrivate from '../../hooks/useAxiosPrivate';
import useLogout from '../../hooks/useLogout';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import './styles/dash.css';
import "./styles/prod.css";


const LOGIN_URL = '/auth1';
const LOGOUT_URL = '/logout';


interface Props{
  productData:any|null;
}

export default function Dress({productData}:Props) {
  const axiosPrivate = useAxiosPrivate();
  const logout = useLogout();
  const count = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch()


  // States
  const [productDetails, setProductDetails] = useState<any>(null);
  const [cartDetails, setCartDetails] = useState<any>([]);
  

  useEffect(() => {
    // console.log(productData) 
}, [productData]);

const getProductDetails = (id:any)=>{

fetch(`https://dummyjson.com/products/${id}`)
.then(res => res.json())
.then((data)=>{
  setProductDetails(data);
  console.log(data);
});

}

const checkProductExistOnCart=(item:any,cart:any)=>{

  let newCart:any =[...cart];

  let product=newCart.filter((v:any)=>v.id === item.id);
   
  let index = newCart.findIndex((v:any)=>v.id === item.id);

  
  console.log([index,product])
  return [index,product]

}
const manageCart= (item:any)=>{
  let cart =[...cartDetails];
  let [index,product]=checkProductExistOnCart(item,cart);
  console.log(product)
  if(index >= 0){
    cart[index]={...item,count:cart[index].count !== undefined?cart[index].count+1:1}
  }else{
  cart.push(item);
  }
  setCartDetails(cart);

}


  return (
    
  <div className='flex-h'>
    <div className='prod-panel-wrapper' style={{}}>
  
    <div><span><h3>Kids Dress</h3></span></div>
    <ul>{ productData && productData.products.map((product:any)=><li>
          <span onClick={()=>getProductDetails(product.id)}>{product.title}</span>
    </li>)}
    </ul>
    </div>
    { productDetails &&
    <div className='prod-details-wrapper'>
      
         <div className='prod-details'>
          <img className='prod-img' src={productDetails.images}/>
<ul>
<li>{productDetails.sku}</li>
<li>{productDetails.title}</li>
<li>{productDetails.description}</li>
<li>{productDetails.availabilityStatus}</li>
<li>{productDetails.weight}</li>
<li>{productDetails.category}</li>

<li>{productDetails.discountPercentage}</li>

<li>{productDetails.availabilityStatus}</li>

<li>{productDetails.price}</li>
<li>{productDetails.rating}</li>
<li>{productDetails.returnPolicy}</li>
</ul>
<div>
<button onClick={()=>{manageCart({id:productDetails.id,title:productDetails.title,price:productDetails.price,image:productDetails.images,weight:productDetails.weight})}}>BUY</button>
</div>

</div>
      

</div>
}
{ cartDetails?.length>0 &&
<div className='cart-details-wrapper'>
      

<div className='cart-item-wrapper'>
 {cartDetails.map((item:any)=>
  

      <div className='cart-item'>
      <img className='prod-img' src={item.image}/>
<ul>
<li>id:{item.id}</li>
<li>{item.title}</li>

<li>{item.weight}</li>
<li>{item.count}</li>

<li>{item.price}</li>

</ul>


</div>


)}

</div>
<button onClick={()=>{manageCart({id:productDetails.id,title:productDetails.title,price:productDetails.price,image:productDetails.image})}}>Checkout</button>

</div>
}


</div>
   
  );
}
