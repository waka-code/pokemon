import React from 'react'
import { useState } from 'react'
import {BrowserRouter, Route, Link, Routes} from 'react-router-dom'
import Pokemon from './Pokemon'
import logo from '../img/logo.png'
import pokeball from '../img/pokeball.png'
import Inicio from './Inicio'
import PokemonInfo from './PokemonInfo'
import styled from 'styled-components'
import pokemon from '../img/sliderPokemon0.png'

function Naybar() {
    const [pokeRes, setPokeRes] = useState(false);
    const handleClick = ()=>{
        setPokeRes(!pokeRes)
    }
  return (
    <Nave>
        <BrowserRouter>
        <div className='naybar'>
           <nav>
                 <Link to='/' ><img src={logo} alt="" /></Link>
                 <ul className={`nav ${pokeRes ? 'active' : ''  } `}>
                 <li><Link className='link' onClick={handleClick} to='/'>INICIO</ Link></li>
                 <li><Link className='link' onClick={handleClick} to='/POKEMON'>POKEMON</ Link></li>
                 </ul>
                 <img src={pokeball} alt=""  className='pokeball' onClick={handleClick}/>
           </nav>
         
            <Routes>
                <Route path='/*' element={<Inicio/>}/>
                <Route path='/POKEMON' element={<Pokemon/>}/>
                <Route path='/pokemoninfo/:name' element={<PokemonInfo />} />
                </Routes>
            </div>
        </BrowserRouter>
    </Nave>
  )
}

const Nave= styled.div`
    div{
        nav{
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        background-color:#000000;
        width: auto;
        z-index: 999999999;
        font-family: 'Silkscreen', cursive;
        padding: 2px;
        .nav{
            width: 30vw;
            justify-content: space-evenly;
            li{
                list-style: none;
                font-size: 20px;
                .link{
                    text-decoration: none;
                    color: #fff;
                }
                .link:hover{
                    color: #fffb00;
                }
            }
        }
        img{
            height: 10vh;
        }
        .pokeball{
            height: 7vh;
        }
    }
    }
   
    @media only screen and (max-width: 600px){
           .naybar nav{
            justify-content: space-between;
            padding: 0px;

            }
           .naybar nav ul {
            position: absolute;
            text-align: center;
            height: 20vh;
            top:-700px;
            z-index: 99999999999;
            width: 100vw;
            flex-direction: column;
            padding: 6px;
            transition: all .9s ease;
              li{
                line-height: 60px;
                font-size: 20px;
              }
            }
           .naybar .nav.active{
            width: 80%;
            top: 9.5%;
            background: #000000;
            width: 100%;

            }
              }
`

export default Naybar
