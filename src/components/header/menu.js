import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const Menu = ({ open }) => (
  <Nav open={open}>
    <Link to="/o-nama">О нама</Link>
    <Link to="/novosti">Новости</Link>
    <Link to="/kontakt">Контакт</Link>
  </Nav>
)

export default Menu

const Nav = styled.nav`
  a {
    margin: 0 20px;
    text-align: center;
  }
  @media screen and (max-width: 1280px) {
    background-color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    height: 100vh;
    padding: 2rem;
    position: absolute;
    top: 0;
    right: 0;
    transition: transform 0.3s ease-in-out;
    z-index: 5;
    a {
      font-size: 1.3rem;
      padding: 3rem;
    }
  }
  @media screen and (max-width: 576px) {
    width: 100%;
  }
`
