import { Text, useDisclosure } from "@chakra-ui/react";
import { TableReinscripcion } from "../modal/TableReinscripcion";
import { Card, CardBody, Divider, Button, CardFooter } from "@chakra-ui/react";
import { IoCloseOutline } from "react-icons/io5";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AlertDialogIncomplete } from "../../AlertDialog";

function calculateAverage(student) {
  let sum = 0;
  let count = 0;
  student.materias_acreditadas.forEach((materia) => {
    sum += Number(materia.calificacion);
    count++;
  });
  let promedio = sum / count;
  return Math.round(promedio * 100) / 100;
}

export function Reinscripcion({ student }) {
  const navigate = useNavigate();
  const [selected, setSelected] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [alertData, setAlertData] = useState({ title: "", body: "" });

  const days = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miercoles",
    "Jueves",
    "Viernes",
    "Sabado",
  ];
  const date = new Date();
  const saveHorario = () => {
    if (selected.length !== 3) {
      setAlertData({
        title: "Horario incompleto",
        body: "Por favor, selecciona 3 materias",
      });
      onOpen();
      return;
    }
    let prerrequisitosAprovados = true;
    selected.forEach((materia) => {
      if (materia.prerrequisito !== undefined) {
        console.log(materia.prerrequisito);
        const materiaEncontrada = student.materias_acreditadas.find(
          (materia_acreditada) =>
            materia_acreditada.nombre === materia.prerrequisito
        );
        console.log(materiaEncontrada);

        if (materiaEncontrada) {
          console.log("Calificaión: " + materiaEncontrada.calificacion);
          console.log("Aprovada? " + parseInt(materiaEncontrada.calificacion));
          if (parseInt(materiaEncontrada.calificacion.trim()) < 70) {
            console.log("No aprobada");
            prerrequisitosAprovados = false;
            setAlertData({
              title: "Horario incompleto",
              body:
                "Por favor, acredita los prerrequisitos de las materias seleccionadas. No has acreditado el prerrequisito de " +
                materia.nombre +
                " (" +
                materia.prerrequisito +
                ")",
            });
            onOpen();
            return;
          }
        }
      }
    });
    if (!prerrequisitosAprovados) {
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
        profesor: materia.profesor,
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
    setAlertData({
      title: "Horario guardado",
      body: "Vuelve a iniciar sesión! Redireccionando en 3 segundos",
    });
    setTimeout(() => {
      navigate("/students", { state: student });
    }, 3000);
    onOpen();
  };

  const handleClick = (materia) => {
    if (selected.includes(materia)) {
      return;
    }
    setSelected([...selected, materia]);
  };
  return (
    <div>
      <AlertDialogIncomplete
        isOpen={isOpen}
        onClose={onClose}
        title={alertData.title}
        body={alertData.body}
      />
      {student.horario.length !== 0 ? (
        <section>
          <Text fontSize={"2xl"}>Tus materias ya están asignadas</Text>
        </section>
      ) : (
        <section>
          <Text fontSize={"2xl"}>Promedio: {calculateAverage(student)}</Text>
          <Text fontSize={"lg"}>
            Hora asignada: {calculateAverage(student) > 9 && "9:00 AM"}{" "}
            {calculateAverage(student) > 8 &&
              calculateAverage(student) < 9 &&
              "11:00 AM"}{" "}
            {calculateAverage(student) > 7 &&
              calculateAverage(student) < 8 &&
              "1:00 PM"}{" "}
            Día: {days[date.getDay()]}
          </Text>
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
