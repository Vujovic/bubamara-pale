import styled from "styled-components"

export const Card = styled.div`
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
  button {
    background: none;
    border: none;
    color: #3a9a9f;
    cursor: pointer;
    display: inline-block;
    margin-top: 10px;
  }
`
