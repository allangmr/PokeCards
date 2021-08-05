export const getPoke = async(poke) => {
    const url = `https://api.pokemontcg.io/v2/cards?q=name:${ encodeURI(poke) }&&pageSize=12`;
    const resp = await fetch(url);
    const {data} = await resp.json();
    const pokes = data.map(img => {
        return{
            id: img.id,
            name: img.name,
            supertype: img.types,
            flavorText: img.flavorText,
            hp: img.hp,
            images: img.images.small,
            nationalPokedexNumbers: img.nationalPokedexNumbers
        }
    })
    return pokes;
}
