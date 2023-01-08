import { Link } from "react-router-dom";
import { BsCart3 } from "react-icons/bs";

const Navbar = () => {
  return (
    <div className="navbar-bg  bg-violet-700 text-violet-50 h-20 border-b-2 border-violet-100 flex justify-center items-center">
      <div className="navbar container mx-auto  flex items-center justify-between">
        <div className="left">
          <span className="text-xl font-semibold uppercase">
            <span className="text-orange-500 uppercase">E</span>{" "}
            <span className="font-bold">-</span> Gadget
          </span>
        </div>
        <div className="right flex items-center gap-5 ">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/Products" className="nav-link">
            Products
          </Link>
          <Link to="/cart">
            <span className="cart-icon relative">
              <BsCart3 />
              <span className="cart-counter absolute -top-3 -right-3 font-xs bg-orange-500 h-5 w-5 rounded-full flex items-center justify-center font-medium">
                10
              </span>
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
