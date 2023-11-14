import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";

export function TableHorario() {
  return (
    <TableContainer>
      <Table variant="striped" colorScheme="guinda">
        <TableCaption>Horario actual</TableCaption>
        <Thead>
          <Tr>
            <Th>Materia</Th>
            <Th>Lunes</Th>
            <Th>Martes</Th>
            <Th>Miércoles</Th>
            <Th>Jueves</Th>
            <Th>Viernes</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>Fundamentos de programación</Td>
            <Td>9:00-10:00</Td>
            <Td>9:00-10:00</Td>
            <Td>9:00-10:00</Td>
            <Td>9:00-10:00</Td>
            <Td>9:00-10:00</Td>
          </Tr>
          <Tr>
            <Td>Cálculo Diferencial</Td>
            <Td>8:00-9:00</Td>
            <Td>8:00-9:00</Td>
            <Td>8:00-9:00</Td>
            <Td>8:00-9:00</Td>
            <Td>8:00-9:00</Td>
          </Tr>
          <Tr>
            <Td>Taller de ética</Td>
            <Td>11:00-12:00</Td>
            <Td>11:00-12:00</Td>
            <Td>11:00-12:00</Td>
            <Td>11:00-12:00</Td>
            <Td>11:00-12:00</Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  );
}
