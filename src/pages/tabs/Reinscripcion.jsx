import { Text } from "@chakra-ui/react";
import { TableReinscripcion } from "../modal/TableReinscripcion";
import { Card, CardBody, Divider, Button, CardFooter } from "@chakra-ui/react";
import { IoCloseOutline } from "react-icons/io5";
import { useState } from "react";

function calculateAverage(student) {
  let sum = 0;
  let count = 0;
  student.materias_acreditadas.forEach((materia) => {
    sum += Number(materia.calificacion);
    count++;
  });
  return sum / count;
}

export function Reinscripcion({ student }) {
  const [selected, setSelected] = useState([]);

  const saveHorario = () => {
    if (selected.length !== 3) {
      alert("Debes seleccionar 3 materias");
      return;
    }
    const horario = selected.map((materia) => {
      return {
        nombre: materia.nombre,
        creditos:
          materia.dias === "Lunes, Martes, Miercoles, Jueves, Viernes"
            ? "5"
            : "4",
        horario: materia.hora,
        salon: materia.aula,
      };
    });
    const num_control = student.num_control;
    console.log(num_control);
    console.log(horario);

    const url = `http://localhost:3000/estudiantes/${num_control}/actualizar-horario`;
    const actualizarHorarioEnElServidor = async () => {
      try {
        const response = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ horario: horario }),
        });

        const data = await response.json();
        console.log(data); // Puedes manejar la respuesta del servidor aquí
      } catch (error) {
        console.error("Error al actualizar el horario:", error);
      }
    };
    actualizarHorarioEnElServidor();
  };

  const handleClick = (materia) => {
    if (selected.includes(materia)) {
      return;
    }
    setSelected([...selected, materia]);
  };
  return (
    <div>
      {student.horario.length !== 0 ? (
        <section>
          <Text fontSize={"2xl"}>Tus materias ya están asignadas</Text>
        </section>
      ) : (
        <section>
          <Text fontSize={"2xl"}>Promedio: {calculateAverage(student)}</Text>
          <div className="flex gap-5">
            <div>
              <Text fontSize="xl">Materias disponibles:</Text>
              <TableReinscripcion
                semestre={student.semestre}
                carrera={student.carrera}
                handleClick={handleClick}
              />
            </div>

            <span>
              <Divider orientation="vertical" />
            </span>
            <div className="flex flex-col gap-4 flex-grow">
              <Text fontSize="xl">Materias seleccionadas:</Text>
              {selected.length === 0 ? (
                <Text>No hay materias seleccionadas</Text>
              ) : (
                <div className="flex flex-col gap-3">
                  {selected.map((materia) => (
                    <Card
                      boxShadow="md"
                      border="2px"
                      borderColor="gray.200"
                      direction="row"
                      key={materia.nombre}
                    >
                      <CardBody>
                        <Text>
                          {materia.nombre}
                          <p>
                            <b>{materia.profesor}</b>
                          </p>
                        </Text>
                      </CardBody>
                      <CardFooter>
                        <Button
                          colorScheme="guinda"
                          height="40px"
                          width="40px"
                          padding="0"
                          onClick={() => {
                            setSelected(
                              selected.filter(
                                (selectedMateria) =>
                                  selectedMateria.nombre !== materia.nombre
                              )
                            );
                          }}
                        >
                          <IoCloseOutline size="30px" />
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              )}
            </div>
          </div>
          <div className="flex justify-center pt-10">
            <Button
              color="white"
              bg="guinda.700"
              _hover={{ bg: "guinda.400" }}
              _active={{ bg: "guinda.950" }}
              variant="solid"
              onClick={saveHorario}
            >
              Guardar horario
            </Button>
          </div>
        </section>
      )}
    </div>
  );
}
