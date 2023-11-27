/*
other way to store state in component 
when we chcange  value of refernce, it doesn't make re-render 

two way to use useRef 
1. common : get reference of html element
2. state management side way: state manage without update(re-rendeR) // uncontrolled value
*/


import { useEffect, useRef, useState } from "react"

interface Person{
    id: number,
    name: string
};

export const UseRefPage = () => {
    const inputRef = useRef<HTMLInputElement>(null);
    const inputRef2 = useRef<HTMLInputElement>(null);
    const idRef = useRef(1);
    const [names, setNames] = useState<string[]>([]);
    const [names2, setNames2] = useState<Person[]>([
        {id: idRef.current++, name: "jone"},
        {id: idRef.current++, name: "jane"}
    ]);


    // use case 1
    useEffect(() => {
        // inputRef: pointer 
        // current: current value associated with that reference, we can set value and read from
        if (inputRef.current){
            inputRef.current.focus();
        }
    }, [])

    // use case 2 
    const onAddName = () => {
        if (names && inputRef.current){
            setNames([...names, inputRef.current.value]) //uncontrolleed input >> efficernt way to manage state
            inputRef.current.value = "";
        }
    }

    // use case 2-2
    const onAddNameDetail = () => {
        if (names2 && inputRef2.current){
            setNames2(
                [...names2,
                {id: idRef.current++, name: inputRef2.current.value} //keep this without re-render
            ])
            inputRef2.current.value = "";
        }
    }

    return ( 
        <div>
            <h1>useRef page example</h1>
            {names.map(name => <div key={name}>{name}</div>)}
            {names2.map(nameDetail => <div key={nameDetail.id}>{JSON.stringify(nameDetail)}</div>)}


            <input type="text" ref={inputRef}/>
            <input type="text" ref={inputRef2}/>
            <button onClick={onAddName}>Add name</button>
            <button onClick={onAddNameDetail}>Add name ST</button>
        </div>
    )
}