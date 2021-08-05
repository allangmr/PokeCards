import React from 'react'
import { useFetchPoke } from '../hooks/useFetchPoke';
import CardItem from './CardItem';

function Card({poke}) {
    const {loading, data:images} = useFetchPoke(poke);
    return (
        <>
            <h2 className="uppercase text-center text-2xl text-bold py-5">{poke}</h2>
            {loading && <p className="text-center">Loading</p>}
            <div className="grid lg:grid-cols-2 sm:grid-cols-1 md:grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 mx-auto">
            {images.map((img) => (
                <CardItem {...img} key={img.id} loading={loading}/>
            ))}
            </div>
        </>
    )
}

export default Card
