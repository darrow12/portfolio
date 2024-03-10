import { useEffect, useState } from 'react'
import { Content, HeaderContainer, Logo, LogoHighlight, MenuImg, MenuOpenImg, NavBarContainer, NavBarItem, Overlay } from './Header.style'
import { motion, useAnimation } from 'framer-motion'
import useWindowWidth from '../../hooks/useWindowWidth'

export default function Header() {
	const [menuOpen, setMenuOpen] = useState(false)
	const windowWidth = useWindowWidth()
	const mainControls = useAnimation()

	const navBarItems = [
		{
			name: 'Sobre',
			href: '#about'
		},
		{
			name: 'Projetos',
			href: '#projects'
		},
		{
			name: 'Contato',
			href: '#contact'
		}
	]

	useEffect(() => {
		if(menuOpen) {
      mainControls.start('visible')
			window.scrollTo(0, 0)
			document.body.style.overflowY = 'hidden'
    } else {
			document.body.style.overflowY = 'auto'
		}
  }, [menuOpen])

	useEffect(() => {
		if(windowWidth >= 768) {
			mainControls.start('visible')
		}
	}, [])

	return (
		<HeaderContainer $menu={menuOpen}>
			{menuOpen && <Overlay />}
			<Content>
				<Logo>kim<LogoHighlight>.</LogoHighlight></Logo>
				{menuOpen ? 
					<MenuOpenImg onClick={() => setMenuOpen(false)} /> : 
					<MenuImg onClick={() => setMenuOpen(true)} />
				}
				<NavBarContainer $menu={menuOpen}>
					{navBarItems.map((item, index) => {
						return (
							<motion.div
								variants={{
									hidden: { opacity: 0, y: 15 },
									visible: { opacity: 1, y: 0 }
								}}
								initial='hidden'
								animate={mainControls}
								transition={{ duration: 0.7, delay: 0.15 }}
								key={index}
							>
								<NavBarItem onClick={() => setMenuOpen(false)} href={item.href}>{item.name}</NavBarItem>
							</motion.div>
						)
					})}
				</NavBarContainer>
			</Content>
		</HeaderContainer>
	)
}