import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Text,
  Heading,
} from "@chakra-ui/react";
import { UserInfo } from "./tabs/UserInfo";
import { UserKardex } from "./tabs/UserKardex";
import { useLocation, useNavigate } from "react-router-dom";
import { Student } from "../types/Student";

export function UserDashboard() {
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

  const student = new Student(
    location.state.nombre,
    location.state.paterno,
    location.state.materno,
    location.state.carrera,
    location.state.semestre,
    location.state.num_control,
    location.state.imgUrl,
    location.state.horario,
    location.state.materias_acreditadas
  );

  return (
    <main className="h-screen">
      <Tabs className="h-[94%]">
        <TabList>
          <Tab>Perfil</Tab>
          <Tab>Reinscripción</Tab>
          <Tab>Kárdex de calificaciones</Tab>
        </TabList>

        <TabPanels className="h-full">
          <TabPanel padding={0} className="h-full">
            <UserInfo student={student} />
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
          <TabPanel>
            <UserKardex student={student} />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </main>
  );
}
