import { ChangeEvent, useState } from "react"

export const UseStatePage = () => {
    return (
        <div className="App">
            <Counter/>
            <Counter/>
            <Names/>
        </div>
    )
}

function Counter () {
    const [count, setCount] = useState(0);
    
    const hanldeClicked = () => {
        setCount(count + 1);
    }
    
    return (
        <button
            onClick={hanldeClicked}
        >
            {count}
        </button>
    )
}

function Names () { 
    const [names, setNames] = useState(["a","b","c"]);
    const [input, setInput] = useState("");

    const handleClick = () => {
        setNames([...names, input]);
        setInput("");
    }

    return(
        <div>
            <ul>
                {names.map((n,i) => 
                    <li key={i}>{n}</li>
                )}                 
            </ul>
            <input 
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}></input>
            <button onClick={handleClick}>input</button>

        </div>
    )

}
