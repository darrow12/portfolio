import { TechImg, TechItem } from './Technology.style'

interface TechnologyProps {
  name: string,
  src: string,
  placement?: 'bottom' | 'left' | 'right' | 'top' | 'bottom-end' | 'bottom-start' | 'left-end' | 'left-start' | 'right-end' | 'right-start' | 'top-end' | 'top-start'
}

export default function Technology({ name, src, placement = 'top' }: TechnologyProps) {
  return (
    <TechItem title={name} placement={placement}>
      <TechImg src={src} alt={name} />
    </TechItem>
  )
}