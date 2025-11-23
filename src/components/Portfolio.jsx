export default function Portfolio() {
  const images = [
    "images/portfolio1.jpg",
    "images/portfolio2.png",
    "images/portfolio3.png",
    "images/portfolio4.png",
    "images/portfolio5.png",
    "images/portfolio6.png",
  ];

  return (
    <div className="py-16 px-4 md:px-12 bg-gradient-to-r from-[#0f0f0f] via-[#1a1a1a] to-[#2c2c2c] text-white">
      <h2 className="text-5xl font-vibes text-center mb-10 animate-slideUp transition-all duration-300 hover:text-gray-300 hover:scale-105">
        Portfolio
      </h2>
      <p className="text-lg text-center max-w-2xl mx-auto mb-8 animate-fadeIn">
        Aqui estão alguns dos meus trabalhos recentes. Cada tatuagem é única e
        carrega a identidade e a história de quem a escolhe.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 animate-fadeIn">
        {images.map((src, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-lg border border-gray-700 shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-300"
          >
            <img
              src={src}
              alt={`Tattoo ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
