 export const getAppPokemon = async (url)=>{
    try{
        const res = await fetch(url)
        const data = await res.json()
        return data
       }catch(error){}
 }

 export const getInfoPokemon = async (url)=>{
    try{
        const res = await fetch(url)
        const data = await res.json()
        return data
       }catch(error){}
 }




