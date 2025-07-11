import logo from "../../assets/Logos/Nav2.png";
import AccountIcon from "../Common/AccountIcon";
import { CartIcon } from "../Common/CartIcon";
import Wishlist from "../Common/Wishlist";

function Navigation() {
  return (
    <nav className="flex items-center py-2 px-6 justify-between border-b-2">
      <div>
        <a href="/" className="flex">
          <img src={logo} alt="Divastra Logo" className="h-10 w-auto" />
          <span
            style={{ fontFamily: "Marcellus", fontSize: "2rem" }}
            className="text-Dcolor hover:text-DoppColor "
          >
            iVastra
          </span>
        </a>
      </div>
      <div className="ml-44 mt-1 mr-auto ">
        <ul className="gap-14 flex items-center text-lg">
          <li className="text-DoppColor hover:text-Dcolor">
            <a href="/">Shop</a>
          </li>
          <li className="text-DoppColor hover:text-Dcolor">
            <a href="/mens">Men</a>
          </li>
          <li className="text-DoppColor hover:text-Dcolor">
            <a href="/womens">Women</a>
          </li>
          <li className="text-DoppColor hover:text-Dcolor">
            <a href="/kids">Kids</a>
          </li>
        </ul>
      </div>
      <div className="flex gap-16">
        <div className="flex items-center border rounded overflow-hidden hover:border-gray-800 w-[450px]">
          <div className="flex items-center px-3">
            <svg
              className="h-5 w-5 text-gray-500"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
            </svg>
          </div>
          <input
            type="text"
            placeholder="Search for products, brands and more..."
            className="flex-grow px-4 py-2 outline-none text-sm"
          />
        </div>
        <div className="flex flex-wrap items-center gap-6">
          <ul className="flex items-center gap-7">
            <li>
              <Wishlist />
            </li>
            <li>
              <AccountIcon />
            </li>
            <li>
              <CartIcon />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
