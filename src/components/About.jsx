export default function Sobre() {
  return (
    <section
      id="sobre"
      className="py-20 px-6 md:px-16 bg-[#f5f0e6] text-gray-800 animate-fadeIn"
    >
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-10">
        {/* Imagem */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="/images/background.png"
            alt="Foto do tatuador"
            className="rounded-lg shadow-lg w-full h-auto object-cover animate-slideUp hover:scale-105 hover:shadow-xl transition-transform duration-300"
          />
        </div>

        {/* Texto */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl font-bold mb-6 animate-slideUp hover:text-[#e91e63] hover:scale-105 transition-all duration-300">
            Sobre Mim
          </h2>
          <p className="text-lg leading-relaxed">
            Sou <span className="text-[#e91e63] font-semibold">Fabricio</span>,
            tatuador apaixonado por transformar ideias em arte na pele. Com anos
            de experiência e dedicação, busco criar tatuagens únicas que
            expressem a identidade de cada cliente.
          </p>
          <p className="text-lg leading-relaxed mt-4">
            Meu estúdio é um espaço seguro, criativo e acolhedor — onde cada
            traço é feito com técnica, sensibilidade e respeito. Seja sua
            primeira tattoo ou mais uma história na pele, estou aqui pra tornar
            esse momento inesquecível.
          </p>
        </div>
      </div>
    </section>
  );
}
