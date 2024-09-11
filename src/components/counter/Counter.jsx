import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../../states/counter/counterSlice";

const Counter = () => {
    const count = useSelector(state =>  state.counter.value )
    const dispath = useDispatch()

    return (
        <div>
            <div>
                <button aria-label="Increment value"
                        onClick={() => dispath(increment())}>
                    Increment
                </button>
                <span>{count}</span>
                <button aria-label="Decrement value"
                        onClick={() => dispath(decrement())}>
                    Decrement
                </button>
            </div>
        </div>
    )
}

export default Counter;