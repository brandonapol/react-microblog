import NavLink from "./NavLink"

let counter = 0;

export default function NavbarLinksMap({ links }) {
  return (
    links.map(link => {
        counter++;
        return <NavLink key={ counter } link={link} />
    })
  )
}
