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
import { useEffect, useState } from "react";
import { AlertDialogIncomplete } from "./AlertDialog";
import { useNavigate } from "react-router-dom";

export function LogInTeacher() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();

  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  const [valueUser, setValueUser] = useState("");
  const [valuePassword, setValuePassword] = useState("");
  const handleChangeUser = (event) => setValueUser(event.target.value);
  const handleChangePassword = (event) => setValuePassword(event.target.value);
  const [alertData, setAlertData] = useState({ title: "", body: "" });

  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    const obtenerTeachers = async () => {
      try {
        const response = await fetch("http://localhost:3000/maestros");
        const data = await response.json();
        console.log(data);
        setTeachers(data.teachers);
      } catch (error) {
        console.error("Error al obtener teachers:", error);
      }
    };

    obtenerTeachers();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    let newAlertData = { title: "", body: "" };

    if (valueUser === "" || valuePassword === "") {
      newAlertData = {
        title: "Datos incompletos",
        body: "Por favor, llena todos los campos",
      };
    } else {
      const teacher = teachers.find(
        (teacher) => teacher.username === valueUser
      );

      if (teacher === undefined) {
        newAlertData = {
          title: "Datos incorrectos",
          body: "El usuario no existe",
        };
      } else if (teacher.password !== valuePassword) {
        newAlertData = {
          title: "Datos incorrectos",
          body: "La contraseña es incorrecta",
        };
      } else {
        navigate("/teacher/dashboard", {
          state: {
            username: teacher.username,
            imgUrl: teacher.imgUrl,
            nombre: teacher.nombre,
            paterno: teacher.apellido_paterno,
            materno: teacher.apellido_materno,
            departamento: teacher.departamento,
            password: teacher.password,
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
      <div className="flex border-2 h-screen">
        <div className="px-28 w-1/2 flex flex-col justify-center max-lg:w-full">
          <h1 className="text-3xl font-bold mb-20 w-full text-center">
            Iniciar sesión como docente
          </h1>
          <AlertDialogIncomplete
            isOpen={isOpen}
            onClose={onClose}
            title={alertData.title}
            body={alertData.body}
          />{" "}
          <FormControl>
            <FormLabel>Usuario</FormLabel>
            <Input
              placeholder="Introduce tu nombre de usuario"
              focusBorderColor="guinda.800"
              onChange={handleChangeUser}
              value={valueUser}
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
                  onClick={handleClick}
                  bg="guinda.100"
                  _hover={{ bg: "guinda.200" }}
                >
                  {show ? "Ocultar" : "Mostrar"}
                </Button>
              </InputRightElement>
            </InputGroup>
            <FormHelperText>No compartas tu contraseña</FormHelperText>
          </FormControl>
          <div className="w-full flex mt-20 justify-evenly gap-10 ">
            <Button
              color="white"
              bg="guinda.900"
              _hover={{ bg: "guinda.400" }}
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
              onClick={() => {
                navigate("/");
              }}
            >
              Regresar
            </Button>
          </div>
        </div>
        <div className="flex-1 max-lg:hidden">
          <img
            src="https://yt3.googleusercontent.com/ytc/AOPolaQ7EAFn40IdxX_8VP-UE3e65XxPsTdyL6l-vPWzXg=s900-c-k-c0x00ffffff-no-rj"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </>
  );
}
