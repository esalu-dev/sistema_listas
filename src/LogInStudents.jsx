import {
  FormControl,
  FormLabel,
  FormHelperText,
  InputRightElement,
  Input,
  Button,
  InputGroup,
  useDisclosure,
} from "@chakra-ui/react";
import { useState } from "react";
import { AlertDialogIncomplete } from "./AlertDialog";
import datos from "./data/students.json";
import { useNavigate } from "react-router-dom";

export function LogInStudents() {
  const estudiantes = datos.estudiantes;
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(!show);
  const { isOpen, onOpen, onClose } = useDisclosure();
  let navigate = useNavigate();

  const [valueNumber, setValueNumber] = useState("");
  const [valuePassword, setValuePassword] = useState("");
  const handleChangeNumber = (event) => setValueNumber(event.target.value);
  const handleChangePassword = (event) => setValuePassword(event.target.value);
  const [alertData, setAlertData] = useState({ title: "", body: "" });

  const handleSubmit = (event) => {
    event.preventDefault();

    let newAlertData = { title: "", body: "" };

    if (valueNumber === "" || valuePassword === "") {
      newAlertData = {
        title: "Datos incompletos",
        body: "Por favor, llena todos los campos",
      };
    } else {
      const estudiante = estudiantes.find(
        (estudiante) => estudiante.num_control === valueNumber
      );

      if (estudiante === undefined) {
        newAlertData = {
          title: "Datos incorrectos",
          body: "El número de control no existe",
        };
      } else if (estudiante.password !== valuePassword) {
        newAlertData = {
          title: "Datos incorrectos",
          body: "La contraseña es incorrecta",
        };
      } else {
        navigate("/students/dashboard", {
          state: {
            num_control: estudiante.num_control,
            imgUrl: estudiante.imgUrl,
            nombre: estudiante.nombre,
            paterno: estudiante.apellido_paterno,
            materno: estudiante.apellido_materno,
            semestre: estudiante.semestre,
            carrera: estudiante.carrera,
            horario: estudiante.horario,
            materias_acreditadas: estudiante.materias_acreditadas,
          },
        });
        return;
      }
    }

    setAlertData(newAlertData);
    onOpen();
  };

  return (
    <>
      <div className="flex border-2 h-screen ">
        <div className="flex-1 max-lg:hidden">
          <img
            src="https://scontent.fpbc5-1.fna.fbcdn.net/v/t39.30808-6/332748851_955144132562859_8004370872755606028_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGo1oQlr4AH2fBbo46ue_pKB14yv1kNLaUHXjK_WQ0tpQNeB5wnqQMTzolS4XkzCcfGNZ9k1Wkp5vqbeaQ09Fzg&_nc_ohc=lNpNg9SQSjwAX_hUPJN&_nc_oc=AQmZ9uyn15LMUprApD6TfcEZrayt1_6pk18Xu3GNTsdRNvoAEV5VS4nsZHPudwa8nBXtKGd-LRKwoq8o_pxUWoJi&_nc_ht=scontent.fpbc5-1.fna&oh=00_AfAUkiDvb5aWA2qnUd7DsUttFy4l7bVpsWh3m0Ommkn5Hg&oe=655344B0"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="px-28 w-1/2 flex flex-col justify-center max-lg:w-full max-lg:px-10 ">
          <h1 className="text-3xl font-bold mb-20 w-full text-center">
            Iniciar sesión como estudiante
          </h1>
          <AlertDialogIncomplete
            isOpen={isOpen}
            onClose={onClose}
            title={alertData.title}
            body={alertData.body}
          />
          <FormControl>
            <FormLabel>Número de control</FormLabel>
            <Input
              type="number"
              placeholder="Introduce tu número de control"
              focusBorderColor="guinda.800"
              onChange={handleChangeNumber}
              value={valueNumber}
            />
          </FormControl>
          <div className="h-10"></div>
          <FormControl>
            <FormLabel>Contraseña</FormLabel>
            <InputGroup size="md">
              <Input
                pr="4.5rem"
                type={show ? "text" : "password"}
                placeholder="Introduce tu contraseña"
                focusBorderColor="guinda.800"
                onChange={handleChangePassword}
                value={valuePassword}
              />
              <InputRightElement width="5.5rem">
                <Button
                  h="1.75rem"
                  size="sm"
                  onClick={handleShow}
                  bg="guinda.100"
                  _hover={{ bg: "guinda.200" }}
                >
                  {show ? "Ocultar" : "Mostrar"}
                </Button>
              </InputRightElement>
            </InputGroup>
            <FormHelperText>No compartas tu contraseña</FormHelperText>
          </FormControl>
          <div className="w-full flex mt-20 justify-evenly gap-10">
            <Button
              color="white"
              bg="guinda.900"
              _hover={{ bg: "guinda.400" }}
              _active={{ bg: "guinda.950" }}
              variant="solid"
              className="w-1/2"
              onClick={handleSubmit}
            >
              Iniciar sesión
            </Button>
            <Button
              colorScheme="guinda"
              variant="outline"
              className="w-1/2"
              onClick={() => navigate("/")}
            >
              Regresar
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
