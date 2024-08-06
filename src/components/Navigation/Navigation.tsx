import { Button } from 'culotta-lib'
import './Navigation.scss'

interface NavigationProps {
  handlePageChange: (page: number) => void
  currentPage: number
  totalPages: number
}

const Navigation = ({
  handlePageChange,
  currentPage,
  totalPages,
}: NavigationProps) => {
  return (
    <div className="navigation">
      <Button
        label="Previous"
        onClick={() => handlePageChange(currentPage - 1)}
      />
      <Button label="Next" onClick={() => handlePageChange(currentPage + 1)} />
    </div>
  )
}

export default Navigation
