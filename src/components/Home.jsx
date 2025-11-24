import { useEffect, useState } from "react";

export default function Home() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), 300);
  }, []);

  return (
    <div
      id="home"
      className={`pt-24 h-screen relative flex items-center justify-center transition-opacity duration-1000 ${
        visible ? "opacity-100" : "opacity-0"
      } bg-[url('/images/cape.jpg')] bg-cover bg-center bg-no-repeat`}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/80 backdrop-blur-sm"></div>

      <div className="relative z-10 text-center text-white">
        <h1 className="text-5xl font-vibes animate-pulseGlow">
          Fabricio Gattoni
        </h1>
        <p className="mt-4 text-lg animate-fadeIn">
          Arte na pele com personalidade
        </p>
      </div>
    </div>
  );
}
