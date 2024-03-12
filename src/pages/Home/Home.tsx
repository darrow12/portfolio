import { ButtonContainer, ImgContainer, ShowcaseName, ShowcaseImg, SubtitleAnimation, ShowcaseTextGroup, Description, ShowcaseContainer, StyledParticles, AboutContainer, AboutImg, AboutContent, AboutInfo, AboutTechList, AboutMainTitle, AboutImgContainer, AboutImgOutline, AboutImgBoxShadow, AboutName, HighlightName, ProjectList, ProjectItem, ProjectImg, ProjectTextGroup, ProjectName, ProjectDescription, ProjectTechnologies, ProjectTechnology, ProjectButtonsContainer, TitleSection, ContactContent, ContactTextGroup, ContactTitle, ContactDescription, ContactOptions, ProjectsContainer, ContactContainer, Content, ProjectsContent, ShowcaseContent} from './Home.style'
import Button from '../../components/Button/Button'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import FileDownloadIcon from '@mui/icons-material/FileDownload'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined'
import heroImg from '../../assets/hero-img.svg'
import particleOptions from '../../particles/particleConfig'
import { useEffect, useState } from 'react'
import { initParticlesEngine } from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim'
import IconAnimated from '../../components/IconAnimated/IconAnimated'
import htmlIcon from '../../assets/html.svg'
import cssIcon from '../../assets/css.svg'
import javaScriptIcon from '../../assets/javascript.svg'
import reactIcon from '../../assets/react.svg'
import gitIcon from '../../assets/git.svg'
import figmaIcon from '../../assets/figma.svg'
import aboutImg from '../../assets/about-img.png'
import Header from '../../components/Header/Header'
import { projects } from '../../data/projects'
import Technology from '../../components/Technology/Technology'
import ContactItem from '../../components/ContactItem/ContactItem'
import Form from '../../components/Form/Form'
import Footer from '../../components/Footer/Footer'
import Reveal from '../../utils/Reveal'
import DownloadPDF from '../../utils/DownloadPDF'

export default function Home() {
	const [ init, setInit ] = useState(false)

	useEffect(() => {
		initParticlesEngine(async (engine: any) => {
			await loadSlim(engine)
		}).then(() => {
			setInit(true)
		})
	}, [])

	return (
		<>
			<ShowcaseContainer id='showcase'>
				<Header />
				<ShowcaseContent>
					{init && <StyledParticles
						id="tsparticles"
						options={particleOptions}
					/>}
					<ShowcaseTextGroup>
						<Reveal>
							<SubtitleAnimation sequence={[ 
								'Desenvolvedor Front-end',
								1000,
								'UI/UX Designer',
								1000
							]} speed={50} wrapper="span" cursor={true} repeat={Infinity} />
						</Reveal>
						<Reveal>
							<ShowcaseName>Kim Freitas</ShowcaseName>
						</Reveal>
						<Reveal>
							<Description>Apaixonado por tecnologia e estudar coisas novas. Bora criar algo novo juntos?</Description>
						</Reveal>
						<Reveal>
							<ButtonContainer>
								<Button type='primary' href="https://www.github.com/darrow12"><GitHubIcon /></Button>
								<Button type='primary' href="https://www.linkedin.com/in/kimfreitas12/"><LinkedInIcon /></Button>
								<Button type='primary' onClick={DownloadPDF}><FileDownloadIcon /> Baixar CV</Button>
							</ButtonContainer>
						</Reveal>
					</ShowcaseTextGroup>
					<ImgContainer>
						<ShowcaseImg src={heroImg} />
						<IconAnimated icon={reactIcon} name="react" />
						<IconAnimated icon={figmaIcon} name="figma" />
						<IconAnimated icon={javaScriptIcon} name="javascript" />
					</ImgContainer>
				</ShowcaseContent>
			</ShowcaseContainer>
			<AboutContainer id='about'>
				<Content>
					<AboutImgContainer>
						<AboutImg src={aboutImg} alt="Kim Freitas" />
						<AboutImgOutline />
						<AboutImgBoxShadow />
					</AboutImgContainer>
					<AboutContent>
						<AboutInfo>
							<Reveal>
								<AboutMainTitle>
									<SubtitleAnimation sequence={[ 'Sobre mim' ]} speed={1} wrapper="span" cursor={true} />
									<AboutName>Kim <HighlightName>Freitas</HighlightName></AboutName>
								</AboutMainTitle>
							</Reveal>
							<Reveal>
								<Description>Estudante de Análise e Desenvolvimento de Sistemas na FIAP, prestes a concluir a graduação, dedicado a adquirir experiência profissional como desenvolvedor. Busco minha primeira oportunidade no mercado, destacando habilidades técnicas e paixão por contribuir para projetos inovadores.</Description>
							</Reveal>
						</AboutInfo>
						<AboutInfo>
							<Reveal>
								<SubtitleAnimation sequence={[ 'Tecnologias' ]} speed={1} wrapper="span" cursor={true} />
							</Reveal>
							<Reveal width='100%'>
								<AboutTechList>
									<Technology name='HTML5' src={htmlIcon} />
									<Technology name='CSS3' src={cssIcon} />
									<Technology name='JavaScript' src={javaScriptIcon} />
									<Technology name='ReactJS' src={reactIcon} />
									<Technology name='Figma' src={figmaIcon} />
									<Technology name='Git' src={gitIcon} />
								</AboutTechList>
							</Reveal>
						</AboutInfo>
					</AboutContent>
				</Content>
			</AboutContainer>
			<ProjectsContainer id='projects'>
				<ProjectsContent>
					<Reveal>
						<TitleSection>Projetos</TitleSection>
					</Reveal>
					<ProjectList>
						{projects.map((project, index) => (
							<ProjectItem key={index}>
								<Reveal>
									<ProjectImg src={project.img} alt={`Preview do projeto ${project.name}`} />
								</Reveal>
								<ProjectTextGroup>
									<Reveal>
										<ProjectName>{project.name}</ProjectName>
									</Reveal>
									<Reveal>
										<ProjectDescription>{project.description}</ProjectDescription>
									</Reveal>
									<Reveal>
										<ProjectTechnologies>
											{project.technologies.map((item, index) => (
												<ProjectTechnology key={index}>{item}</ProjectTechnology>
											))}
										</ProjectTechnologies>
									</Reveal>
									{project.link && <Reveal>
										<ProjectButtonsContainer>
											{project.link.demo && <Button type='secondary' href={project.link.demo}>Demo</Button>}
											{project.link.repository && <Button type='tertiary' href={project.link.repository}>Repositório</Button>}
										</ProjectButtonsContainer>
									</Reveal>}
								</ProjectTextGroup>
							</ProjectItem>
						))}
					</ProjectList>
				</ProjectsContent>
			</ProjectsContainer>
			<ContactContainer id='contact'>
				<Reveal>
					<TitleSection>Contato</TitleSection>
				</Reveal>
				<ContactContent>
					<ContactTextGroup>
						<Reveal>
							<ContactTitle>Vamos trabalhar juntos?</ContactTitle>
						</Reveal>
						<Reveal>
							<ContactDescription>Estou aqui para transformar suas visões em realidade digital. Ativamente buscando oportunidades de emprego e projetos freelances, convido você a entrar em contato comigo, mesmo que sem compromisso! Vamos trabalhar e criar experiências impactantes!</ContactDescription>
						</Reveal>
						<ContactOptions>
							<Reveal>
								<ContactItem icon={<GitHubIcon />} platform='GitHub' info='/darrow12' link='https://github.com/darrow12' />
							</Reveal>
							<Reveal>
								<ContactItem icon={<LinkedInIcon />} platform='LinkedIn' info='/kimfreitas12' link='https://www.linkedin.com/in/kimfreitas12/' />
							</Reveal>
							<Reveal>
								<ContactItem icon={<EmailOutlinedIcon />} platform='E-mail' info='darrow12@protonmail.com' />
							</Reveal>
						</ContactOptions>
					</ContactTextGroup>
					<Form />
				</ContactContent>
			</ContactContainer>
			<Footer />
		</>
	)
}