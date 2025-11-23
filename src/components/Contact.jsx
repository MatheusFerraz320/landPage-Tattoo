import { FaInstagram, FaFacebookF, FaTiktok } from "react-icons/fa";

export default function Contact() {
  const whatsappNumber = "5511999999999";
  const message = "Olá! Gostaria de agendar uma tatuagem.";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <section
      id="contact"
      className="py-20 px-6 md:px-16 bg-gradient-to-r from-[#434343] via-[#2c3e50] to-[#000000] text-white"
    >
      <div className="max-w-5xl mx-auto">
        {/* Bloco de contato */}
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-6 animate-slideUp hover:text-red-500 transition-all duration-300 hover:scale-105">
            Contato
          </h2>
          <p className="text-lg mb-10 max-w-2xl mx-auto animate-fadeIn">
            Agende sua sessão ou tire dúvidas diretamente pelo WhatsApp.
          </p>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-red-600 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:bg-red-700 hover:scale-105 transition-transform duration-300 animate-slideUp"
          >
            Falar no WhatsApp
          </a>

          {/* Redes sociais */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-semibold mb-6 animate-slideUp">
              Me acompanhe nas redes sociais
            </h3>
            <div className="flex justify-center gap-8 text-gray-300 text-3xl animate-slideUp">
              <a
                href="https://instagram.com/seuusuario"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-red-500 transition-colors"
              >
                <FaInstagram />
              </a>
              <a
                href="https://facebook.com/seuusuario"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-red-500 transition-colors"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://tiktok.com/@seuusuario"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-red-500 transition-colors"
              >
                <FaTiktok />
              </a>
            </div>
          </div>
        </div>

        {/* Bloco do mapa */}
        <div className="mt-20 text-center">
          <h3 className="text-3xl font-semibold mb-8 animate-slideUp transition-transform duration-300 hover:scale-105 hover:text-red-400">
            Venha ao estúdio
          </h3>
          <div className="rounded-lg overflow-hidden shadow-lg animate-fadeIn">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18..."
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização do Estúdio"
            ></iframe>
          </div>
        </div>

        {/* Footer aumentado */}
        <footer className="mt-24 py-10 text-base text-gray-400 text-center">
          © {new Date().getFullYear()} Fabricio Gattoni. Todos os direitos
          reservados.
        </footer>
      </div>
    </section>
  );
}
