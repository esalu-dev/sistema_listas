import { FiArrowRight } from "react-icons/fi";

export function LoginButton({
  student,
  handleMouseEnter,
  handleMouseLeave,
  hover,
}) {
  return (
    <a href={student ? "/students" : "/teacher"}>
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={`border-2 h-[480px] w-[400px] relative bg-gradient-to-br ${
          student ? "from-guinda-700" : "from-green-950"
        } to-gray-600 rounded-2xl p-10 text-white flex flex-col gap-2 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl  ${
          hover ? "blur-sm grayscale" : ""
        }`}
      >
        <img
          src="https://tecolotito.elsiglodedurango.com.mx/cdn-cgi/image/format=auto,width=1024/i/2023/06/1179807.jpeg"
          alt="Fondo del tecno"
          className={`absolute top-0 right-0 rounded-2xl h-[480px] w-[400px] object-cover opacity-[0.2]`}
        />
        <h3 className="text-3xl font-bold">
          {student ? "Estudiantes" : "Maestros"}
        </h3>
        <h5>Iniciar sesión</h5>
        <span className="absolute right-8 bottom-8 rounded-full w-14 h-14 flex items-center justify-center backdrop-blur-lg text-3xl border">
          <FiArrowRight />
        </span>
      </div>
    </a>
  );
}
