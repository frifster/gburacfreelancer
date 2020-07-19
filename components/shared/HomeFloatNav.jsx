import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'

function HomeFloatNav () {
  return (
    <Link href='/me'>
      <span className='floating-nav'><FontAwesomeIcon icon={faHome} /></span>
    </Link>
  )
}

export default HomeFloatNav
