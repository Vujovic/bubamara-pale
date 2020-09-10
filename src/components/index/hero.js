import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import himna from "../../audio/himna.mp3"
import House from "-!svg-react-loader!../../svg/house.svg"
import Illustration from "-!svg-react-loader!../../svg/hero.svg"

const HeroSection = () => {
  return (
    <Hero>
      <div className="lead">
        <h1>
          Дјечији Центар <br /> Буба-Мара Пале
        </h1>
        <h2>
          <House /> Кућа среће
        </h2>
        <audio controls>
          <source src={himna} type="audio/mpeg" />
          Your browser does not support the audio element.
          <track kind="captions"></track>
        </audio>
        <Link to="o-nama">О нама</Link>
      </div>
      <div className="image">
        <Illustration />
      </div>
    </Hero>
  )
}

export default HeroSection

const Hero = styled.section`
  background-color: #ffec89;
  color: #ff0066;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  min-height: 90vh;
  flex-wrap: wrap;
  padding: 100px 10px 75px 10px;
  z-index: 0;
  .lead {
    > * {
      margin: 20px 0;
    }
    h1 {
      font-size: 36px;
    }
    h2 {
      font-size: 24px;
    }
    audio {
      display: block;
    }
    a {
      background-color: #3a9a9f;
      border-radius: 10px;
      color: #ffe24a;
      display: inline-block;
      padding: 20px;
    }
  }
  .image {
    max-width: 45vw;
    width: 650px;
  }
  @media screen and (max-width: 1024px) {
    .image {
      max-width: 90vw;
    }
  }
`
