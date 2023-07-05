import Link from 'next/link'
import { ContactContainer, ContactContent, ContentLink } from './styles'
import { InstagramIcon, LinkedinIcon } from 'lucide-react'
export const Contact = () => {
  return (
    <ContactContainer>
      <ContactContent>
        <ContentLink>
          <InstagramIcon size={32} />
          <Link
            href="https://www.instagram.com/douglaskyousuke/"
            target="_blank"
          >
            Douglas Mamede
          </Link>
        </ContentLink>
        <ContentLink>
          <LinkedinIcon size={32} />
          <Link
            href="https://www.linkedin.com/in/douglas-mamede-46b382202/"
            target="_blank"
          >
            Douglas Mamede
          </Link>
        </ContentLink>
      </ContactContent>
    </ContactContainer>
  )
}
