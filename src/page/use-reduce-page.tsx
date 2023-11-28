import { useReducer } from "react";

/*
Declar state 2 in react : useReducer() 
- unlike useState(), useReducer can handle more complex state in difference situation

based on javscript.reduce() function 
same pattern works in Redux as well
*/

export const UseReducePage = () => {
    const [ state, dispatch ] = useReducer((state: any, action: any) => {
        switch (action.type){
            case "SET_NAME": 
                return {...state, name: action.payload};
            case "SET_NAMES": 
                return {...state, names: [...state.names, state.name], name:""}
        }
    },
    {
        name: "",
        names: [],
    });

    return (
        <div>
            <FormName/>
            <ul>
                {state.names.map((n:any , i:number) => <li key={i}>{n}</li>)}
            </ul>
            <h1>use reducer example</h1>
            <input 
                type="text" 
                value={state.name}
                onChange={e => {dispatch({type: "SET_NAME", payload: e.target.value})}}
            />
            <button
                onClick={() => dispatch({type: "SET_NAMES"})}
            >add name</button>
        </div>
    );
}

// combining existing state with whatever in action 
function FormName () {
    const [ state, dispatch ] = useReducer((state: any, action: any)=>{
        return{
            ...state,
            ...action
        }
    },
    {
        first: " ",
        last: " ",
    });

    return (
        <div>
            <input type="text" value={state.first} onChange={e => dispatch({first: e.target.value})}/>
            <input type="text" value={state.last} onChange={e => dispatch({last: e.target.value})}/>

            {/* put action with valeu not initialized, also possible */}
            <input type="text" value={state.new} onChange={e => {
                dispatch({new: e.target.value})
                console.log(state.new);
            }}/>
            

            <div>first: {state.first}</div>
            <div>last: {state.last}</div>

            <button
                onClick={() => {
                    dispatch({first: " "});
                    dispatch({last: " "});
                }}
            >
                remove first name and last name
            </button>

        </div>
    )
}