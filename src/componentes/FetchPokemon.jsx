import React  from 'react'
import { useEffect, useState } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components'
import searchimg from '../img/search.png'
import {getAppPokemon} from './apiPokemon'
import { NavLink } from 'react-router-dom'

function  FetchPokemon() {
         const [ allPokemon, setAllPokemon ] = useState([]);
         const [ offset, setOffset ] = useState(0)
         const [ Search, setSearch ] = useState([]);
      
          const apiPoke = async ()=>{
            try{
              const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=${offset}`)
              const data = await res.json()
              const promise = data.results.map( async (pokemonap) => {
                return await getAppPokemon(pokemonap.url)
              })
              const results = await Promise.all(promise)
              setAllPokemon(results)
              setSearch(results)
             }catch(error){}
       }
      useEffect(()=>{
        apiPoke()
      },[offset]);

        const next = async () => {
          if(offset === 1154){
            alert('Last page')
          }else{
            setOffset(offset + 20)
          }
      }
      
       const prev = async () => {
        if(offset === 0){
          alert('Please click on next')
        }else{
        setOffset(offset - 20)
      }
      }
      const filterSearch = (Search, e) =>{
        const filter = allPokemon.filter((searchpoke) => (searchpoke.name).includes(Search))
        setSearch(filter)
      }
      
          return( 
               <>
               <div className='boxControlPokemon'>
                <div className='search'>
                  <input type="text" onChange={(e)=>filterSearch(e.target.value)} placeholder='Pokemon Name'/>
                  <img src={searchimg} />
                 </div>

                 <div className='btn'>
                  <button onClick={prev}>BACK</button>
                  <button onClick={next}>NEXT</button>
                  </div>  
               </div>
               <div className='boxPokemon'>
              {Search.length === 0 ? 
                <div style={{height: '50vh', width:'90vw',textAlign: 'center'}}>
                <h1>pokemon not found..</h1></div>:
               Search.map((pokemon)=>{
                    return <Pokemons key={pokemon.id}>
                       <NavLink className='link' to={`/pokemoninfo/${pokemon.name}`}>
                     <div key={pokemon.id} className='pokemonapi'>
                          <div  className='cardpokemon' >
                          <div className='infopokemon'>
                              <h3>{pokemon.abilities[0].ability.name}</h3> 
                              <span className='info'>
                              <h3>Atack: {pokemon.stats[0].base_stat}</h3>
                              </span> 
                           </div>
                           <div className='imgpokemon'>
                               <img  src={pokemon.sprites.other.home.front_default} />
                           </div>
                           <div className='namepokemon'>
                                  <h3> { pokemon.name}</h3>
                                  <h3>{pokemon.id}</h3>
                           </div>
                    </div>
                    </div>
                    </NavLink>
                    </Pokemons>
                  })}
                      </div>
              </>
        )
}

const Pokemons = styled.div`
.link{
  text-decoration: none;
}
   .pokemonapi{
    width: auto;
    display: flex;
    margin: 8px;
    font-family: 'Silkscreen', cursive;
    text-transform: uppercase;
    .cardpokemon{
    width: 100%;
    cursor: pointer;
    box-shadow: 10px 10px 25px #dfdfdf,
    -10px -10px 25px #dfdfdf;
      padding: 5px;
      .infopokemon{
        display: flex;
        justify-content: space-between;
        h3{
          font-size: 15px;
          text-transform: uppercase;
        }
        span{
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
            h3{
              font-size: 12px;
            }
          }
      }
    .imgpokemon {
      text-align: center;
      img{
      height: 25vh;
    }
    }
  }
  .cardpokemon:hover{
    transform: scale(0.95);
    box-shadow: 10px 10px 25px #737ab3,
    -10px -10px 25px #7b82c4;
  }
  .namepokemon{
    display: flex;
    justify-content: space-between;
    border-top:1px solid black ;
    padding: 3px;
    h3{
      font-size: 15px;
    }
  }
   }  
  
`

export default FetchPokemon