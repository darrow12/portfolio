import MenuIcon from '@mui/icons-material/Menu'
import MenuOpenIcon from '@mui/icons-material/MenuOpen'
import styled, { css } from 'styled-components'
import { styled as styledMui } from '@mui/system'
import colorsStyle from '../../styles/colors.style'

interface MenuProps {
  $menu: boolean
}

export const HeaderContainer = styled.header<MenuProps>`
  display: flex;
  justify-content: center;
  padding: 16px 32px;
  background: linear-gradient(180deg, rgba(0,0,0,1) 0%, transparent 100%);
  width: 100%;
  position: relative;
  z-index: 100;
  transition: .7s ease;

  ${(props) => props.$menu && css`
    background: ${colorsStyle.backgroundLight};
  `}
`

export const Overlay = styled.div`
  width: 100%;
  height: 100vh;
  background: rgb(0,0,0);
  background: linear-gradient(180deg, ${colorsStyle.purple} 0%, transparent 100%);

  position: absolute;
  top: 92px;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 110;
`

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap: 16px;

  @media screen and (min-width: 1024px) { 
    max-width: 900px;
  }

  @media screen and (min-width: 1280px) { 
    max-width: 1100px;
  }
`

export const NavBarContainer = styled.nav<MenuProps>`
  display: ${(props) => props.$menu ? 'flex' : 'none'};
  flex-direction: column;
  align-items: center;
  gap: 32px;
  background-color: ${colorsStyle.backgroundLight};
  padding: 32px 16px;
  border-radius: 8px;
  width: 90%;

  position: absolute;
  top: 112px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 120;

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    position: static;
    width: auto;
    transform: none;
    padding: 0px;
    background-color: transparent;
  }
`

export const Logo = styled.h1`
  color: ${colorsStyle.white};
  font-size: 36px;
  font-weight: 700;
`

export const LogoHighlight = styled.span`
  color: ${colorsStyle.purple};
`

export const NavBarItem = styled.a`
  text-decoration: none;
  cursor: pointer;
  position: relative;
  transition: color .7s ease;

  &::after {
    content: ' ';
    width: 0%;
    height: 2px;
    background-color: ${colorsStyle.purple};
    position: absolute;
    bottom: -2px;
    left: 0;
    transition: width .7s ease-in-out;
    border-radius: 10px;
  }

  &:hover {
    color: ${colorsStyle.purple};
  }

  &:hover::after {
    width: 100%;
  }
`

export const MenuImg = styledMui(MenuIcon)`
  cursor: pointer;
  width: 32px;
  height: 32px;
  color: ${colorsStyle.white};

  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const MenuOpenImg = styledMui(MenuOpenIcon)`
  cursor: pointer;
  width: 32px;
  height: 32px;
  color: ${colorsStyle.white};

  @media screen and (min-width: 768px) {
    display: none;
  }
`