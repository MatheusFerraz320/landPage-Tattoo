import { FaInstagram, FaFacebookF, FaTiktok } from "react-icons/fa";

export default function Contact() {
  const whatsappNumber = "5511999999999"; // Substitua pelo seu número com DDI + DDD
  const message = "Olá! Gostaria de agendar uma tatuagem.";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <div className="py-16 px-4 md:px-12 bg-[#fdfdf9] text-center">
      <h2 className="text-4xl font-bold mb-6 animate-slideUp hover:text-[#e91e63] hover:scale-105 transition-all duration-300">
        Contato
      </h2>

      <p className="text-lg mb-8 animate-fadeIn">
        Entre em contato diretamente pelo WhatsApp para agendar sua sessão ou
        tirar dúvidas.
      </p>

      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-[#e91e63] text-white px-6 py-3 rounded hover:drop-shadow-[0_0_10px_#e91e63] transition-all animate-slideUp"
      >
        Falar no WhatsApp
      </a>

      {/* Mapa de localização */}
      <div className="mt-12 animate-fadeIn">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.123456789!2d-46.401234!3d-23.967890!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce123456789abc%3A0x123456789abcdef!2sPraia%20Grande%2C%20SP!5e0!3m2!1spt-BR!2sbr!4v1234567890"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Localização do Estúdio"
        ></iframe>
      </div>

      {/* Redes sociais */}
      <div className="mt-10 flex justify-center gap-6 text-[#e91e63] text-2xl animate-slideUp">
        <a
          href="https://instagram.com/seuusuario"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>
        <a
          href="https://facebook.com/seuusuario"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebookF />
        </a>
        <a
          href="https://tiktok.com/@seuusuario"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTiktok />
        </a>
      </div>

      {/* Rodapé */}
      <footer className="mt-12 text-sm text-gray-500">
        © {new Date().getFullYear()} Fabricio Gattoni. Todos os direitos
        reservados.
      </footer>
    </div>
  );
}
