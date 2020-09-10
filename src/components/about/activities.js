import React from "react"
import styled from "styled-components"

import Art from "-!svg-react-loader!../../svg/activities/art.svg"
import Global from "-!svg-react-loader!../../svg/activities/global.svg"
import Gym from "-!svg-react-loader!../../svg/activities/gym.svg"
import Heart from "-!svg-react-loader!../../svg/activities/heart.svg"
import Meeting from "-!svg-react-loader!../../svg/activities/meeting.svg"
import Song from "-!svg-react-loader!../../svg/activities/song.svg"
import Brain from "-!svg-react-loader!../../svg/activity.svg"

const ActivitySection = () => (
  <Activity>
    <div className="lead">
      <h1>Активности</h1>
    </div>
    <div className="cards">
      <div className="card">
        <Gym />
        <h2>Физички развој</h2>
      </div>
      <div className="card">
        <Brain />
        <h2>Интелектуални развој</h2>
      </div>
      <div className="card">
        <Heart />
        <h2>Социјално-емоционални развој и развој личности</h2>
      </div>
      <div className="card">
        <Meeting />
        <h2>Развој говора, комуникације и стваралаштва</h2>
      </div>
      <div className="card">
        <Global />
        <h2>Часови енглеског језика</h2>
      </div>
      <div className="card">
        <Song />
        <h2>Музика и плес</h2>
      </div>
      <div className="card">
        <Art />
        <h2>Ликовна радионица</h2>
      </div>
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
