import { Link } from 'react-router-dom';

function capitalize(str) {
    return str[0].toUpperCase() + str.substring(1)
}

export default function NavLink({ link }) {
  return (
    <div className="badge link-light bg-light p-3">
     <Link to={link} >{ capitalize(link) }</Link>
  </div>
  )
}
