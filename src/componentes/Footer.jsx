import React from 'react'
import logos from '../img/logos.jpg'
import whatsapp from '../img/whatsapp.png'
import facebook from '../img/facebook.png'
import linkedi from '../img/linkedi.png'
import styled from 'styled-components'

function Footer() {
  return (
    <Footers>
    <div>
       <section>
        <img className='logos' src={logos}/>
       </section>
       <section>
        <h3>pokemon</h3>
        <p>Informacion sobre Pokemon en esta page, <br/> todo lo que quieras saber lo encontraras aqui.</p>
       </section>
       <section>
        <h3>Social</h3>
        <article>
            <a href="#">
            <img src={facebook} alt="" />
            </a>
            <a href="#">
            <img src={whatsapp} alt="" />
            </a>
            <a href="#">
            <img src={linkedi} alt="" />
            </a>
        </article>
       </section>
    </div>
    </Footers>
  )
}

const Footers=styled.div`
    div{
        background-color: #000;
        color: #fff;
        display: flex;
        justify-content: space-around;
        height: 40vh;
        text-align: center;
        font-family: 'Silkscreen', cursive;
        section{
            margin: auto 0;
            .logos{
                height: 15vh;
            }
            img{
                height: 5vh;
            }
            h3{
                font-size: 25px;
            }
            p{
                font-size: 15px;
                margin-top: 10px;
            }
            article{
                margin-top:10px;
                a{
                    text-decoration: none;
                    color: none;
                }
                img{
                    margin-right: 10px;
                    cursor: pointer;
                }
            }
        }
    }
    @media only screen and (max-width: 830px){
    div section h3 {
        font-size: 20px;
    }
    div section p{
                font-size: 12px;
            }
            article a img{
                height: 4vh;
            }
   }
     @media only screen and (max-width: 650px){
         div {
          flex-direction: column;
            height: auto;
              }
              div section {
                margin:10px 0;
              }
             }
`

export default Footer