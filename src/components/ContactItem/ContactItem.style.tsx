import styled from 'styled-components'
import fontsStyle from '../../styles/fonts.style'
import colorsStyle from '../../styles/colors.style'

export const ContactItemContainer = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
`

export const ContactName = styled.span`
  display: flex;
  align-items: center;
  gap: 4px;
  font-family: ${fontsStyle.primaryFont}, sans-serif;
  font-weight: 700;
`

export const ContactInfoLink = styled.a`
  font-family: ${fontsStyle.primaryFont}, sans-serif;
  text-align: center;
  transition: .7s ease;
  cursor: pointer;

  &:hover {
    color: ${colorsStyle.purple};
  }
`

export const ContactInfo = styled.span`
  font-family: ${fontsStyle.primaryFont}, sans-serif;
  text-align: center;
`