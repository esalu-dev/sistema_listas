import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { ModalHorario } from "../modal/ModalHorario";
// import { useLocation, useNavigate } from "react-router-dom";
// import { Student } from "../../types/Student";

export function UserInfo({ student }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleClick = () => {
    onOpen();
  };

  return (
    <main className="flex p-16 h-full w-full gap-10 justify-center">
      <ModalHorario
        isOpen={isOpen}
        onClose={onClose}
        horario={student.horario}
      />
      <img
        src={student.imgUrl}
        alt="Fondo de foto de perfil"
        className="absolute object-cover top-0 right-0 -z-10 transform scale-110 w-screen h-screen filter blur-[20px] back brightness-50 "
      />
      <Card className="w-[400px] py-10">
        <CardBody className="flex flex-col items-center gap-12">
          <img className="rounded-full w-[60%]" src={student.imgUrl} />
        </CardBody>
        <CardFooter>
          <div className="flex flex-col text-center w-full">
            <h2 className="w-full text-center  text-xl font-bold">
              {student.getFullName()}
            </h2>
            <p>
              Núm. control: <strong>{student.num_control}</strong>
            </p>
            <p>
              Semestre: <strong>{student.semestre}</strong>
            </p>
            <p>
              Carrera: <strong>{student.carrera}</strong>
            </p>
          </div>
        </CardFooter>
      </Card>
      <section className="flex-[2] flex flex-col gap-5">
        <Card className="py-10 flex-1" align={"center"}>
          <CardBody>
            <Text fontSize="xl" as="b">
              Horario
            </Text>
          </CardBody>
          <CardFooter>
            <Button onClick={handleClick}>Ver horario</Button>
          </CardFooter>
        </Card>
        <Card className="py-10 flex-1" align={"center"}>
          <CardBody>
            <Text fontSize="xl" as="b">
              Mensajes
            </Text>
          </CardBody>
          <CardFooter>
            <Button>Ver mensajes</Button>
          </CardFooter>
        </Card>
      </section>
    </main>
  );
}
