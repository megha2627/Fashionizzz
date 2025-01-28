



import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import CartModal from "../pages/shop/CartModal";
import avatorImg from "../assets/avatar.png";
import { logout } from "../redux/features/auth/authSlice";
import { useLogoutUserMutation } from "../redux/features/auth/authApi";

const Navbar = () => {
  const products = useSelector((state) => state.cart.products);
  const [isCartOpen, setisCartOpen] = useState(false);
  const handleCartToggle = () => {
    setisCartOpen(!isCartOpen);
  };
  console.log(products);

  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  console.log("the user is", user);

  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const [logoutUser] = useLogoutUserMutation();
  const navigate = useNavigate();

  useEffect(() => {
    console.log("User state updated:", user);
  }, [user]);

  const handleDropdownToggle = () => {
    if (!user) {
      navigate("/login");
    } else {
      setIsDropDownOpen(!isDropDownOpen);
    }
  };

  const handleLogout = async () => {
    try {
      console.log("Logout button clicked");
      await logoutUser().unwrap();
      console.log("Logout request successful");
      dispatch(logout());
      console.log("User cleared from state");
      navigate("/login");
      console.log("Navigated to login page");
    } catch (err) {
      console.log("Failed to logout:", err);
    }
  };

  const adminDropDownMenus = [
    { label: "Dashboard", link: "/dashboard/admin" },
    { label: "Manage Items", link: "/dashboard/manage-products" },
    { label: "All orders", link: "/dashboard/manage-orders" },
    { label: "Add new Post", link: "/dashboard/add-new-post" },
  ];

  const userDropDownMenus = [
    { label: "Dashboard", link: "/dashboard" },
    { label: "Profile", link: "/dashboard/profile" },
    { label: "Payment", link: "/dashboard/payments" },
    { label: "Orders", link: "/dashboard/orders" },
  ];

  const dropdownMenus =
    user?.role === "admin" ? [...adminDropDownMenus] : [...userDropDownMenus];

  return (
    <header className="fixed-nav-bar w-nav">
      <nav className="max-w-screen-2xl mx-auto flex items-center justify-between px-4">
        <ul className="nav__links" style={{ paddingLeft: 200 }}>
          <li className="link">
            <Link to="/">Home</Link>
          </li>
          <li className="link">
            <Link to="/shop">Shop</Link>
          </li>
          <li className="link">
            <Link to="/page">Pages</Link>
          </li>
         
        </ul>
        <div className="nav__logo" style={{ paddingLeft: 150 }}>
          <Link to="/">
            H&M<span>.</span>
          </Link>
        </div>
        <div className="nav__icons relative" style={{ paddingRight: 150 }}>
          <span>
            <Link to="/search">
              <i className="ri-search-line"></i>
            </Link>
          </span>
          <span>
            <button onClick={handleCartToggle} className="hover:text-primary">
              <i className="ri-shopping-bag-line"></i>
              <sup className="text-sm  inline-block px-1.5 text-white rounded-full bg-primary text-center ">
                {products.reduce(
                  (total, product) => total + product.quantity,
                  0
                )}
              </sup>
            </button>
          </span>
          <span className="relative">
            <img
              onClick={handleDropdownToggle}
              src={user?.profileImage || avatorImg}
              alt=""
              className="size-6 rounded-full cursor-pointer"
            />
            {user && isDropDownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md">
                <ul className="py-1">
                  {dropdownMenus.map((menu, index) => (
                    <li key={index}>
                      <Link
                        onClick={() => {
                          setIsDropDownOpen(false);
                        }}
                        className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                        to={menu.link}
                      >
                        {menu.label}
                      </Link>
                    </li>
                  ))}
                  <li>
                    <Link
                      onClick={handleLogout}
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                    >
                      Logout
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </span>
        </div>
      </nav>

      {isCartOpen && (
        <CartModal
          products={products}
          isOpen={isCartOpen}
          onClose={handleCartToggle}
        />
      )}
    </header>
  );
};

export default Navbar;