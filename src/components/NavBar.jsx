export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-gradient-to-r from-white via-gray-50 to-gray-100 shadow z-50">
      <ul className="flex justify-center gap-6 py-4 text-base font-medium">
        <li>
          <a href="#home" className="hover:text-pink-600 transition-colors">
            Home
          </a>
        </li>
        <li>
          <a href="#about" className="hover:text-pink-600 transition-colors">
            Sobre
          </a>
        </li>
        <li>
          <a
            href="#portfolio"
            className="hover:text-pink-600 transition-colors"
          >
            Portfolio
          </a>
        </li>
        <li>
          <a
            href="#orcamento"
            className="hover:text-pink-600 transition-colors"
          >
            Orçamento
          </a>
        </li>
        <li>
          <a href="#contact" className="hover:text-pink-600 transition-colors">
            Contato
          </a>
        </li>
      </ul>
    </nav>
  );
}
