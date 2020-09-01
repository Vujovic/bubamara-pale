import React from "react"
import styled from "styled-components"

const HamburgerMenu = ({ open, setOpen }) => {
  return (
    <Button open={open} onClick={() => setOpen(!open)}>
      <div></div>
      <div></div>
      <div></div>
    </Button>
  )
}

export default HamburgerMenu

const Button = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  display: none;
  width: 35px;
  height: 35px;
  padding: 0;
  z-index: 10;
  &:focus {
    outline: none;
  }
  div {
    background-color: #5f6c82;
    border-radius: 10px;
    width: 35px;
    height: 5px;
    transition: all 0.2s linear;
    transform-origin: 1px;
    :first-child {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }
    :nth-child(2) {
      opacity: ${({ open }) => (open ? "0" : "1")};
      transform: ${({ open }) => (open ? "translateX(20px)" : "translateX(0)")};
    }
    :nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
  @media screen and (max-width: 1280px) {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
`
