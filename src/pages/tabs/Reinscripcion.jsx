import { Text } from "@chakra-ui/react";
export function Reinscripcion({ student }) {
  return (
    <div>
      {student.horario.length !== 0 ? (
        <section>
          <Text fontSize={"2xl"}>Tus materias ya están asignadas</Text>
        </section>
      ) : (
        <section>
          <Text fontSize={"2xl"}>No tienes materias inscritas</Text>
        </section>
      )}
    </div>
  );
}
