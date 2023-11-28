import { createContext } from "react";
import { PokemonProvider, usePokemon } from "../store/store";

const ThemeContext = createContext<string>("light");

// search without reducer
// const SearchBox = () => {
//     const { search, setSearch } = usePokemon();
//     return (
//         <input type="text" value={search} onChange={(e) => setSearch(e.target.value)}/>
//     )
// }

const SearchBox = () => {
    const { search, setSearch } = usePokemon();
    return (
        <input type="text" value={search} onChange={(e) => setSearch(e.target.value)}/>
    )
}

const PokemonList = () => {
    const { pokemon } = usePokemon();

    return (
        <div>
            {pokemon.map((p => <div key={p.id}>{p.name}</div>))}
        </div>            
    )
}

export const ContextCutomHooksSearch = () => {

    return ( 
        <ThemeContext.Provider value="dark">
            <PokemonProvider>
                <h1>Context Custom hooks page search</h1>
                <SearchBox/>
                <PokemonList/>
            </PokemonProvider>
        </ThemeContext.Provider>            
    )
}