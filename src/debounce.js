import React, { useRef } from "react";

const Debounce = (value, time) => {
  const [searchText, setSearchText] = React.useState("");
  const timeOutRef = useRef();
  function setTimer() {
    timeOutRef.current = setTimeout(() => {
      setSearchText(value);
    }, 1000);
  }

  function clearTimer() {
    timeOutRef.current && clearTimeout(timeOutRef.current);
  }

  //   const reset = () => {
  //     if (controllerRef.current) {
  //       clearTimeout(controllerRef.current);
  //     }
  //   };
  React.useEffect(() => {
    clearTimer();
    setTimer();
  }, [value]);

  // React.useEffect(() => {
  //   // reset();
  // }, [value, time]);
  React.useEffect(() => {
    clearTimer();
  }, []);

  return searchText;
};

export default Debounce;
