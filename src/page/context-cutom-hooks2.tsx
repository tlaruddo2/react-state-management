import { useEffect, useState, createContext, useContext } from "react";

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

const usePokemon = (): { pokemon: Pokemon[] } => {
    const [pokemon, setPokemon] = useState<Pokemon[]>([]); 

    useEffect(()=>{
        fetch("/pokemon.json")
            .then(response => response.json())
            .then(data => setPokemon(data));
    }, [])    

    return { pokemon };
}

// const PoketmonList = ({ pokemon }: { pokemon: Pokemon[] }) => {
//     const theme = useContext(ThemeContext);

//     return (
//         <div>
//             <div>theme: {theme}</div>
//             {pokemon.map((p => (
//                 <div key={p.id}>{p.name}</div>
//             )))}
//         </div>
//     )
// }

const PokemonListWithCtx = () => {
    const {pokemon} = useContext(PokemonContext);

    return (
        <div>
            {pokemon.map((p => (
                <div key={p.id}>{p.name}</div>
            )))}
        </div>            
    )
}

const ThemeContext = createContext<string>("light");
const PokemonContext = createContext({
    pokemon: [] as Pokemon[]
});

export const ContextCutomHooksPage2 = () => {

    // const { pokemon } = usePokemon();

    return ( 
        <ThemeContext.Provider value="dark">
            <PokemonContext.Provider value={usePokemon()}>
                <div>
                    <h1>Context Custom hooks page2 </h1>
                    {/* what if we don't want to put property here? >> use context */}
                    {/* <PoketmonList pokemon={pokemon}/>  */}
                    <PokemonListWithCtx/>
                </div>
            </PokemonContext.Provider>
        </ThemeContext.Provider>            
    )
}