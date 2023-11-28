import { createContext } from "react";
import { PokemonProvider, usePokemon } from "../store/store";

/* 
what is I don't want to use directly context? 
-> make hook to use context 
 */

const ThemeContext = createContext<string>("light");


const PokemonList = () => {
    const { pokemon } = usePokemon();

    return (
        <div>
            {pokemon.map((p => (
                <div key={p.id}>{p.name}</div>
            )))}
        </div>            
    )
}

export const ContextCutomHooksPage3 = () => {

    return ( 
        <ThemeContext.Provider value="dark">
            <PokemonProvider>
                <h1>Context Custom hooks page3 </h1>
                <PokemonList/>
            </PokemonProvider>
        </ThemeContext.Provider>            
    )
}