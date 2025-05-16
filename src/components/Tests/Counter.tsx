import { initial } from 'lodash';
import { init } from 'lodash/fp';
import React, { useEffect } from 'react';
type Props = {
    initialCount: number
}
interface CounterProps {
    initialCount: number;
    increment?: () => void;
    decrement?: () => void;
    reset?: () => void;
    setToTen?: () => void;
    resetSign?: () => void;
}
const Counter = ({initialCount}:CounterProps) => {

    const [count, setCount] = React.useState(initialCount);
    const [sign, setSign] = React.useState('+');

    const increment = () => {
        setCount(count + 1);
    };
    const decrement = () => {
        setCount(count - 1);
    };
    const reset = () => {
        setCount(0);
    };
    const setToTen = () => {
        setCount(10);
    };
    const resetSign = () => {
        setCount(count * -1);
    };


    return (
        <main className="App">
            <h1>Counter</h1>
            <h2 data-testid="count-display" id="count-display">Count: {count}</h2>
            <p>Click the button to increment the count:</p>
            <button onClick={() => increment()}>Increment Button</button>
            <p>Click the button to decrement the count:</p>
            <button onClick={() => decrement()}>Decrement Button</button>
            <p>Click the button to reset the count:</p>
            <button onClick={() => reset()}>Reset Button</button>
            <p>Click the button to set to 10:</p>
            <button onClick={() => setToTen()}>Set to 10 Button</button>
            <p>Click the button to reset sign:</p>
            <button onClick={() => resetSign()}>Reset Sign Button</button>
        </main>
    )
}

export default Counter