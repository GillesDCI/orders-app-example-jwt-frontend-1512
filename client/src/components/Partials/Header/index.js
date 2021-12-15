import { Link } from 'react-router-dom';
import { PublicNavigation, PrivateNavigation } from '../../Navigation';

export default function Header({loggedIn}) {
  return (
    <div className="d-flex flex-column flex-md-row align-items-center justify-content-between
    p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
      <h5 className="my-0 mr-md-auto font-weight-normal">OrdersApp</h5>
      <nav className="my-2 my-md-0 me-md-3">
          <Link className="p-2 text-dark" to={"/"}>Home</Link>
          {loggedIn ? <PrivateNavigation /> : <PublicNavigation />}
       </nav>
      </div>
   )
}