export default function Portfolio() {
  const images = [
    "images/portfolio1.jpg",
    "images/portfolio2.png",
    "images/portfolio3.png",
    "images/portfolio4.png",
    "images/portfolio5.png",
    "images/portfolio6.jpg",
  ];

  return (
    <div className="py-16 px-4 md:px-12 bg-[#111827] text-white">
      <h2 className="text-4xl font-bold text-center mb-10 animate-slideUp transition-all duration-300 hover:text-[#e91e63] hover:scale-105">
        Portfolio
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 animate-fadeIn">
        {images.map((src, index) => (
          <div
            key={index}
            className="overflow-hidden rounded shadow hover:scale-105 hover:shadow-xl transition-transform duration-300"
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
