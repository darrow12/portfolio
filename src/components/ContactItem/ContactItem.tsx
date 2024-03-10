import { ReactNode } from 'react'
import { ContactInfo, ContactInfoLink, ContactItemContainer, ContactName } from './ContactItem.style'

interface ContactItemProps {
  icon: ReactNode,
  platform: string,
  info: string,
  link?: string
}

export default function ContactItem({icon, platform, info, link}: ContactItemProps) {
  return (
    <ContactItemContainer>
      <ContactName>{icon} {platform}:</ContactName>
      {link ? 
        <ContactInfoLink href={link} target='_blank'>{info}</ContactInfoLink> :
        <ContactInfo>{info}</ContactInfo>
      }
    </ContactItemContainer>
  )
}