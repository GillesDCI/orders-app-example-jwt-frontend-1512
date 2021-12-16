import { Link } from "react-router-dom";

export default function PrivateNavigation() {
  return (
    <>
        <Link className="p-2 text-dark" to={"/list-users"}>List</Link>
        <Link className="p-2 text-dark" to={"/profile"}>My Profile</Link>
        <Link className="btn btn-outline-primary" to={"/logout"}>Logout</Link>
    </>
  );
}
