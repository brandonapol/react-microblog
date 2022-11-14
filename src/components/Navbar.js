import NavbarLinksMap from './NavbarLinksMap';

const navbarLinks = ['about', 'home', 'contact', 'login', 'sign up']
// const authenticatedLinks = ['about', 'home', 'contact', 'dashboard', 'logout']

export default function Navbar() {

  return (
    <>
    <div className="navbar navbar-expand-sm text-light px-5 py-3 bg-dark">
      <div className="container container-fluid p-0 lg-6">
        <a href="/" className="col lg-6">
          Microblog
        </a>
        <div className="col d-flex flex-row justify-content-around lg-6">
          <NavbarLinksMap links={navbarLinks}/>
        </div>
      </div>
    </div>
  </>
  )
}