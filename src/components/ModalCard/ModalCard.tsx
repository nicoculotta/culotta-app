import React, { useEffect } from 'react'
import './ModalCard.scss'
import { Button } from 'culotta-lib'

interface ModalCardProps {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
}

const ModalCard: React.FC<ModalCardProps> = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscapeKey)
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleEscapeKey)
      document.body.style.overflow = 'visible'
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div className="modal-card__overlay" onClick={onClose}>
      <div className="modal-card__content" onClick={(e) => e.stopPropagation()}>
        <Button className="modal-card__close" onClick={onClose} size="small" variants="secondary" hasBorder label="X" />
        {children}
      </div>
    </div>
  )
}

export default ModalCard
