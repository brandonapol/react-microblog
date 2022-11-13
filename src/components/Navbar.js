import { makeStyles } from '@mui/styles';


const useStyles = makeStyles({
    flex: {
      display: 'flex',
      color: 'blue',
    }
});

export default function Navbar() {

  const classes = useStyles({
    root: null,
  });

  return (
    <>
      <div className="navbar navbar-expand-sm text-light px-5 py-3 bg-dark">
        <div className="container container-fluid p-0 lg-6">
          <a href="/" className="col lg-6">
            Microblog
          </a>
          <div className="col d-flex flex-row justify-content-around lg-6">
            <div className="border border-light p-3 rounded badge badge-light">
              <a href="/about">About</a>
            </div>
            <div className="border border-light p-3">
              <a href="/dashboard">Dashboard</a>
            </div>
            <div className="border border-light p-3">
              <a href="/contact">Contact</a>
            </div>
            <div className="border border-light p-3">
              <a href="/login">Login</a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
