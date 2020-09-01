import React, { useState } from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import Hamburger from "./hamburger"
import Menu from "./menu"

import Logo from "-!svg-react-loader!../../svg/logo.svg"

const Header = () => {
  const [open, setOpen] = useState(false)

  return (
    <Navigation>
      <Link className="logo" to="/">
        <Logo />
        <span>ДЦ Буба-Мара</span>
      </Link>
      <Hamburger open={open} setOpen={setOpen} />
      <Menu open={open} />
    </Navigation>
  )
}

export default Header

const Navigation = styled.header`
  background-color: #fcfafa;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);
  border-radius: 0 0 25px 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  padding: 20px;
  max-width: 1500px;
  width: 100%;
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  z-index: 5;
  .logo {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    span {
      border-bottom: 2px solid #3d3434;
      color: #e73238;
      font-size: 18px;
      padding-bottom: 5px;
    }
    svg {
      height: 50px;
      margin-right: 10px;
    }
  }
`
