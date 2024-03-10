import styled, { css } from 'styled-components'
import fontsStyle from '../../styles/fonts.style'
import colorsStyle from '../../styles/colors.style'

interface StyledLinkProps {
  $type: 'primary' | 'secondary' | 'tertiary';
}

interface StyledButtonProps {
  $submit: boolean;
}

export const StyledLink = styled.a<StyledLinkProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  font-family: ${fontsStyle.primaryFont}, sans-serif;
  gap: 12px;
  font-size: 18px;
  cursor: pointer;

  ${(props) => 
		props.$type === 'primary' && 
  css`
    border: 1px solid ${colorsStyle.lightGray};
    background-color: ${colorsStyle.gray};
    color: ${colorsStyle.white};
    padding: 8px;
    box-shadow: 0px 1.25px 1.25px 0px rgba(0, 0, 0, 0.25);
    transition: .7s ease;

    &:hover {
      color: ${colorsStyle.purple};
      border: 1px solid ${colorsStyle.purple};

      & svg {
        transition: .7s ease;
        fill: ${colorsStyle.purple};
      }
    }
  `}

  ${(props) => 
		props.$type === 'secondary' && 
  css`
    background-color: ${colorsStyle.purple};
    color: ${colorsStyle.white};
    padding: 8px 32px;
    font-family: ${fontsStyle.primaryFont}, sans-serif;
    transition: .7s ease;
    border: 1px solid transparent;

    &:hover {
      background-color: transparent;
      color: ${colorsStyle.purple};
      border-color: ${colorsStyle.purple};
    }
  `}

  ${(props) => 
		props.$type === 'tertiary' && 
  css`
    background-color: transparent;
    color: ${colorsStyle.purple};
    border: 1px solid ${colorsStyle.purple};
    padding: 8px 32px;
    font-family: ${fontsStyle.primaryFont}, sans-serif;
    transition: .7s ease;

    &:hover {
      background-color: ${colorsStyle.purple};
      color: ${colorsStyle.white};
      border-color: transparent;
    }
  `}
`

export const StyledButton = styled.button<StyledButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 175px;
  border-radius: 5px;
  font-family: ${fontsStyle.primaryFont}, sans-serif;
  background-color: ${colorsStyle.gray};
  color: ${colorsStyle.white};
  padding: 8px;
  gap: 12px;
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
  transition: .7s ease;
  position: relative;
  overflow: hidden;
  border: 1px solid ${colorsStyle.lightGray};
  box-shadow: 0px 1.25px 1.25px 0px rgba(0, 0, 0, 0.25);

  ${(props) => 
		props.$submit && 
  css`
    border: 1px solid transparent;
    background-color: ${colorsStyle.purple};
    color: ${colorsStyle.white};
    padding: 8px 0px;
    box-shadow: none;

    &:hover {
      border-color: ${colorsStyle.purple};
    }
  `}

  &:hover {
    background-color: transparent;
    color: ${colorsStyle.purple};
    border: 1px solid ${colorsStyle.purple};

    & svg {
      transition: .7s ease;
      fill: ${colorsStyle.purple};
    }
  }
`