import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <ul>
      <li>
        <Link to="/">HomePage</Link>
      </li>
      <li>
        <Link to="/login">LoginPage</Link>
      </li>
      <li>
        <Link to="/register">RegisterPage</Link>
      </li>
      <li>
        <Link to="/checkout">CheckoutPage</Link>
      </li>
    </ul>
  );
};

export default Header;
