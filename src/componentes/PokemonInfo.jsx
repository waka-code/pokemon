import { useState, useEffect } from 'react';
import { useParams, NavLink } from 'react-router-dom';
import styled from 'styled-components'


function PokemonInfo() {
  const { name } = useParams();
  const [ infoPokemon, setInfoPokemon ] = useState(null);
  const apiPokeInfo = async ()=>{
    try{
     const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
       const data = await res.json()
       setInfoPokemon(data)
     }catch(error){console.error(error)}
}
useEffect(()=>{
  apiPokeInfo(name)
},[]);

  return (
    <Info> 
      {[] && (
        <div className='imgPokemon'>
          <h1>Informacion De {infoPokemon?.name}</h1>
          <article>
             <section className='img'>
                <img src={infoPokemon?.sprites.other.home.front_default} alt="" />
             </section>
             <section className='text'>
                <h2>Name: {infoPokemon?.name}</h2>
                <h2>Slot: {infoPokemon?.types[0].slot}</h2>
                <h2>Ability: {infoPokemon?.abilities[0].ability.name}</h2>
                <h2>Weight: {infoPokemon?.weight}</h2>
                <h2>Version: {infoPokemon?.game_indices[0].version.name}</h2>
                <h2>Index: {infoPokemon?.game_indices[0].game_index}</h2>
                <h2>Move: {infoPokemon?.moves[0].move.name}</h2>
                <h2>Height: {infoPokemon?.height}</h2>
                <h2>Type: {infoPokemon?.types[0].type.name}</h2>
                <h2>Atack: {infoPokemon?.stats[0].base_stat}</h2>
                <NavLink className='NavLink' to='/POKEMON'>Return to Pokemon</ NavLink>
             </section>
           </article>
        </div>
      )
      }
      </Info>
  )
}

const Info = styled.div`
         user-select: none;
    .cargado{
        text-align: center;
        margin: 10% auto;
        color: #fa1515;
        font-size: 50px;
        font-family: 'Silkscreen', cursive;
     }  
   .imgPokemon{
    font-family: 'Silkscreen', cursive;
    height: auto;
    width: 80vw;
    margin:2% auto;
    box-shadow:5px 5px 50px #898c91;
    background-color: #006eff7b;
    h1{
      text-align: center;
      color:#f1f506da;
      padding: 10px;
      font-size: 50px;
    }
    article{
      display: flex;
      justify-content: center;
      align-items: center;
      margin:2% auto;
    }
    .img{
       width: 40vw;
       text-align: center;
       height: auto;
       img{
      height: 60vh;
      filter: drop-shadow(5px 5px 50px #006eff);
    }
    }
    }
    .text{
      display: grid;
       grid-template-columns: repeat(2, 1fr);
       grid-template-rows: repeat(1, 1fr);
       width: 42%;
       height: auto;
       h2{
        border: 1px solid blue;
        background-color: #fffffff2;
        margin: 4px;
        font-size: 16px;
        height: 8vh;
        cursor: pointer;
        padding: 5px;
        color:#1760beda;
       }
       h2:hover{
         background-color:#1760beda;
         color: #f1f506da;
       }
       .NavLink{
        font-size: 20px;
        position: relative;
        left: 100px;
        text-align: center;
        top: 20px;
        text-decoration: none;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
       }
}
@media only screen and (max-width:1450px){
                 .imgPokemon{
                article{
                  .text{
                    width: 60%;
                  }
                }
              }
            }
            @media only screen and (min-width: 1300px){
                .imgPokemon{
                article{
                  .img{
                    img{
                     width: 70%;

                    }
                  }
                }
              }
            }
@media only screen and (max-width: 1200px){
             .imgPokemon{
              article{
                .img{
                  width: 60%;
                }
              }
            .text{
       h2{
        font-size: 14px;
        height: 7.2vh;
       }
      }
            }}

    
          @media only screen and (max-width: 1000px){
              .imgPokemon{
                article{
                  flex-direction: column;
                  .img{
                    width: 100%;
                    img{
                      height: 40vh;
                    }
                  }
                  .text{
                    width: 100%;
                    .NavLink{
                   display: none;
                  }
                  }
                }
              }
              
          }
          @media only screen and (max-width: 700px){
              .imgPokemon{
                h1{
                  font-size: 32px;
                }
              }}
          
              @media only screen and (max-width: 400px){
              .imgPokemon{
                h1{
                  font-size: 25px;
                }
                article{
                  .text{
                    grid-template-columns: repeat(1, 1fr);
                  }
                }
              }}
              @media only screen and (max-width: 300px){
              .imgPokemon{
                h1{
                  font-size: 20px;
                }
                article{
                  .img{
                    img{
                        height: 30vh;
                    }
                  }
                }
              }}
`;


export default PokemonInfo