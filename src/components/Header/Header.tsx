import { ReactNode } from 'react'
import './Header.scss'

interface HeaderProps {
  logo: ReactNode
  actions: ReactNode
}

const Header = ({ logo, actions }: HeaderProps) => {
  return (
    <div className="header">
      <div className="header__logo">{logo}</div>
      <div className="header__actions">{actions}</div>
    </div>
  )
}

export default Header
