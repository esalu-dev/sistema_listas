import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  Text,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export function LandingPage() {
  let navigate = useNavigate();

  return (
    <section className="w-screen h-screen">
      <header className="flex px-10 py-6 justify-between">
        <h1 className="text-xl font-bold">Sistema Integral de Información</h1>
        <nav>
          <ul className="flex gap-10">
            <li>
              <a
                href="https://siit.itdurango.edu.mx/sistema/"
                target="_BLANK"
                rel="noreferrer"
              >
                SII
              </a>
            </li>
            <li>
              <a
                href="https://plataforma.itdurango.edu.mx/"
                target="_BLANK"
                rel="noreferrer"
              >
                Plataforma
              </a>
            </li>
            <li>
              <a href="#">Ayuda</a>
            </li>
          </ul>
        </nav>
      </header>
      <span className="absolute w-screen h-[2px] bg-guinda-900"></span>
      <div className="flex justify-around px-36 py-10 h-[600px] border-2 gap-14">
        <Card align="center" className="flex-1">
          <CardHeader>
            <Heading size="md">Iniciar sesión como estudiante</Heading>
          </CardHeader>
          <CardBody>
            <img src="" alt="" srcSet="" />
          </CardBody>
          <CardFooter>
            <Button colorScheme="guinda" onClick={() => navigate("/students")}>
              Entrar
            </Button>
          </CardFooter>
        </Card>
        <Card align="center" className="flex-1">
          <CardHeader>
            <Heading size="md"> Iniciar sesión como maestro</Heading>
          </CardHeader>
          <CardBody>
            <Text></Text>
          </CardBody>
          <CardFooter>
            <Button colorScheme="blue">Entrar</Button>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
}
