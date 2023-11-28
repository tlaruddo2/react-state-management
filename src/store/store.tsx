import { useEffect, useReducer, createContext, ReactNode, useContext, useMemo, } from "react";

interface Pokemon{
    id: number, 
    name: string,
    type: string[], 
    hp: number, 
    attack: number,
    defence: number,
    special_attack: number, 
    special_defence: number,
    speed: number
}

const PokemonContext = createContext<ReturnType<typeof usePokemonData>>(
    {} as unknown as ReturnType<typeof usePokemonData>
);

// search without reducer
// const usePokemonData = (): {
//      pokemon: Pokemon[],
//      search: string,
//      setSearch: React.Dispatch<React.SetStateAction<string>>
//     } => {
//     const [pokemon, setPokemon] = useState<Pokemon[]>([]); 
//     const [search, setSearch] = useState<string>("");

//     useEffect(()=>{
//         fetch("/pokemon.json")
//             .then(response => response.json())
//             .then(data => setPokemon(data));
//     }, [])    

//     const filterdPokemon = useMemo(
//         () => [...pokemon].filter(p => p.name.toLowerCase().includes(search.toLowerCase())), 
//         [pokemon, search] )

//     const sortedPokemon = useMemo(
//         () => [...filterdPokemon].sort((a,b) => a.name.localeCompare(b.name)), 
//         [filterdPokemon]
//     )

//     return { pokemon: sortedPokemon, search, setSearch };
// }

type PokemonState = { 
    pokemon: Pokemon[],
    search: string
};

type PokemonAction = { type: "setPokemon", payload: Pokemon[] } | { type: "searchPokemon", payload: string }

// search with reducer
const usePokemonData = (): {
    pokemon: Pokemon[],
    search: string,
    setSearch: (search: string) => void
   } => {
//    const [pokemon, setPokemon] = useState<Pokemon[]>([]); 
//    const [search, setSearch] = useState<string>("");

    const [ { pokemon, search }, dispatch ] = useReducer((state: PokemonState, action: PokemonAction) => {
        switch(action.type){
            case "setPokemon":
                return { pokemon: action.payload, search: ""}
            case "searchPokemon": 
                return  { ...state, search: action.payload}
        }},
    {
        pokemon:[],
        search: ""
    });

   useEffect(()=>{
       fetch("/pokemon.json")
           .then(response => response.json())
           .then(data => dispatch({type: "setPokemon", payload: data}));
   }, [])    

   const setSearch = (search: string) => {
        dispatch({type: "searchPokemon", payload: search})
   }

   const filterdPokemon = useMemo(
       () => [...pokemon].filter(p => p.name.toLowerCase().includes(search.toLowerCase())), 
       [pokemon, search] )

   const sortedPokemon = useMemo(
       () => [...filterdPokemon].sort((a,b) => a.name.localeCompare(b.name)), 
       [filterdPokemon]
   )

   return { pokemon: sortedPokemon, search, setSearch };
}

export const usePokemon = () => {
    return useContext(PokemonContext);
}

export const PokemonProvider = ({ children }: {children: ReactNode}) => {

    return ( 
        <PokemonContext.Provider value={usePokemonData()}>
            {children}
        </PokemonContext.Provider>
    )
}


