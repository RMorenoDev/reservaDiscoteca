import React, { useState } from 'react'
import styled from 'styled-components'
import BurguerButton from '../BurguerButton/BurguerButton';
import Logo from '../../../assets/img/logo.png'

function Navbar() {

  const [clicked, setClicked] = useState(false)
  const handleClick = () => {
    //cuando esta true lo pasa a false y vice versa
    setClicked(!clicked)
  }
  return (
    <>
      <NavContainer>
      <div className='burguer'>
          <BurguerButton clicked={clicked} handleClick={handleClick} />
        </div>
        <img className="navImage" src={Logo} alt="" />
        <button className='navButton'>Buy</button>
        <div className={`links ${clicked ? 'active' : ''}`}>
          <a onClick={handleClick} href="#h">Eventos</a>
          <a onClick={handleClick} href="#h">Restaurante</a>
          <a onClick={handleClick} href="#h">Galería</a>
          <a onClick={handleClick} href="#h">Tienda</a>
          <a onClick={handleClick} href="#h">Contacta con nosotros</a>
          <a onClick={handleClick} href="#h">Trabaja con nosotros</a>
          <select name="" id="">
            <option value="spanish">ES</option>
            <option value="english">EN</option>
            <option value="french">FR</option>
          </select>
        </div>
      
        <BgDiv className={`initial ${clicked ? ' active' : ''}`}></BgDiv>
      </NavContainer>
    </>
  )
}

export default Navbar

const NavContainer = styled.nav`

  

  .navButton{
    background-color: #c10230;
    border-color: #c10230;
    border-radius:5px;
    border-style: solid;
    border-width:1px;
    color:#ffffff;
    font-size:14px;
    letter-spacing:1.8px;
    line-height:24px;
    margin:0px 30px 0px 0px;
    padding:8px 24px;
    text-align:center;
    text-transform:uppercase;
    cursor:pointer;
   
  }
  .navImage{
    width:13%;
    filter:brightness(100%);
  }
  padding: .4rem;
  background-image: linear-gradient(to bottom, #070024 55%, rgba(0, 0, 0, 0) 100%);
  display: flex;
  align-items: center;
  justify-content: space-between;
  a{
    color: white;
    text-decoration: none;
    margin-right: 1rem;
  }
  .links{
    position: absolute;
    top: -700px;
    left: -2000px;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    transition: all .5s ease;
    a{
      color: white;
      font-size: 2rem;
      display: block;
    }
    @media(min-width: 768px){
      position: initial;
      margin: 0;
      a{
        font-size: 1rem;
        color: white;
        display: inline;
      }
      display: block;
    }
  }
  .links.active{
    width: 100%;
    display: block;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    top: 30%;
    left: 0;
    right: 0;
    text-align: center;
    a{
      font-size: 2rem;
      margin-top: 1rem;
      color: white;
    }
  }
  .burguer{
    @media(min-width: 768px){
      display: none;
    }
  }
`

const BgDiv = styled.div`
  background-color: RGBA(7,0,36,0.92);
  position: absolute;
  top: -1000px;
  left: -1000px;
  width: 100%;
  height: 100%;
  z-index: -1;
  transition: all .6s ease ;
  
  &.active{
    border-radius: 0 0 0 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`