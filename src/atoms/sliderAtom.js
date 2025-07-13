import { atom, selector } from "recoil";

export const sliderState = atom({
    key: 'sliderRange', // unique ID (with respect to other atoms/selectors)
    default: 10, // default value (aka initial value)
  });

  export const sliderRangeTextState = selector({
    key: 'charCountState', // unique ID (with respect to other atoms/selectors)
    get: ({get}) => {
      const text = get(sliderState);
  
      return text.toString()+"%";
    },
  });