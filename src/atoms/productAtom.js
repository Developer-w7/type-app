import { atom, selector, selectorFamily } from "recoil";







  export const productFetchQuery = selector({
    key: 'productFetch',
    get: async ({get}) => {
      const response = await fetch('https://fakestoreapi.com/products?limit=5')
            .then(res=>res.json())
            .then(json=>json)
            .catch(e=>e)
            if (response.error) {
              throw response.error;
            }
            console.log(response)
      return response;
    },
    set: ({ set, get }, newData) => {
      // Update state w/ new appended values
      const currentState = get(productState);
      const newState = [...currentState, ...newData];
      set(productState, newState);
  },
  });



  // export const productReloadQuery = selector({
  //   key: 'productReloadFetch',
  //   get: async ({get}) => {
  //     const response = await fetch('https://fakestoreapi.com/products?limit=5')
  //           .then(res=>res.json())
  //           .then(json=>json)
  //           .catch(e=>e)
  //           if (response.error) {
  //             throw response.error;
  //           }
  //           console.log(response)
  //     return response;
  //   },
  //   set: ({ set, get }, newData) => {
  //     // Update state w/ new appended values
  //     const currentState = get(productState);
  //     const newState = [...currentState, ...newData];
  //     set(productState, newState);
  // },
  // });

  export const productReloadQueryTwo = selectorFamily({
    key: 'productReloadFetchTwo',
    get: limit=> async ({get}) => {
      const response = await fetch(`https://fakestoreapi.com/products?limit=${limit}`)
            .then(res=>res.json())
            .then(json=>json)
            .catch(e=>e)
            if (response.error) {
              throw response.error;
            }
            console.log(response)
      return response;
    },
    set: ({ set, get }, newData) => {
      // Update state w/ new appended values
      const currentState = get(productState);
      const newState = newData;
      set(productState, newState);
  },
  });


  // export const currentUpdateList = selector({
  //   key: 'CurrentUserInfoQuery',
  //   get: ({get}) => get(productReloadQuery()),
  // });

export const productState = atom({
  key: 'products', // unique ID (with respect to other atoms/selectors)
  default: productFetchQuery, // default value (aka initial value)
});


  export const productCountState = selector({
    key: 'productCountState', // unique ID (with respect to other atoms/selectors)
    get: ({get}) => {
      const products = get(productState);
      // fetch('https://fakestoreapi.com/products')
      //       .then(res=>res.json())
      //       .then(json=>console.log(json))
  
      return `${products.length} number of products `;
    },
  });



