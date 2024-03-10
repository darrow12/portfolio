import styled from 'styled-components'
import fontsStyle from '../../styles/fonts.style'
import colorsStyle from '../../styles/colors.style'

export const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  padding: 16px;
  background-color: ${colorsStyle.backgroundDark};

  @media screen and (min-width: 768px) {
    padding: 16px 32px;
  }
`

export const Content = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  gap: 16px;

  @media screen and (min-width: 1024px) {
    max-width: 900px;
    flex-direction: row;
  }

  @media screen and (min-width: 1280px) {
    max-width: 1100px;
  }
`

export const Copyright = styled.p`
  font-family: ${fontsStyle.primaryFont}, sans-serif;
  font-weight: 700;
  text-align: center;
`

export const Highlight = styled.a`
  font-family: ${fontsStyle.primaryFont}, sans-serif;
  color: ${colorsStyle.purple};
`