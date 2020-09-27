import React from "react"
import styled from "styled-components"

import FizickiRazvoj from "./FizickiRazvoj"
import IntelektualniRazvoj from "./IntelektualniRazvoj"
import SocijalnoEmocionalniRazvoj from "./SocijalnoEmocionalniRazvoj"
import RazvojGovora from "./RazvojGovora"
import EngleskiJezik from "./EngleskiJezik"
import MuzikaPles from "./MuzikaPles"
import LikovnaRadionica from "./LikovnaRadionica"

const ActivitySection = () => (
  <Activity>
    <div className="lead">
      <h1>Активности</h1>
    </div>
    <div className="cards">
      <FizickiRazvoj />
      <IntelektualniRazvoj />
      <SocijalnoEmocionalniRazvoj />
      <RazvojGovora />
      <EngleskiJezik />
      <MuzikaPles />
      <LikovnaRadionica />
    </div>
  </Activity>
)

export default ActivitySection

const Activity = styled.section`
  background-color: #3a9a9f;
  padding: 30px 0;
  .lead {
    text-align: center;
    h1 {
      border-bottom: 2px solid #ff0066;
      color: #fff;
      display: inline-block;
      font-size: 24px;
      margin-bottom: 20px;
      padding: 5px 15px;
    }
  }
  .cards {
    display: flex;
    justify-content: space-evenly;
    justify-content: center;
    flex-wrap: wrap;
    .card {
      background-color: #fff;
      border-radius: 25px;
      box-shadow: 8px 8px 16px rgba(0, 0, 0, 0.1);
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 20px;
      padding: 10px 20px;
      max-width: 350px;
      width: 100%;
      h2 {
        font-size: 18px;
        max-width: 320px;
        width: 100%;
        margin-top: 20px;
        text-align: center;
      }
      svg {
        width: 75px;
        height: 75px;
      }
    }
  }
`
