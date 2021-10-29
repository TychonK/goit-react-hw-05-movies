import { NavLink } from "react-router-dom";

export default function Navigation() {
    return (
        <>
        <nav>
            <NavLink exact to="/" className="nav-link" activeClassName="active">Home</NavLink>
            <NavLink exact to="/movies" className="nav-link" activeClassName="active">Movies</NavLink>
        </nav>
        <hr />
        </>
    )
}