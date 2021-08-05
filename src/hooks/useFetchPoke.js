import { useEffect, useState } from "react"
import {getPoke} from "../helpers/getPoke";

export const useFetchPoke = (poke) => {
    const [state, setState] = useState({
        data:[],
        loading: true
    });
    useEffect( () => {
        getPoke(poke).then(imgs => 
                setState({
                    data:imgs,
                    loading:false
                })
                

        );
    }, [poke])

    return state; //devuelve el state por defecto
}
