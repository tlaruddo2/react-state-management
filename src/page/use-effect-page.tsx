/*
most often coporate with initity loop
common use 
1. api request (related data)
2. setInterval
*/

import { useEffect, useState } from "react";

const Stopwatch = () => {
    const [time, setTime] = useState(0); 

    // if use like this, whenver Stopwatch render again, new setInterval created
    // setInterval ( () => {
    //     setTime(time + 1);
    // }, 1000)

    // but number is stick with 1 
    // when userEffect capture function (setInterval) - when mount component first, time is zero 
    // solution below 
    // useEffect(() => {
    //     setInterval( () => {
    //         // console.log(time); // getting only 0 here again
    //         setTime(time + 1);
    //     }, 1000)
    // }, [])

    // 1. add dependency (time)
    // useEffect(() => {
    //     setInterval( () => {
    //         // console.log(time); // getting only 0 here again
    //         setTime(time + 1);
    //     }, 1000)
    // }, [time])    

    // 2. add function setTime
    // clean function (clear all data and new function )
    useEffect(() => {
        const interval = setInterval( () => {
            // console.log(time); // getting only 0 here again
            setTime(currentTime => currentTime + 1);
        }, 1000)
        return () => clearInterval(interval); // return clean up function 
    }, [])        

    return ( 
        <div>
            time: {time}
        </div>
    )
}

export const UseEffectPage = () => {
    const [names, setNames] = useState([]);
    const [selectedName, setSelectedName] = useState(null);
    const [selectedNameData, setSelectedNameData] = useState(null);

    // make infinity loop 
    // process: render component first > fetch data > setNames > state updated > render again > infinity loop
    // solution: useEffect
    // fetch("/names.json")
    //     .then((response => response.json()))
    //     .then(data => setNames(data));

    // hold function and call whenever we want
    // but fetch(names) >> twice >> why? because of strict mode mount component twice
    useEffect(() => {
        fetch("/names.json")
            .then(response => response.json())
            .then(data => setNames(data));
    },[])

    // make data when selected name change
    // when it render first time, it fetch null.json >> add one more condition >below
    // useEffect(() => {
    //     fetch(`${selectedName}.json`)
    //         .then(response => response.json())
    //         .then(data => setSelectedNameData(data));
    // },[selectedName])

    // but this wrong way 
    // why, this triggered by event >> put onchange better choice >> below 
    // useEffect(() => {
    //     if (selectedName){
    //         fetch(`${selectedName}.json`)
    //             .then(response => response.json())
    //             .then(data => setSelectedNameData(data));
    //     }
    // },[selectedName])    

    // then no potential problem with useEffect 
    // combination with useState and useEffect to responde user's reaction
    // this way is better 
    // limit amount of useEffect
    const onSelectedNameChange = (name: string) => {
        fetch(`${name}.json`)
            .then(response => response.json())
            .then(data => setSelectedNameData(data));
    }

    return ( 
        <div>
            <h1>useEffect page</h1>
            <Stopwatch/>
            <div>Names: {names.join(", ")}</div>
            {names.map((name, i) => 
                <button onClick={() => onSelectedNameChange(name)}key={i}>{name}</button>
            )}
            <div>selected name: {selectedName}</div>
            <div>selected name data: {JSON.stringify(selectedNameData)}</div>
        </div>
    )
}