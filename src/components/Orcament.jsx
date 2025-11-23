export default function Orcament() {
  return (
    <section
      id="orcamento"
      className="py-20 px-6 md:px-16 bg-gradient-to-r from-[#fafafa] via-[#f0f0f0] to-[#e0e0e0] text-gray-900 animate-fadeIn"
    >
      <div className="max-w-4xl mx-auto text-center md:text-left">
        <h2 className="text-4xl font-bold mb-6 animate-slideUp hover:text-gray-600 hover:scale-105 transition-all duration-300">
          Como realizar um orçamento comigo
        </h2>

        <ol className="list-decimal list-inside text-lg leading-relaxed space-y-4">
          <li>
            Separe referências de tatuagens que você gosta e de elementos que
            possam fazer parte da composição, além de exemplos do estilo de
            tatuagem que você prefere.
          </li>
          <li>
            Me conte qual parte do corpo você pretende tatuar — braço, perna,
            cabeça hahaha. O importante é ser claro e específico, pois alguns
            locais exigem atenção especial.
          </li>
          <li>
            Sobre o tamanho da sua tatuagem: não precisa ser exato, mas me dá
            uma base dos elementos que podemos incluir na composição. Quanto
            mais próximo da realidade, melhor.
          </li>
          <li>
            Informações importantes sobre o local do projeto: você pretende
            cobrir algo? Cicatriz, outra tatuagem ou manchas? Isso é essencial
            para que eu saiba o que esperar e possa te orientar da melhor forma
            sobre o processo de criação.
          </li>
        </ol>

        <p className="text-lg leading-relaxed mt-6">
          Após receber essas informações, eu preparo o orçamento e crio a arte
          com alguns dias de antecedência. Qualquer alteração no projeto é feita
          no dia da sessão para garantir que fique perfeito!
        </p>
      </div>
    </section>
  );
}
