import styled from 'styled-components'
import { styled as styledMui } from '@mui/system'
import { TypeAnimation } from 'react-type-animation'
import colorsStyle from '../../styles/colors.style'
import fontsStyle from '../../styles/fonts.style'
import Particles from '@tsparticles/react'

export const ShowcaseContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${colorsStyle.backgroundDark};
  height: 100%;
  position: relative;

  @media screen and (min-width: 1280px) {
    height: 60vh;
  }
`

export const ShowcaseContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 400px;
  gap: 48px;
  padding: 32px 16px;

  @media screen and (min-width: 1024px) {
    padding: 32px 0px;
    max-width: 900px;
    flex-direction: row;
  }

  @media screen and (min-width: 1280px) {
    max-width: 1100px;
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 400px;
  gap: 48px;

  @media screen and (min-width: 1024px) {
    flex-direction: row;
    max-width: 900px;
    gap: 0px;
  }

  @media screen and (min-width: 1280px) {
    max-width: 1100px;
  }
`

export const StyledParticles = styledMui(Particles)`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  opacity: 0.25;
`

export const ShowcaseTextGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;
  max-width: 450px;
  z-index: 10;

  @media screen and (min-width: 1024px) {
    align-items: start;
  }
`

export const SubtitleAnimation = styledMui(TypeAnimation)`
  font-size: 24px;
  text-align: center;
  font-family: ${fontsStyle.primaryFont}, sans-serif;

  @media screen and (min-width: 1024px) {
    text-align: start;
  }
`

export const ShowcaseName = styled.h1`
  font-size: 40px;
  font-weight: 700;
  text-align: center;
  font-family: ${fontsStyle.primaryFont}, sans-serif;
  background: ${colorsStyle.gradientBlue};
  background-clip: text;
  -moz-background-clip: text;
  -webkit-background-clip: text;
  color: transparent;

  @media screen and (min-width: 1024px) {
    font-size: 64px;
    text-align: start;
  }
`

export const Description = styled.p`
  color: ${colorsStyle.white};
  text-align: center;

  @media screen and (min-width: 1024px) {
    text-align: start;
  }
`

export const ButtonContainer = styled.div`
  display: flex;
  margin-top: 8px;
  gap: 8px;

  @media screen and (min-width: 1280px) {
    gap: 12px;
  }
`

export const ImgContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`

export const ShowcaseImg = styled.img`
  width: 100%;

  @media screen and (min-width: 1280px) {
    width: 500px;
  }
`

export const AboutContainer = styled.section`
  display: flex;
  justify-content: center;
  padding: 32px 16px;
  background-color: ${colorsStyle.backgroundLight};

  @media screen and (min-width: 768px) {
    padding: 64px 32px;
  }
`

export const AboutImgContainer = styled.div`
  width: 100%;
  max-width: 320px;
  position: relative;

  @media screen and (min-width: 1024px) {
    max-width: 350px;
  }

  @media screen and (min-width: 1280px) {
    max-width: 380px;
  }
`

export const AboutImg = styled.img`
  opacity: 1;
  position: relative;
  z-index: 1;
  width: 100%;
  height: 100%;
  border-radius: 24px;
`

export const AboutImgOutline = styled.div`
  width: 100%;
  height: 100%;
  background-color: transparent;
  border-radius: 24px;
  border: 1px solid ${colorsStyle.purple};
  position: absolute;
  top: -12px;
  left: -12px;

  @media screen and (min-width: 1280px) {
    top: -24px;
    left: -24px;
  }
`

export const AboutImgBoxShadow = styled.div`
  background-color: ${colorsStyle.purple};
  box-shadow: 6px 6px 30px 0px rgba(167, 143, 255, .25);
  width: 100%;
  height: 100%;
  border-radius: 24px;
  position: absolute;
  top: 12px;
  left: 12px;

  @media screen and (min-width: 1280px) {
    top: 24px;
    left: 24px;
  }
`

export const AboutContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  justify-content: space-between;
  max-width: 550px;
`

export const AboutInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  max-width: 500px;

  @media screen and (min-width: 1024px) {
    align-items: start;
  }

  @media screen and (min-width: 1280px) {
    max-width: 550px;
  }
`

export const AboutMainTitle = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const AboutName = styled.h2`
  font-size: 32px;
  font-weight: 700;
  font-family: ${fontsStyle.primaryFont}, sans-serif;
  text-align: center;

  @media screen and (min-width: 768px) {
    font-size: 48px;
  }

  @media screen and (min-width: 1280px) {
    text-align: start;
  }
`

export const HighlightName = styled.span`
  font-family: ${fontsStyle.primaryFont}, sans-serif;
  background: ${colorsStyle.gradientBlue};
  background-clip: text;
  -moz-background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
`

export const AboutTechList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  place-items: center;
  align-items: center;
  row-gap: 16px;
  width: 100%;

  @media screen and (min-width: 1024px) {
    grid-template-columns: repeat(6, 1fr);
  }

  @media screen and (min-width: 1280px) {
    place-items: start;
    align-items: start;
  }
`

export const ProjectsContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 32px 16px;
  background-color: ${colorsStyle.backgroundDark};
  height: 100%;
  position: relative;

  @media screen and (min-width: 768px) {
    padding: 64px 32px;
  }
`

export const ProjectsContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 400px;
  gap: 48px;

  @media screen and (min-width: 1024px) {
    max-width: 900px;
  }

  @media screen and (min-width: 1280px) {
    max-width: 1100px;
  }
`

export const TitleSection = styled.h1`
  font-size: 32px;
  font-weight: 700;
  text-align: center;
`

export const ProjectList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 60px;
  width: 100%;
`

export const ProjectItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  width: 100%;

  @media screen and (min-width: 1024px) {
    flex-direction: row;
    justify-content: space-between;

    &:nth-child(2n+1) {
      flex-direction: row-reverse;
    }
  }
`

export const ProjectImg = styled.img`
  border-radius: 8px;
  border: 2px solid ${colorsStyle.purple};
  width: 100%;

  @media screen and (min-width: 1280px) {
    width: 500px;
    height: 350px;
  }
`

export const ProjectTextGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media screen and (min-width: 1024px) {
    max-width: 438px;
  }

  @media screen and (min-width: 1280px) {
    max-width: 500px;
  }
`

export const ProjectName = styled.h2`
  font-size: 24px;
  font-weight: 700;
`

export const ProjectDescription = styled.p`
  text-align: start;
`

export const ProjectTechnologies = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`

export const ProjectTechnology = styled.span`
  background-color: ${colorsStyle.darkGray};
  border-radius: 5px;
  padding: 8px 16px;
  font-family: ${fontsStyle.primaryFont};
`

export const ProjectButtonsContainer = styled.div`
  display: flex;
  gap: 8px;

  @media screen and (min-width: 768px) {
    gap: 24px;
  }
`

export const ContactContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 32px 16px;
  background-color: ${colorsStyle.backgroundLight};
  height: 100%;
  position: relative;
  gap: 32px;

  @media screen and (min-width: 1024px) {
    gap: 48px;
  }

  @media screen and (min-width: 768px) {
    padding: 64px 32px;
  }
`

export const ContactContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 48px;
  width: 100%;
  max-width: 400px;

  @media screen and (min-width: 1024px) {
    max-width: 900px;
    flex-direction: row;
  }

  @media screen and (min-width: 1280px) {
    max-width: 1100px;
  }
`

export const ContactTextGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: center;
  text-align: center;
  max-width: 500px;

  @media screen and (min-width: 1024px) {
    align-items: start;
  }
`

export const ContactTitle = styled.h1`
  font-family: ${fontsStyle.primaryFont}, sans-serif;
  background: ${colorsStyle.gradientBlue};
  background-clip: text;
  -moz-background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  text-align: center;
  font-weight: 700;
  font-size: 28px;

  @media screen and (min-width: 1024px) {
    text-align: start;
    font-size: 48px;
  }
`

export const ContactDescription = styled.p`
  text-align: center;

  @media screen and (min-width: 1024px) {
    text-align: start;
  }
`

export const ContactOptions = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 18px;
  width: 100%;

  @media screen and (min-width: 1024px) {
    align-items: start;
  }
`