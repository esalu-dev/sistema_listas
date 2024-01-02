import {
  Text,
  Heading,
  Card,
  CardBody,
  CardFooter,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";
import { useLocation, useNavigate } from "react-router-dom";
import { IoExitOutline } from "react-icons/io5";
import { Teacher } from "../types/Teacher";
import materias from "../data/materias.json";
import { RegisteredStudents } from "./tabs/RegisteredStudents";

export function TeacherDashboard() {
  const location = useLocation();
  const navigate = useNavigate();

  if (location.state === null) {
    setTimeout(() => {
      navigate("/");
    }, 5000);
    return (
      <>
        <div className="w-screen h-screen flex flex-col justify-center gap-3 items-center">
          <Heading color={"guinda.900"} size={"3xl"}>
            404
          </Heading>
          <Text>No has iniciado sesión:(</Text>
          <Text>Redireccionando en 5 segundos</Text>
        </div>
      </>
    );
  }

  const teacher = new Teacher(
    location.state.nombre,
    location.state.paterno,
    location.state.materno,
    location.state.username,
    location.state.password,
    location.state.departamento,
    location.state.imgUrl
  );

  return (
    <main className="h-screen overflow-hidden flex p-16 gap-10 justify-center">
      {/* <main className="flex p-16 h-full w-full gap-10 justify-center"> */}
      <img
        src={teacher.imgUrl}
        alt="Fondo de foto de perfil"
        className="absolute object-cover top-0 right-0 -z-10 transform scale-110 w-screen h-screen filter blur-[20px] back brightness-50 "
      />
      <Card className="w-[400px] py-10">
        <CardBody className="flex flex-col items-center gap-12">
          <img className="rounded-full w-[60%]" src={teacher.imgUrl} />
        </CardBody>
        <CardFooter>
          <div className="flex flex-col text-center w-full">
            <h2 className="w-full text-center  text-xl font-bold">
              {teacher.getFullName()}
            </h2>
            <p>
              Departamento: <strong>{teacher.departamento}</strong>
            </p>
          </div>
        </CardFooter>
      </Card>
      <section className="flex-[2] flex flex-col gap-5">
        <Card className=" flex-1" align={"left"}>
          <CardBody>
            <Text fontSize="xl" as="b">
              <Tabs colorScheme="guinda">
                <TabList>
                  {materias.materias.map(
                    (materia) =>
                      materia.profesor === teacher.getFullName() && (
                        <Tab key={materia.nombre}>{materia.nombre}</Tab>
                      )
                  )}
                </TabList>

                <TabPanels>
                  {materias.materias.map(
                    (materia) =>
                      materia.profesor === teacher.getFullName() && (
                        <TabPanel key={materia.nombre}>
                          <RegisteredStudents materia={materia} />
                        </TabPanel>
                      )
                  )}
                </TabPanels>
              </Tabs>
            </Text>
          </CardBody>
        </Card>
      </section>
      {/* </main> */}
      <button
        className="absolute flex items-center justify-center rounded-full w-16 h-16 text-2xl shadow-xl  bg-guinda-400  right-10 bottom-10 hover:bg-guinda-200 transition-all ease-out duration-300 hover:rotate-180"
        onClick={() => navigate("/")}
      >
        <IoExitOutline />
      </button>
    </main>
  );
}
