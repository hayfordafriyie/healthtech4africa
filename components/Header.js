import Link from 'next/link';
<<<<<<< HEAD
import { FaHome, FaInfoCircle, FaPhoneAlt, FaBrain, FaDatabase } from 'react-icons/fa'; // FontAwesome icons
=======
>>>>>>> af86edafa1dde8b62eb8e6acd3fd35df330239fe

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 p-3 bg-gradient-to-r from-blue-900 via-black to-pink-600 text-white shadow-[0px_4px_8px_0px_rgba(0,0,0,0.9)] rounded-b-lg">
      {/* Logo Section */}
<<<<<<< HEAD
      <div className="max-w-screen-lg mx-auto flex justify-between items-center">
        <Link href="/">
          <span className="font-bold text-xl md:text-2xl text-white hover:text-gray-300 hover:font-extrabold transition duration-300 transform hover:scale-110">
            HealthTech4Africa
          </span>
        </Link>

        {/* Desktop Navigation Section */}
        <nav className="hidden md:flex">
=======
      <div className="max-w-screen-lg mx-auto flex justify-center md:justify-between items-center">
  <Link href="/">
    <span className="font-bold text-xl md:text-2xl text-white hover:text-[#ff6600] transition duration-300 transform hover:scale-110">
      HealthTech4Africa
    </span>
  </Link>

        {/* Navigation Section */}
        <nav className="hidden md:block">
>>>>>>> af86edafa1dde8b62eb8e6acd3fd35df330239fe
          <ul className="flex space-x-6 text-sm md:text-base font-medium">
            <li>
              <Link
                href="/"
<<<<<<< HEAD
                className="text-white hover:text-gray-300 hover:font-extrabold transition duration-300 transform hover:scale-110"
=======
                className="text-white hover:text-[#ff6600] transition duration-300 transform hover:scale-110"
>>>>>>> af86edafa1dde8b62eb8e6acd3fd35df330239fe
              >
                Home
              </Link>
            </li>
            <li>
              <Link
<<<<<<< HEAD
                href="/about"
                className="text-white hover:text-gray-300 hover:font-extrabold transition duration-300 transform hover:scale-110"
=======
                href="/About"
                className="text-white hover:text-[#ff6600] transition duration-300 transform hover:scale-110"
>>>>>>> af86edafa1dde8b62eb8e6acd3fd35df330239fe
              >
                About
              </Link>
            </li>
            <li>
              <Link
<<<<<<< HEAD
                href="/ai-tools"
                className="text-white hover:text-gray-300 hover:font-extrabold transition duration-300 transform hover:scale-110"
              >
                AI Tools
              </Link>
            </li>
            <li>
              <Link
                href="/data"
                className="text-white hover:text-gray-300 hover:font-extrabold transition duration-300 transform hover:scale-110"
              >
                Data
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-white hover:text-gray-300 hover:font-extrabold transition duration-300 transform hover:scale-110"
=======
                href="/contact"
                className="text-white hover:text-[#ff6600] transition duration-300 transform hover:scale-110"
>>>>>>> af86edafa1dde8b62eb8e6acd3fd35df330239fe
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
<<<<<<< HEAD

        {/* Mobile Icon Navigation */}
        <nav className="md:hidden flex justify-around w-full">
          <Link href="/" className="text-white hover:text-gray-300 transition duration-300 hover:font-extrabold">
            <FaHome className="text-2xl" />
          </Link>
          <Link href="/about" className="text-white hover:text-gray-300 transition duration-300 hover:font-extrabold">
            <FaInfoCircle className="text-2xl" />
          </Link>
          <Link href="/ai-tools" className="text-white hover:text-gray-300 transition duration-300 hover:font-extrabold">
            <FaBrain className="text-2xl" />
          </Link>
          <Link href="/data" className="text-white hover:text-gray-300 transition duration-300 hover:font-extrabold">
            <FaDatabase className="text-2xl" />
          </Link>
          <Link href="/contact" className="text-white hover:text-gray-300 transition duration-300 hover:font-extrabold">
            <FaPhoneAlt className="text-2xl" />
          </Link>
        </nav>
=======
>>>>>>> af86edafa1dde8b62eb8e6acd3fd35df330239fe
      </div>
    </header>
  );
};

export default Header;
