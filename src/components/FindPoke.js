import { useState, useEffect, useRef } from 'react'

const FindPoke = ({setPokeDex}) => {

    const [inputValue, setInputValue] = useState('');
    const handleInputChange = e =>{
        setInputValue(e.target.value)
    }
    const handleSubmit = (e) =>{
        e.preventDefault();

        if( inputValue && inputValue.trim().length >2){
            setPokeDex(prev => [inputValue, ...prev])
            setInputValue('');
        }
    }
    const pokeCard = useRef();

    useEffect(()=>{
        pokeCard.current.focus();
    }, []);

    return (
        <div className="text-center mt-4">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                    ref={pokeCard}
                    className="my-3 py-2 rounded text-center text-black placeholder-gray-600 focus:placeholder-gray-400"
                    placeholder="Choose your pokemon and press enter..."
                />
            </form>
        </div>
    )
}


export default FindPoke