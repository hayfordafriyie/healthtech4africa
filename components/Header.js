import Link from 'next/link';
import { FaHome, FaInfoCircle, FaPhoneAlt, FaBrain, FaDatabase } from 'react-icons/fa'; // FontAwesome icons

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 p-3 bg-gradient-to-r from-blue-900 via-black to-pink-600 text-white shadow-[0px_4px_8px_0px_rgba(0,0,0,0.9)] rounded-b-lg">
      {/* Logo Section */}
      <div className="max-w-screen-lg mx-auto flex justify-between items-center">
        <Link href="/">
          <span className="font-bold text-xl md:text-2xl text-white hover:text-gray-300 hover:font-extrabold transition duration-300 transform hover:scale-110">
            HealthTech4Africa
          </span>
        </Link>

        {/* Desktop Navigation Section */}
        <nav className="hidden md:flex">
          <ul className="flex space-x-6 text-sm md:text-base font-medium">
            <li>
              <Link
                href="/"
                className="text-white hover:text-gray-300 hover:font-extrabold transition duration-300 transform hover:scale-110"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/About"
                className="text-white hover:text-gray-300 hover:font-extrabold transition duration-300 transform hover:scale-110"
              >
                About
              </Link>
            </li>
            <li>
              <Link
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
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>

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
      </div>
    </header>
  );
};

export default Header;
