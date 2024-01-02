import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Button,
} from "@chakra-ui/react";
import datos from "../../data/materias.json";

export function TableReinscripcion({ semestre, carrera, handleClick }) {
  const materias = datos.materias;
  return (
    <div className="min-w-[1000px]">
      <TableContainer>
        <Table variant="striped" colorScheme="guinda">
          <TableCaption>Materias disponibles</TableCaption>
          <Thead>
            <Tr>
              <Th>Materia</Th>
              <Th>Lunes</Th>
              <Th>Martes</Th>
              <Th>Miércoles</Th>
              <Th>Jueves</Th>
              <Th>Viernes</Th>
              <Th>Seleccionar</Th>
            </Tr>
          </Thead>
          <Tbody>
            {materias.map((materia) => {
              if (
                materia.carrera === carrera &&
                materia.semestre === semestre.toString()
              ) {
                return (
                  <Tr key={materia.nombre} height="120px">
                    <Td maxW="200px">
                      <p className="truncate">{materia.nombre}</p>
                      <p>
                        <b>{materia.profesor}</b>
                      </p>
                    </Td>
                    {materia.dias ===
                      "Lunes, Martes, Miercoles, Jueves, Viernes" && (
                      <>
                        {[...Array(5)].map((_, i) => (
                          <Td key={i}>
                            <p className="font-bold">{materia.hora}</p>
                            <p>{materia.aula}</p>
                          </Td>
                        ))}
                      </>
                    )}
                    {materia.dias === "Lunes, Martes, Miercoles, Jueves" && (
                      <>
                        {[...Array(4)].map((_, i) => (
                          <Td key={i}>
                            <p className="font-bold">{materia.hora}</p>
                            <p>{materia.aula}</p>
                          </Td>
                        ))}
                        <Td></Td>
                      </>
                    )}

                    <Td>
                      <Button
                        color="white"
                        bg="guinda.900"
                        _hover={{ bg: "guinda.400" }}
                        _active={{ bg: "guinda.950" }}
                        variant="solid"
                        onClick={() => handleClick(materia)}
                      >
                        Seleccionar
                      </Button>
                    </Td>
                  </Tr>
                );
              }
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </div>
  );
}
