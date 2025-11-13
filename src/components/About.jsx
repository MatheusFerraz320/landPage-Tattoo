export default function Sobre() {
  return (
    <section
      id="sobre"
      className="py-20 px-6 md:px-16 bg-[#f5f0e6] text-gray-800 animate-fadeIn"
    >
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6 animate-slideUp">Sobre Mim</h2>
        <p className="text-lg leading-relaxed">
          Sou <span className="text-[#e91e63] font-semibold">Matheus</span>,
          tatuador apaixonado por transformar ideias em arte na pele. Com anos
          de experiência e dedicação, busco criar tatuagens únicas que expressem
          a identidade de cada cliente.
        </p>
        <p className="text-lg leading-relaxed mt-4">
          Meu estúdio é um espaço seguro, criativo e acolhedor — onde cada traço
          é feito com técnica, sensibilidade e respeito. Seja sua primeira
          tattoo ou mais uma história na pele, estou aqui pra tornar esse
          momento inesquecível.
        </p>
      </div>
    </section>
  );
}
