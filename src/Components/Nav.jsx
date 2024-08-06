import { Link } from "react-router-dom";
import "./Components.css"

export default function Nav() {
    return (
        <nav>
            <Link to="/login" >
            Click to Log In
            </Link>

            <Link to="/products" >
            Click to Continue Without Logging In 
            </Link>

        </nav>
    )
}