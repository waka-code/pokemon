import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel'
import styled from 'styled-components'
import sliderPokemon from '../img/sliderPokemon.png'
import sliderPokemon0 from '../img/sliderPokemon0.png'
import sliderPokemon1 from '../img/sliderPokemon1.png'
import ReactPlayer from 'react-player/youtube'
import logovideo from '../img/logovideo.jpg'
import Footer from './Footer'

function Inicio() {
  return (
    <Carrusel>
        <Carousel  showThumbs={false} className='carru'>
          <div>
            <img src={sliderPokemon} alt="" />
          </div>

          <div>
            <img src={sliderPokemon0} alt="" />
          </div>

          <div>
          <img src={sliderPokemon1} alt="" />
          </div>
        </Carousel>
           
           <div className='About'>
             <h1>Pokémon</h1>
              <p>
              Los Pokémon son criaturas de todo tipo de formas y tamaños que viven bien en un medio salvaje o junto a los seres humanos. La mayoría de los Pokémon solo hablan para decir sus nombres. En la actualidad, hay más de 700 criaturas que habitan el universo Pokémon.
               <br/>
              Los dueños de los Pokémon denominados “Entrenadores” los crían y los cuidan. Durante sus aventuras, los Pokémon crecen y adquieren más experiencia, e incluso, en ocasiones, evolucionan para convertirse en Pokémon más fuertes.
              <br/>
              <br/>
              Hay más de doce tipos diferentes de Pokémon, como el tipo Fuego, el tipo Psíquico o el tipo Dragón. Cada tipo de Pokémon tiene sus ventajas e inconvenientes a la hora de luchar contra otros Pokémon. Por ejemplo, un Pokémon de tipo Fuego tendrá ventaja sobre un Pokémon de tipo Planta, pero estará en desventaja ante un Pokémon de tipo Agua. Esto hace que la estrategia, el posicionamiento y el uso que hagas de los Pokémon en tu equipo sean de crucial importancia en el desarrollo de los combates.
              </p>
           </div>
        
          <div className='video'>
            <ReactPlayer
              className='react-player'
               url='https://www.youtube.com/watch?v=Rsv2VkoIpk0'
                width='60%'
                 height='80%'
                />
             </div>

          <Footer />
        </Carrusel>
  )
}

const Carrusel = styled.div`
    div{
        height: auto;
       img{
          height: 70vh;
          width: auto;
       }
    }
    .About{
        width: 60vw;
        margin: 1px auto;
        padding: 10px;
        text-align: center;
        border: 5px solid #504f4f;
        background-color: #cfcfcc;

        h1{
            background-color: yellow;
            font-size: 35px;
            font-family: 'Silkscreen', cursive;

        }
        p{
            margin-top: 10px;
            font-size: 15px;
            font-family: 'Silkscreen', cursive;
        }
    }
    .video{
            width: 100%;
            height: 100vh;
            background-image: url(${logovideo});
            background-size: cover;
            background-position:center ;
            padding: 15px;
            .react-player{
                margin:20px 0 ;
            }
        }
        @media only screen and (max-width: 1100px){
         .About {
         width: 80vw;
          }
        }

       @media only screen and (max-width: 830px){
         .About {
          width: 90vw;
              }
              .video {
             height: 80vh;
           }
             }
       @media only screen and (max-width: 700px){
         .About {
          width: 100vw;
              }
              .video {
             height: 60vh;
           }
             }
             @media only screen and (max-width: 500px){
              .About{
                height: auto;
                h1{
                  font-size: 30px;
                }
                p{
                  font-size: 10px;
                }
              }
              .video {
               height: auto;
             }
             .carru{
              div{
                img{
                  height: 50vh;
                }
              }
              }
             }
             @media only screen and (max-width: 200px){
              .carru{
              div{
                img{
                  height: 35vh;
                }
              }
              }
             }
           
`
export default Inicio