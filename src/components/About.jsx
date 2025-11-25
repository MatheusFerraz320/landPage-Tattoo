export default function About({ name }) {
  return (
    <section
      id="sobre"
      className="py-20 px-6 md:px-16 bg-[#fdfcfb] text-gray-900 animate-fadeIn"
    >
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-10">
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="/images/about.png"
            alt="Foto do tatuador"
            className="rounded-lg shadow-lg w-full h-auto object-cover animate-slideUp hover:scale-105 hover:shadow-xl transition-transform duration-300"
          />
        </div>

        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl font-bold mb-6 animate-slideUp hover:text-pink-600 hover:scale-105 transition-all duration-300">
            Sobre
          </h2>
          <p className="text-lg leading-relaxed">
            Olá meu nome é {name} Antes de tatuar, aprendi a observar. Meu
            trabalho nasce desse olhar, atento, curioso, inquieto.
          </p>
          <p className="text-lg leading-relaxed mt-4">
            Gosto do contraste: o movimento da cidade, a calma da natureza. Crio
            tatuagens que respiram, cada traço carrega sua história e meu olhar.
          </p>
          <p className="text-lg leading-relaxed mt-4">
            Tatuei durante anos em diferentes estilos, até encontrar um caminho
            que fizesse sentido pra mim.
          </p>
          <p className="text-lg leading-relaxed mt-4">
            Hoje, meu trabalho tem identidade, leveza e presença, e nasce sempre
            de um encontro: entre o seu mundo e o meu.
          </p>
        </div>
      </div>
    </section>
  );
}
