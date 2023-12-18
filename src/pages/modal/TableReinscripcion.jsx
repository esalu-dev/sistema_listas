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

export function TableReinscripcion() {
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
            <Tr height="120px">
              <Td>
                Álgebra Lineal
                <p>
                  <b>Reyes Martínez</b>
                </p>
              </Td>
              <Td>
                <p className="font-bold">7:00-8:00</p>
                <p>Salón 1</p>
              </Td>
              <Td>
                <p className="font-bold">7:00-8:00</p>
                <p>Salón 1</p>
              </Td>
              <Td>
                <p className="font-bold">7:00-8:00</p>
                <p>Salón 1</p>
              </Td>
              <Td>
                <p className="font-bold">7:00-8:00</p>
                <p>Salón 1</p>
              </Td>
              <Td>
                <p className="font-bold">7:00-8:00</p>
                <p>Salón 1</p>
              </Td>
              <Td>
                <Button
                  color="white"
                  bg="guinda.900"
                  _hover={{ bg: "guinda.400" }}
                  _active={{ bg: "guinda.950" }}
                  variant="solid"
                >
                  Seleccionar
                </Button>
              </Td>
            </Tr>
            <Tr height="120px">
              <Td>
                Álgebra Lineal
                <p>
                  <b>Reyes Martínez</b>
                </p>
              </Td>
              <Td>
                <p className="font-bold">7:00-8:00</p>
                <p>Salón 1</p>
              </Td>
              <Td>
                <p className="font-bold">7:00-8:00</p>
                <p>Salón 1</p>
              </Td>
              <Td>
                <p className="font-bold">7:00-8:00</p>
                <p>Salón 1</p>
              </Td>
              <Td>
                <p className="font-bold">7:00-8:00</p>
                <p>Salón 1</p>
              </Td>
              <Td>
                <p className="font-bold">7:00-8:00</p>
                <p>Salón 1</p>
              </Td>
              <Td>
                <Button
                  color="white"
                  bg="guinda.900"
                  _hover={{ bg: "guinda.400" }}
                  _active={{ bg: "guinda.950" }}
                  variant="solid"
                >
                  Seleccionar
                </Button>
              </Td>
            </Tr>
            <Tr height="120px">
              <Td>
                Álgebra Lineal
                <p>
                  <b>Reyes Martínez</b>
                </p>
              </Td>
              <Td>
                <p className="font-bold">7:00-8:00</p>
                <p>Salón 1</p>
              </Td>
              <Td>
                <p className="font-bold">7:00-8:00</p>
                <p>Salón 1</p>
              </Td>
              <Td>
                <p className="font-bold">7:00-8:00</p>
                <p>Salón 1</p>
              </Td>
              <Td>
                <p className="font-bold">7:00-8:00</p>
                <p>Salón 1</p>
              </Td>
              <Td>
                <p className="font-bold">7:00-8:00</p>
                <p>Salón 1</p>
              </Td>
              <Td>
                <Button
                  color="white"
                  bg="guinda.900"
                  _hover={{ bg: "guinda.400" }}
                  _active={{ bg: "guinda.950" }}
                  variant="solid"
                >
                  Seleccionar
                </Button>
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </div>
  );
}
