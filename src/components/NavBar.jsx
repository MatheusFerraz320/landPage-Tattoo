export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-[#fdfdf9] shadow z-50">
      <ul className="flex justify-center gap-6 py-4 text-base font-medium">
        <li>
          <a href="#home" className="hover:text-[#e91e63] transition-colors">
            Home
          </a>
        </li>
        <li>
          <a
            href="#portfolio"
            className="hover:text-[#e91e63] transition-colors"
          >
            Portfolio
          </a>
        </li>
        <li>
          <a
            href="#services"
            className="hover:text-[#e91e63] transition-colors"
          >
            Serviços
          </a>
        </li>
        <li>
          <a href="#contact" className="hover:text-[#e91e63] transition-colors">
            Contato
          </a>
        </li>
      </ul>
    </nav>
  );
}
