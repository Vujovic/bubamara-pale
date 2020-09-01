import React from "react"
import styled from "styled-components"

import Illustration from "-!svg-react-loader!../../svg/contact.svg"

const ContactForm = () => (
  <FormLead>
    <h1>Контакт</h1>
    <div className="form">
      <Form
        name="contact"
        action="success"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <input type="hidden" name="form-name" value="contact" />
        <label htmlFor="name">
          Име и презиме:
          <input
            type="text"
            name="text"
            id="name"
            placeholder="Име и презиме..."
            required
          />
        </label>
        <label htmlFor="email">
          E-mail адреса:
          <input
            type="email"
            name="email"
            id="email"
            placeholder="E-mail адреса..."
            required
          />
        </label>
        <label htmlFor="subject">
          Наслов:
          <input
            type="text"
            name="subject"
            id="subject"
            placeholder="Наслов..."
            required
          />
        </label>
        <label htmlFor="email">
          Порука:
          <textarea
            name="message"
            rows="4"
            id="message"
            placeholder="Порука..."
            required
          />
        </label>

        <input className="submit" type="submit" value="Пошаљи" />
      </Form>
      <Illustration />
    </div>
  </FormLead>
)

export default ContactForm

const FormLead = styled.section`
  background-color: #ffe872;
  padding: 40px 0;
  text-align: center;
  h1 {
    border-bottom: 2px solid #ff0066;
    color: #3a9a9f;
    display: inline-block;
    font-size: 24px;
    margin-bottom: 20px;
    padding: 5px 15px;
  }
  .form {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
    svg {
      max-width: 600px;
      width: 100%;
    }
  }

  @media screen and (max-width: 1280px) {
    .form {
      svg {
        display: none;
      }
    }
  }
`

const Form = styled.form`
  background-color: #fcfafa;
  border-radius: 25px;
  box-shadow: 8px 8px 16px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 600px;
  width: 100%;
  padding: 30px 30px 0 30px;
  label {
    color: #3a9a9f;
    font-weight: bold;
    width: 100%;
  }
  input,
  textarea {
    background-color: #f8f8f8;
    border: none;
    border-bottom: 2px solid #f3f3f3;
    box-sizing: border-box;
    display: block;
    font-size: 18px;
    margin-top: 10px;
    margin-bottom: 40px;
    font-weight: normal;
    padding: 20px;
    width: 100%;
  }
  .submit {
    background-color: #3a9a9f;
    border-bottom: none;
    border-radius: 50px;
    box-shadow: 0px 16px 16px #eaf3ff;
    color: #ffe24a;
    cursor: pointer;
    display: inline-block;
    font-size: 18px;
    font-weight: bold;
    padding: 20px 40px;
    transition: transform 0.3s;
  }
  @media screen and (max-width: 700px) {
    padding: 40px 20px;
  }
`
