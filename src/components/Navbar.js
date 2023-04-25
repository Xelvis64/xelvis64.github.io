import React, {useState, useEffect} from "react";
import {Navbar, MobileNav, Typography, IconButton} from "@material-tailwind/react";
import {Link, useLocation} from "react-router-dom";

export default function Example() {
  const [openNav, setOpenNav] = useState(false);
  useEffect(() => {
    window.addEventListener("resize", () => window.innerWidth >= 960 && setOpenNav(false));
  }, []);

  const location = useLocation();

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography as="li" variant="small">
        <Link
          to="/about"
          className={`flex items-center font-bold text-lg text-black hover:text-secondary duration-100 ${
            location.pathname === "/about" && "text-secondary underline"
          }`}
        >
          About Us
        </Link>
      </Typography>
      <Typography as="li" variant="small">
        <Link
          to="/blog"
          className={`flex items-center font-bold text-lg text-black hover:text-secondary duration-100 ${
            location.pathname === "/blog" && "text-secondary underline"
          }`}
        >
          Blog
        </Link>
      </Typography>
      <Typography as="li" variant="small">
        <Link
          to="/contact"
          className={`flex items-center font-bold text-lg text-black hover:text-secondary duration-100 ${
            location.pathname === "/contact" && "text-secondary underline"
          }`}
        >
          Contact
        </Link>
      </Typography>
    </ul>
  );

  return (
    <>
      <Navbar className="sticky inset-0 z-10 h-max max-w-full rounded-none py-2 px-4 lg:px-8 lg:py-4 drop-shadow-lg bg-white">
        <div className="flex items-center justify-between text-blue-gray-900">
          <Link to={"/"} className="mr-4 w-[50px] h-[50px]">
            <img src={"../../images/logo.png"} width={"100%"} height={"100%"} alt="Logo"></img>
          </Link>
          <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block">{navList}</div>
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <MobileNav open={openNav}>{navList}</MobileNav>
      </Navbar>
    </>
  );
}
