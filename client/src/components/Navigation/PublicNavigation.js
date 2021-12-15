import { Link } from "react-router-dom";

export default function PublicNavigation() {
  return (
    <>
        <Link className="btn btn-outline-info me-md-2" to={"/login"}>Login</Link>
        <Link className="btn btn-outline-primary" to={"/register"}>Sign up</Link>
    </>
  );
}