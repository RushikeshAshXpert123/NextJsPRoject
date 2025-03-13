
import Link from "next/link";
import HomeIcon from "@mui/icons-material/Home";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import Image from "next/image";
import Tooltip from "@mui/material/Tooltip";

export default function Header() {
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);
  const toggleMobileNav = () => setMobileNavOpen(!isMobileNavOpen);

  return (
    <header className="bg-yellow-600 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <h1 className="text-2xl font-bold cursor-pointer">
        <Tooltip title="Home" arrow>
          <Link href={"/"}>
            <Image
              src="/imgs/newlogo.webp"
              alt="/imgs/newlogo.webp"
              width={150}
              height={150}
            />
          </Link>
          </Tooltip>
        </h1>
        <nav className="hidden md:flex">
          <ul className="flex space-x-6">
            <li>
              <Tooltip title="Home" arrow>
                <Link
                  href={"/"}
                  className="flex items-center hover:text-blue-300 transition duration-200"
                >
                  <HomeIcon className="mr-1" />
                </Link>
              </Tooltip>
            </li>
            <li>
              <Tooltip title="Available Hotels in All Locations" arrow>
                <Link
                  href={`/counts`}
                  className="flex items-center hover:text-blue-300 transition duration-200"
                >
                  <LocationOnIcon className="mr-1" />
                </Link>
              </Tooltip>
            </li>
          </ul>
        </nav>
        <div className="md:hidden">
          <button onClick={toggleMobileNav} className="focus:outline-none">
            {isMobileNavOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>
      {isMobileNavOpen && (
        <nav className="md:hidden bg-yellow-600">
          <ul className="flex flex-col space-y-2 px-6 pb-4">
            <li>
              <Tooltip title="Available Hotels in All Locations" arrow>
                <Link
                  href={`/counts`}
                  onClick={() => setMobileNavOpen(false)}
                  className="flex items-center hover:text-blue-300 transition duration-200"
                >
                  <LocationOnIcon className="mr-1" />
                </Link>
              </Tooltip>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
