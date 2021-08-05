import React, { useState } from 'react'
import Card from './Card'
import FindPoke from './FindPoke'

function PokedexApp() {
    const [pokeDex, setPokeDex] = useState(['charizard']);
    return (
        <div>
            <div class="flex flex-wrap justify-center space-x-4 flex-shrink-0 py-5 bg-red-600 text-white">
                <div>
                    <img className="h-10 md:w-10" src="/logo.png" alt="Man looking at item at a store"/>   
                </div> 
                <div>
                    <h1>PokeCards</h1>
                </div>
            </div>
            <FindPoke setPokeDex={setPokeDex}/>

                { 
                    pokeDex.map(pokemon =>(
                        <Card key={pokemon} poke={pokemon}/>
                    ))
                }
        </div>
    )
}

export default PokedexApp

