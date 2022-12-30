import { useCounter } from "../hooks/useCounter"

export const CounterWithCustomHook = () => {

    const { counter, increment, decrement, reset } =  useCounter()

  return (
    <>
        <h1>Counter with Hook: { counter }</h1>
        <hr />

        <button 
            className="btn btn-outline-primary"
            onClick={ () => increment(5) }
            >+1</button>
        <button 
            className="btn btn-outline-secondary"
            onClick={ reset }
            >Reset</button>
        <button 
            className="btn btn-outline-success"
            onClick={  () => decrement(5) }
            >-1</button>
    </>
  )
}
