import { Link } from "react-router-dom";
import '../style.css';
import { useSelector } from "react-redux";

const Header = () => {
    const cartItems = useSelector((store)=> store.cart.items)

    return (
      <header className="header">
        <nav>
          <Link to="/">Home</Link>
          <Link to="/cart">Cart 🛒{cartItems.length}</Link>
        </nav>
      </header>
    );
}
    
export default Header;