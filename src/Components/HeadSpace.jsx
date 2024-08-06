import { Link } from "react-router-dom";
import "./Components.css"

export default function HeadSpace() {

    return (
    <div class="header-place">
      <h2>React Hook Form Workspace</h2>
        <Link to="/login" >
            Log In
        </Link>

        <Link to="/products" >
            Products
        </Link>

        <Link to="/" >
            Mainpage 
        </Link>
    </div>
      )
      }