import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

export function RegisteredStudents({ materia }) {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const obtenerStudents = async () => {
      try {
        const response = await fetch("http://localhost:3000/estudiantes");
        const data = await response.json();
        console.log(data);
        setStudents(data.estudiantes);
      } catch (error) {
        console.error("Error al obtener students:", error);
      }
    };

    obtenerStudents();
  }, []);
  return (
    <TableContainer>
      <Table variant="striped" colorScheme="guinda">
        <Thead>
          <Tr>
            <Th>Num. control</Th>
            <Th>Nombre</Th>
          </Tr>
        </Thead>
        <Tbody>
          {students.map((student) => {
            return student.horario.map((horario) => {
              if (
                horario.nombre === materia.nombre &&
                horario.profesor === materia.profesor
              ) {
                return (
                  <Tr key={student.num_control}>
                    <Td>{student.num_control}</Td>
                    <Td>
                      {student.nombre +
                        " " +
                        student.apellido_paterno +
                        " " +
                        student.apellido_materno}
                    </Td>
                  </Tr>
                );
              }
              return null;
            });
          })}
        </Tbody>
      </Table>
    </TableContainer>
  );
}
