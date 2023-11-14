import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { ModalHorario } from "../modal/ModalHorario";
import { useLocation } from "react-router-dom";
import { Student } from "../../types/Student";

export function UserInfo() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const location = useLocation();

  const handleClick = () => {
    onOpen();
  };

  const student = new Student(
    location.state.nombre,
    location.state.paterno,
    location.state.materno,
    location.state.carrera,
    location.state.semestre,
    location.state.num_control,
    location.state.imgUrl
  );

  return (
    <main className="flex p-16 h-full w-full gap-10 justify-center bg-guinda-50">
      <ModalHorario isOpen={isOpen} onClose={onClose} />
      {/* <h2 className="text-center font-bold text-3xl absolute z-10 top-10 ">
        Bienvenido
      </h2> */}
      <Card className="w-[400px] py-10">
        <CardBody className="flex flex-col items-center gap-12">
          <img
            className="rounded-full w-[60%]"
            // src="https://scontent-dfw5-1.xx.fbcdn.net/v/t39.30808-6/339915621_771195961028405_8541119965884114760_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGsRPg4tp3zSZffXNZPLXX6SMPn5IkeCR5Iw-fkiR4JHg6kDITFahQZ_19eF7VOFv2_mpKzMJI9UJxy3a1tC5uN&_nc_ohc=RvM7vTJLDFkAX8knDNc&_nc_ht=scontent-dfw5-1.xx&oh=00_AfAapQ7DGa1EtgYydu-703SKne7EQGt1GK76BwKIimoDGg&oe=65567E02"
            src={student.imgUrl}
          />
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
              Horario
            </Text>
          </CardBody>
          <CardFooter>
            <Button>Ver horario</Button>
          </CardFooter>
        </Card>
      </section>
    </main>
  );
}
