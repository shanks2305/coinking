import { useState } from 'react';
import { FaTwitter, FaDiscord } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoClose } from 'react-icons/io5';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  function handleOpenClose() {
    setOpen(!open);
  }

  return (
    <>
      <nav className="mx-auto max-w-7xl p-8 flex justify-between items-center">
        <h1 className="text-3xl font-bold">COINKING</h1>
        <ul className="hidden md:flex items-center gap-8 text-xl ">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="#market">Market</Link>
          </li>
          <li>
            <Link to="#choose-us">Choose Us</Link>
          </li>
          <li>
            <Link to="#join-us">Join Us</Link>
          </li>
        </ul>
        <ul className="hidden md:flex items-center gap-4 text-xl">
          <li>
            <a>
              <FaTwitter />
            </a>
          </li>
          <li>
            <a>
              <FaDiscord />
            </a>
          </li>
        </ul>
        <div>
          <GiHamburgerMenu
            size={30}
            className="cursor-pointer block md:hidden"
            onClick={handleOpenClose}
          />
        </div>
      </nav>

      <nav
        className={open ? 'side-nav-open side-nav' : 'side-nav side-nav-closed'}
      >
        {open && (
          <div className="p-8 text-black h-full">
            <div className="flex flex-row-reverse">
              <IoClose
                size={40}
                className="cursor-pointer block md:hidden"
                onClick={handleOpenClose}
              />
            </div>
            <div className="flex justify-center items-center h-full ">
              <ul className="text-4xl font-bold flex flex-col gap-6 text-center">
                <li>
                  <a>Home</a>
                </li>
                <li>
                  <a>Market</a>
                </li>
                <li>
                  <a>Choose Us</a>
                </li>
                <li>
                  <a>Join Us</a>
                </li>
              </ul>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
