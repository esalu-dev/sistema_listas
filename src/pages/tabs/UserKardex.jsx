import {
  Card,
  CardHeader,
  Heading,
  CardBody,
  Text,
  CardFooter,
} from "@chakra-ui/react";
import datos from "../../data/materias.json";

export function UserKardex({ student }) {
  const materias = datos.materias;

  const materiasConCalificaciones = {};
  student.materias_acreditadas.forEach((materia) => {
    materiasConCalificaciones[materia.nombre] = materia.calificacion;
  });

  const materiasEnCurso = {};
  student.horario.forEach((materia) => {
    materiasEnCurso[materia.nombre] = materia;
  });

  return (
    <section className="flex gap-10 justify-center">
      {[1, 2, 3].map((semestre) => (
        <div key={semestre} className="flex flex-col gap-2">
          <Heading size="md" align="center">
            Semestre {semestre}
          </Heading>
          {materias
            .filter(
              (materia) =>
                materia.carrera === student.carrera &&
                materia.semestre === semestre.toString()
            )
            .map((materia) => (
              <div key={materia.nombre}>
                <Card
                  align="center"
                  size={"sm"}
                  className="w-[200px] h-[200px]"
                  bg={
                    parseInt(materiasConCalificaciones[materia.nombre]) > 70
                      ? "green.300"
                      : parseInt(materiasConCalificaciones[materia.nombre]) < 70
                      ? "red.300"
                      : materiasEnCurso[materia.nombre]
                      ? "yellow.300"
                      : "gray.300"
                  }
                  key={materia.hora}
                >
                  <CardHeader>
                    <Heading size="md">{materia.nombre}</Heading>
                  </CardHeader>
                  <CardBody>
                    <Text>
                      Calificación:{""}
                      <b>{materiasConCalificaciones[materia.nombre]}</b>
                    </Text>
                  </CardBody>
                  <CardFooter>
                    <Text>
                      Maestro: <b>{materia.profesor}</b>
                    </Text>
                  </CardFooter>
                </Card>
              </div>
            ))}
        </div>
      ))}
    </section>
  );
}
