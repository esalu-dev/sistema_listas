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

export function TableHorario({ horario }) {
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
          {horario.map((materia) => {
            return (
              <Tr key={materia.nombre}>
                <Td>{materia.nombre}</Td>
                {materia.creditos === "5" && (
                  <>
                    {[...Array(5)].map((_, i) => (
                      <Td key={i}>
                        <p className="font-bold">{materia.horario}</p>
                        <p>{materia.salon}</p>
                      </Td>
                    ))}
                  </>
                )}
                {materia.creditos === "4" && (
                  <>
                    {[...Array(4)].map((_, i) => (
                      <Td key={i}>
                        <p className="font-bold">{materia.horario}</p>
                        <p>{materia.salon}</p>
                      </Td>
                    ))}
                    <Td></Td>
                  </>
                )}
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </TableContainer>
  );
}
