import { useEffect, useState } from "react";

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

export const ContextCutomHooksPage1 = () => {

    const { pokemon } = usePokemon();

    return ( 
        <div>
            <h1>Context Custom hooks page </h1>
            <div>{JSON.stringify(pokemon)}</div>
        </div>
    )
}