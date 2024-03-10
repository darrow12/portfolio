import { StyledButton, StyledLink } from './Button.style'
import { MouseEvent, ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode;
  type?: 'primary' | 'secondary' | 'tertiary';
  href?: string;
	disabled?: boolean;
	onClick?: (event: MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
	submit?: boolean
}

function Button({ children, type = 'primary', href, disabled = false, onClick, submit = false }: ButtonProps) {
	if(href) {
		return (
			<StyledLink href={href} target='_blank' $type={type} onClick={onClick}>
				{children}
			</StyledLink>
		)
	} else {
		return (
			<StyledButton disabled={disabled} $submit={submit} onClick={onClick}>
				{children}
			</StyledButton>
		)
	}
}

export default Button