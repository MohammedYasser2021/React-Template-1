import React from 'react'
import Footer from '../footer'
import {
  Drop,
  DropTitle,
  DropTitleSpan,
  DropForm,
  DropFormInput,
  FormInput,
  InputText,
  InputEmail,
  InputSub,
  FormTextArea,
  InputSubmit,
} from './style.js'
export default function Contact() {
  return (
    <>
      <Drop>
        <div className="container">
          <DropTitle>
            <DropTitleSpan>Drop </DropTitleSpan>Me A line
          </DropTitle>
          <DropForm>
            <FormInput>
              <InputText type="text" placeholder="Your Name" />
              <InputEmail type="email" placeholder="Your Email" />
            </FormInput>
            <InputSub type="text" className="sub" placeholder="Your Subject" />
            <FormTextArea
              cols="30"
              rows="10"
              placeholder="Your Message"
            ></FormTextArea>
            <InputSubmit type="submit" value="Send Message" />
          </DropForm>
        </div>
      </Drop>
      <Footer />
    </>
  )
}
