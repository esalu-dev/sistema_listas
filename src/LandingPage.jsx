import { LoginButton } from "./components/LoginButton";
import "./fondo.css";
import { useState } from "react";

export function LandingPage() {
  const [hover, setHover] = useState(false);
  const [hover2, setHover2] = useState(false);
  const [blurredBackground, setBlurredBackground] = useState(
    "absolute top-0 right-0 w-screen h-screen fondo transition-all duration-300"
  );

  const handleMouseEnter = () => {
    setHover(true);
    setBlurredBackground(
      "absolute top-0 right-0 w-screen h-screen fondo blur-sm transition-all duration-300"
    );
  };

  const handleMouseLeave = () => {
    setHover(false);
    setBlurredBackground(
      "absolute top-0 right-0 w-screen h-screen fondo transition-all duration-300"
    );
  };

  const handleMouseEnter2 = () => {
    setHover2(true);
    setBlurredBackground(
      "absolute top-0 right-0 w-screen h-screen fondo blur-[2px] transition-all duration-300"
    );
  };

  const handleMouseLeave2 = () => {
    setHover2(false);
    setBlurredBackground(
      "absolute top-0 right-0 w-screen h-screen fondo transition-all duration-300"
    );
  };

  return (
    <main className="h-screen relative overflow-hidden">
      <span className={blurredBackground}></span>
      {/* <img
        src="https://upload.wikimedia.org/wikipedia/commons/1/1f/Instituto_Tecnologico_de_Durango.jpg"
        alt="Edificio del Instituto Tecnológico de Durango"
        className="absolute top-0 left-0 w-full h-full object-cover filter  opacity-10 -z-10"
      /> */}
      <header className="flex px-10 py-6 justify-between backdrop-blur-[2px]">
        <h1 className="text-xl font-bold text-guinda-800">
          Sistema Integral de Información
        </h1>
        <nav>
          <ul className="flex gap-10">
            <li>
              <a
                href="https://siit.itdurango.edu.mx/sistema/"
                target="_BLANK"
                rel="noreferrer"
              >
                SII
              </a>
            </li>
            <li>
              <a
                href="https://plataforma.itdurango.edu.mx/"
                target="_BLANK"
                rel="noreferrer"
              >
                Plataforma
              </a>
            </li>
            <li>
              <a href="#">Ayuda</a>
            </li>
          </ul>
        </nav>
      </header>
      <section className="flex w-full py-20 justify-evenly">
        <LoginButton
          student={true}
          handleMouseEnter={handleMouseEnter}
          handleMouseLeave={handleMouseLeave}
          hover={hover2}
        />
        <LoginButton
          student={false}
          handleMouseLeave={handleMouseLeave2}
          handleMouseEnter={handleMouseEnter2}
          hover={hover}
        />
      </section>
    </main>
  );
}
