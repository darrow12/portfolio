import styled from 'styled-components'
import { styled as styledMui } from '@mui/system'
import fontsStyle from '../../styles/fonts.style'
import colorsStyle from '../../styles/colors.style'
import { Alert } from '@mui/material'

interface InputProps {
  $error: boolean
}

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  padding: 24px 18px;
  border-radius: 20px;
  box-shadow: 0px 0px 24px 0px #000;
  width: 100%;
  max-width: 500px;
`

export const FormName = styled.h3`
  font-size: 24px;
  font-weight: 700;
  font-family: ${fontsStyle.primaryFont}, sans-serif;
  text-align: center;
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
`

export const Input = styled.input<InputProps>`
  padding: 16px 24px;
  width: 100%;
  border-radius: 8px;
  background-color: ${colorsStyle.veryDarkGray};
  outline: none;
  font-size: 16px;
  border: .75px solid ${(props) => props.$error ? colorsStyle.red : colorsStyle.lightGray};

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &::placeholder {
    color: ${colorsStyle.veryLightGray};
    font-weight: 700;
  }
`

export const TextArea = styled.textarea<InputProps>`
  resize: none;
  padding: 16px 24px;
  width: 100%;
  border-radius: 8px;
  background-color: ${colorsStyle.veryDarkGray};
  outline: none;
  font-size: 16px;
  border: .75px solid ${(props) => props.$error ? colorsStyle.red : colorsStyle.lightGray};

  &::placeholder {
    color: ${colorsStyle.veryLightGray};
    font-weight: 700;
  }

  &::-webkit-scrollbar {
    width: 3px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${colorsStyle.purple};
    border-radius: 20px;
  }
`

export const ErrorMessage = styled.span`
  color: ${colorsStyle.red};
  font-size: 14px;
`

export const StyledAlert = styledMui(Alert)`
  position: fixed;
  top: 24px;
  left: 50%;
  transform: translateX(-50%);
`