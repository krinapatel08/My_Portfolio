export default function Navbar() {
  const navItems = [
    { label: "ABOUT", href: "#about" },
    { label: "EXPERIENCE", href: "#experience" },
    { label: "SKILLS", href: "#skills" },
    { label: "EDUCATION", href: "#education" },
    { label: "PROJECTS", href: "#projects" },
  ];

  return (
    <nav className="bg-transparent">
      <div className="flex items-center justify-between py-5">
        
        {/* Logo */}
        <a href="/" className="text-[#16f2b3] text-3xl font-bold">
          KRINA
        </a>

        {/* Navigation Links */}
        <ul className="mt-4 flex h-screen max-h-0 w-full flex-col items-start text-sm opacity-0 md:mt-0 md:h-auto md:max-h-screen md:w-auto md:flex-row md:space-x-1 md:border-0 md:opacity-100">
          {navItems.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                className="block px-4 py-2 no-underline outline-none hover:no-underline"
              >
                <span className="text-sm text-white transition-colors duration-300 hover:text-pink-600">
                  {label}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
