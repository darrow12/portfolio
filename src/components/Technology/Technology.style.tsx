import styled from 'styled-components'
import { styled as styledMui } from '@mui/system'
import { Tooltip } from '@mui/material'
import colorsStyle from '../../styles/colors.style'

export const TechItem = styledMui(Tooltip)`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${colorsStyle.darkGray};
  border: 1px solid ${colorsStyle.lightGray};
  padding: 16px;
  width: 75px;
  height: 75px;
  border-radius: 6px;
  transition: .7s ease;

  &:hover {
    border: 1px solid ${colorsStyle.purple};
    cursor: pointer;
  }
`

export const TechImg = styled.img`
  width: 42px;
`