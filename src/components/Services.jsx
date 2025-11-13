import { FaPenNib, FaPaintBrush, FaSkullCrossbones } from "react-icons/fa";

export default function Services() {
  const services = [
    {
      icon: <FaPenNib className="text-[#e91e63] text-3xl" />,
      title: "Tatuagem Fina",
      description:
        "Traços delicados e precisos para tatuagens minimalistas e elegantes.",
    },
    {
      icon: <FaPaintBrush className="text-[#e91e63] text-3xl" />,
      title: "Realismo",
      description:
        "Retratos e cenas realistas com alto nível de detalhe e profundidade.",
    },
    {
      icon: <FaSkullCrossbones className="text-[#e91e63] text-3xl" />,
      title: "Old School",
      description: "Estilo clássico com cores vibrantes e linhas marcantes.",
    },
  ];

  return (
    <div className="py-16 px-4 md:px-12 bg-[#fdfdf9]">
      <h2 className="text-4xl font-bold text-center mb-10 animate-slideUp hover:text-[#e91e63] hover:scale-105 transition-all duration-300">
        Serviços
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-fadeIn">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow p-6 text-center hover:shadow-lg transition-shadow duration-300"
          >
            <div className="mb-4 flex justify-center">{service.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-sm text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
