import { useState, useMemo, useCallback } from "react"

interface SortedListProps{
    list: string[]
}
// running twice at first time?: mounting component twice since in react 18 (stric mode and dev mode)
// all components mounted(run) twice 
const SortedList = ( { list }: SortedListProps) => {
    //SortedList component everytime any state in UseCallbackPage component is change 
    console.log("SortedList Render");

    const sortedList = useMemo(() => {
        console.log("Running sort");
        return [...list].sort()
    }, [list]);

    return <div>{sortedList.join(", ")}</div>
}

//what if make SortedList smarter? make sorted function as parameter
interface SortedList2Props{
    list: string[],
    sortFunc: (a: string, b: string) => number
}
// every time we render UseCallbackPage, we render SortedList and sort list again in it 
// because dependency (sortFunc) > 
// sortFunct have same reference everytime render but diff reference >>> so re run sortedList
// inline function works same way 
// solution 1: make global function outside of component (not efficient)
// solution 2: use callback
const SortedList2 = ({ list, sortFunc }: SortedList2Props) => {
    console.log("SortedList2 Render");

    const sortedList = useMemo(() => {
        console.log("Running sort2");
        return [...list].sort(sortFunc);
    },[list, sortFunc])

    return <div>{sortedList.join(", ")}</div>
}

// when use useCallback? 
// when we want to stablized the reference of function that use as callback function (go to paramter of other components)
// ex. sortFunc go to paramter sortedList but we don't know how SortedList is implemented inside 
// then if we want to stablize the reference of sortFunc (not refernece change)

// other use: custom hook since we don't know how a component tha custom hook involved is implemented inside
const SortedList3 = ({ list, sortFunc }: SortedList2Props) => {
    console.log("SortedList3 Render");

    const sortedList = useMemo(() => {
        console.log("Running sort3");
        return [...list].sort(sortFunc);
    },[list, sortFunc])

    return <div>{sortedList.join(", ")}</div>
}

export const UseCallbackPage = () => {
    const [numbers] = useState([10, 20, 30]); 

    const [count1, setCount1] = useState(0); 
    const [count2, setCount2] = useState(0);

    const total = useMemo(() => numbers.reduce((acc, n) => acc + n , 0), [numbers])

    const [names] = useState(["John", "Paul", "George", "Ringo"]);
 
    const sortFunc = (a:string , b:string) => a.localeCompare(b) * - 1;
    const sortFunc2 = useCallback((a:string , b:string) => a.localeCompare(b) * - 1, []);

    return (
        <div>
            <h1>useMemo Example</h1>
            <div>{total} </div>
            <button onClick={() => setCount1(count1 + 1)}>{count1}</button>            
            <button onClick={() => setCount2(count2 + 1)}>{count2}</button>       
            <div>{names.join(", ")}</div>     
            <SortedList list={names}/>
            <SortedList2 list={names} sortFunc={sortFunc}/>
            <SortedList3 list={names} sortFunc={sortFunc2}/>
        </div>

    )
}