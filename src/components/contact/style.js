/*
    ===============================
            Drop Styles
    ===============================
*/
import styled from 'styled-components'
export const Drop = styled.div`
  padding: 50px 0;
  text-align: center;
`

export const DropTitle = styled.h2`
  font-size: 60px;
  margin-bottom: 30px;
`
export const DropTitleSpan = styled.span`
  font-weight: normal;
`

export const DropForm = styled.form`
  width: 70%;
  margin: auto;
`

export const DropFormInput = styled.input`
  box-sizing: border-box;
  outline: 0;
  padding: 5px;
  margin-bottom: 10px;
`
export const FormInput = styled.div`
  overflow: hidden;
`

export const InputText = styled(DropFormInput)`
  float: left;
  width: 49%;
`
export const InputEmail = styled(DropFormInput)`
  float: right;
  width: 49%;
`

export const InputSub = styled(DropFormInput)`
  width: 100%;
`

export const FormTextArea = styled.textarea`
  width: 100%;
  outline: 0;
  background: #ccc;
`

export const InputSubmit = styled(DropFormInput)`
  width: 60%;
  background: #fff;
  border: 1px solid #ccc;
  color: #888;
  cursor: pointer;
`
