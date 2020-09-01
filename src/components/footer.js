import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import Logo from "-!svg-react-loader!../svg/logo.svg"
import Address from "-!svg-react-loader!../svg/address.svg"
import Phone from "-!svg-react-loader!../svg/phone.svg"
import Mail from "-!svg-react-loader!../svg/email.svg"

const FooterSection = () => (
  <Footer>
    <div className="container">
      <div className="segment left">
        <Link className="logo" to="/">
          <Logo />
          <span>ДЦ Буба-Мара</span>
        </Link>
        <p>Дјечији Центар Буба-Мара © {new Date().getFullYear()}</p>
        <p>Сва права задржана</p>
      </div>
      <div className="segment right">
        <p>
          <Address /> Бранка Ћопића бр. 2
        </p>
        <p>
          <Phone /> 057/223-772
        </p>
        <p>
          <Mail />
          bubamarapale@yahoo.com
        </p>
      </div>
    </div>
  </Footer>
)

export default FooterSection

const Footer = styled.footer`
  background-color: #f0f0f0;
  padding: 40px 0;
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    margin: 0 auto;
    max-width: 1500px;
    padding: 0 20px;
    .segment {
      color: #3a9a9f;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    .left {
      text-align: center;
    }
    .right {
      p {
        display: flex;
        align-items: center;
        margin: 10px 0;
        svg {
          margin-right: 10px;
        }
      }
    }
  }
  .logo {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
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
