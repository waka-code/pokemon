import Footer from '../componentes/Footer'
import FetchPokemon from '../componentes/FetchPokemon'
import styled from 'styled-components'

function Pokemon() {

  return (
    <Poke>
      <div className='pokemonclass'>
      <FetchPokemon />
    </div>
    <Footer/>
    </Poke>
  )
}

const Poke = styled.div`
 text-align: center;
 font-family: 'Silkscreen', cursive;
 width: 100%;
  .pokemonclass{
    padding:3%;
    .boxControlPokemon{
       display: flex;
       justify-content: space-between;
       align-items: center;
        padding:1%;
        .search{
       height: auto;
       width: 45vw;
       display: flex;
       align-items: center;
       justify-content: center;
       background-color: #c2c7f354;
       border-radius: 5px;
       img{
        margin: auto 10px;
       }
       input{
         width: 90%;
         height: 6vh;
         border: none;
         outline: none;
         padding: 10px;
         font-size: 20px;
         background-color: #c2c7f354;
        }
      }
      .btn{
        width: 40%;
          button{
            width: 40%;
            margin: 5px;
            height: 5vh;
            font-size: 15px;
            border: none;
            color: #f7fc00;
            background-color: #606ff3;
            cursor: pointer;
            border-radius: 5px;
          }
          button:hover{
            color: #606ff3;
            background-color: #f7fc00;
          } 
          button:active{
            transform: scale(0.9);
          } 
        }
      }
    .boxPokemon{
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(1, 1fr);
    user-select: none;
    height: auto;
    grid-gap: 5px;
    }
      }
      @media only screen and (max-width: 1500px){
        .pokemonclass{
        .boxPokemon{
        grid-template-columns: repeat(4, 1fr);
    }
  }
  }
  @media only screen and (max-width: 1200px){
        .pokemonclass{
        .boxPokemon{
        grid-template-columns: repeat(3, 1fr);
    }
  }
  }
  @media only screen and (max-width: 900px){
        .pokemonclass{
        .boxPokemon{
        grid-template-columns: repeat(2, 1fr);
    }
  }
  }
  @media only screen and (max-width: 600px){
    .pokemonclass{
        .boxPokemon{
        grid-template-columns: repeat(1, 1fr);
    }
  }
  @media only screen and (max-width: 500px){
    .pokemonclass{
      .boxControlPokemon{
      flex-direction: column;
      gap: 8px;
        .search{
       width: 85vw;
      }
      .btn{
      width: 85vw;
  }}}}
  @media only screen and (max-width: 450px){
    .pokemonclass{
    .boxControlPokemon{
      .btn{
        display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      button{
        width: 100%;
      }
  }}}
  }}
`
export default Pokemon