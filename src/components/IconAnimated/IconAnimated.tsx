import { IconContainer, IconImg } from './IconAnimated.style'

interface IconAnimatedProps {
  icon: string;
  name: 'react' | 'javascript' | 'figma';
}

export default function IconAnimated({ icon, name }: IconAnimatedProps) {
	return (
		<IconContainer $name={name}>
			<IconImg src={icon} />
		</IconContainer>
	)
}
