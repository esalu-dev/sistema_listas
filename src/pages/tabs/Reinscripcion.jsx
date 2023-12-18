import { Text } from "@chakra-ui/react";
import { TableReinscripcion } from "../modal/TableReinscripcion";
import { Card, CardBody, Divider, Button, CardFooter } from "@chakra-ui/react";
import { IoCloseOutline } from "react-icons/io5";

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
              <TableReinscripcion />
            </div>

            <span>
              <Divider orientation="vertical" />
            </span>
            <div className="flex flex-col gap-4 flex-grow">
              <Text fontSize="xl">Materias seleccionadas:</Text>
              <Card
                boxShadow="md"
                border="2px"
                borderColor="gray.200"
                direction="row"
              >
                <CardBody>
                  <Text>
                    Álgebra Lineal
                    <p>
                      <b>Reyes Martínez</b>
                    </p>
                  </Text>
                </CardBody>
                <CardFooter>
                  <Button
                    colorScheme="guinda"
                    height="40px"
                    width="40px"
                    padding="0"
                  >
                    <IoCloseOutline size="30px" />
                  </Button>
                </CardFooter>
              </Card>
              <Card
                boxShadow="md"
                border="2px"
                borderColor="gray.200"
                direction="row"
              >
                <CardBody>
                  <Text>
                    Álgebra Lineal
                    <p>
                      <b>Reyes Martínez</b>
                    </p>
                  </Text>
                </CardBody>
                <CardFooter>
                  <Button
                    colorScheme="guinda"
                    height="40px"
                    width="40px"
                    padding="0"
                  >
                    <IoCloseOutline size="30px" />
                  </Button>
                </CardFooter>
              </Card>
              <Card
                boxShadow="md"
                border="2px"
                borderColor="gray.200"
                direction="row"
              >
                <CardBody>
                  <Text>
                    Álgebra Lineal
                    <p>
                      <b>Reyes Martínez</b>
                    </p>
                  </Text>
                </CardBody>
                <CardFooter>
                  <Button
                    colorScheme="guinda"
                    height="40px"
                    width="40px"
                    padding="0"
                  >
                    <IoCloseOutline size="30px" />
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
          <div className="flex justify-center pt-10">
            <Button
              color="white"
              bg="guinda.700"
              _hover={{ bg: "guinda.400" }}
              _active={{ bg: "guinda.950" }}
              variant="solid"
            >
              Guardar horario
            </Button>
          </div>
        </section>
      )}
    </div>
  );
}
