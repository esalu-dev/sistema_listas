import { Text } from "@chakra-ui/react";
import { TableReinscripcion } from "../modal/TableReinscripcion";
import { Card, CardBody, Divider, Button, CardFooter } from "@chakra-ui/react";
import { IoCloseOutline } from "react-icons/io5";
import { useState } from "react";
import datos from "../../data/students.json";

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
  const students = datos.estudiantes;

  const saveHorario = () => {
    if (selected.length !== 3) {
      alert("Debes seleccionar 3 materias");
      return;
    }
    const horario = selected.map((materia) => {
      return {
        nombre: materia.nombre,
        profesor: materia.profesor,
        hora: materia.hora,
        aula: materia.aula,
      };
    });
    const newStudent = {
      ...student,
      horario,
    };
    const index = students.findIndex(
      (student) => student.matricula === newStudent.matricula
    );
    students[index] = newStudent;
    console.log(newStudent);
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
