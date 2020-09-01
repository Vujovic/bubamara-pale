import React from "react"
import styled from "styled-components"

import Teacher from "-!svg-react-loader!../../svg/teacher.svg"
import Activity from "-!svg-react-loader!../../svg/activity.svg"
import Child from "-!svg-react-loader!../../svg/child.svg"

const StatsSection = () => {
  return (
    <Stats>
      <div className="stat">
        <Teacher />
        <p className="count">10</p>
        <p>Учитељица</p>
      </div>
      <div className="stat middle">
        <Activity />
        <p className="count">7</p>
        <p>Активности</p>
      </div>
      <div className="stat">
        <Child />
        <p className="count">60+</p>
        <p>Срећне дјеце</p>
      </div>
    </Stats>
  )
}

export default StatsSection

const Stats = styled.section`
  background-color: #fcfafa;
  border-radius: 40px;
  box-shadow: 8px 8px 16px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  margin: 20px auto;
  max-width: 860px;
  width: 80%;
  padding: 15px 30px;
  text-align: center;
  transform: translateY(-112px);
  z-index: 5;
  > * {
    flex-grow: 1;
  }
  .stat {
    p {
      color: #3a9a9f;
    }
    .count {
      font-size: 36px;
    }
  }
  .middle {
    border-left: 1px solid #cdcdcd;
    border-right: 1px solid #cdcdcd;
  }
  @media screen and (max-width: 768px) {
    background-color: #f0f0f0;
    box-shadow: none;
    flex-direction: column;
    transform: translateY(0);
    .stat {
      margin: 20px auto;
      padding: 20px 0;
    }
    .middle {
      border: none;
      border-top: 1px solid #cdcdcd;
      border-bottom: 1px solid #cdcdcd;
    }
  }
`
