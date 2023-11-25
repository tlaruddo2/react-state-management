import { useState, useMemo } from "react"

export const UseMeMoPage = () => {
    const [numbers] = useState([10, 20, 30]); 

    const [count1, setCount1] = useState(0); 
    const [count2, setCount2] = useState(0);

    // if not use memo, it call whenever component is render 
    // but with useMemo, it only render when numbers is changed or first component mounted
    const total = useMemo(() => numbers.reduce((acc, n) => acc + n , 0), [numbers])

    const [names] = useState(["John", "Paul", "George", "Ringo"]);

    // sort(): in place, sort 
    // it is sorted but not render since names are in same reference.
    // react compnare object or array to re-render by reference.
    // const sortedNames = names.sort();
    // const sortedNames = [...names].sort();
    const sortedNames = useMemo(() => [...names].sort(), [names]);

    return (
        <div>
            <h1>useMemo Example</h1>
            <div>{total} </div>
            <button onClick={() => setCount1(count1 + 1)}>{count1}</button>            
            <button onClick={() => setCount2(count2 + 1)}>{count2}</button>       
            <div>{names.join(", ")}</div>     
            <div>{sortedNames.join(", ")}</div>
        </div>

    )
}