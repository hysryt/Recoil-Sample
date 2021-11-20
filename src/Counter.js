import { atom, useRecoilState } from "recoil";

const counterState = atom({
    key: 'counterState',
    default: 0,
})

function Counter() {
    const [counter, setCounter] = useRecoilState(counterState);
    return (
        <div>
            {counter}<br />
            <button onClick={() => {setCounter(count => count + 1)}}>+</button>
            <button onClick={() => {setCounter(count => count - 1)}}>-</button>
        </div>
    );
}

export default Counter;