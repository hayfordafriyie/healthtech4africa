import Link from 'next/link';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 p-3 bg-gradient-to-r from-blue-900 via-black to-pink-600 text-white shadow-[0px_4px_8px_0px_rgba(0,0,0,0.9)] rounded-b-lg">
      {/* Logo Section */}
      <div className="max-w-screen-lg mx-auto flex justify-center md:justify-between items-center">
  <Link href="/">
    <span className="font-bold text-xl md:text-2xl text-white hover:text-[#ff6600] transition duration-300 transform hover:scale-110">
      HealthTech4Africa
    </span>
  </Link>

        {/* Navigation Section */}
        <nav className="hidden md:block">
          <ul className="flex space-x-6 text-sm md:text-base font-medium">
            <li>
              <Link
                href="/"
                className="text-white hover:text-[#ff6600] transition duration-300 transform hover:scale-110"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/About"
                className="text-white hover:text-[#ff6600] transition duration-300 transform hover:scale-110"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-white hover:text-[#ff6600] transition duration-300 transform hover:scale-110"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
