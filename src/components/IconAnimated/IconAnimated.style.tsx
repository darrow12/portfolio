import styled, { keyframes, css } from 'styled-components'
import colorsStyle from '../../styles/colors.style'

interface IconContainerProps {
  $name: 'react' | 'javascript' | 'figma';
}

const animationIcon = keyframes`
  0% {
    transform: translateY(-5%);
  }

  50% {
    transform: translateY(5%);
  }

  100% {
    transform: translateY(-5%);
  }
`

export const IconContainer = styled.div<IconContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  border-radius: 8px;
  background-color: ${colorsStyle.darkGray};
  position: absolute;

  ${(props) =>
		props.$name === 'react' &&
  css`
    bottom: 40px;
    right: 80px;
    animation: ${animationIcon} 3s infinite ease-in-out;
    transform: rotate(25deg) scale(1.1);
  `}

  ${(props) =>
		props.$name === 'javascript' &&
  css`
    left: 15px;
    animation: ${animationIcon} 3.5s infinite ease-in-out;
    transform: rotate(10deg);
  `}

  ${(props) =>
		props.$name === 'figma' &&
  css`
    top: 25px;
    right: 56px;
    animation: ${animationIcon} 2.5s infinite ease-in-out;
    transform: rotate(-15deg) scale(0.9);
  `}
`

export const IconImg = styled.img`
  width: 40px;
  height: 40px;
`
