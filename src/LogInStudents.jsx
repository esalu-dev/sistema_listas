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

export function LogInStudents() {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(!show);
  const { isOpen, onOpen, onClose } = useDisclosure();
  let navigate = useNavigate();

  const handleClear = () => {
    createLinkedList();
  };

  const [estudiantes, setEstudiantes] = useState([]);

  useEffect(() => {
    const obtenerEstudiantes = async () => {
      try {
        const response = await fetch("http://localhost:3000/estudiantes");
        const data = await response.json();
        console.log(data);
        setEstudiantes(data.estudiantes);
      } catch (error) {
        console.error("Error al obtener estudiantes:", error);
      }
    };

    obtenerEstudiantes();
  }, []);

  function createLinkedList() {
    let head = null;
    let tail = null;
    let size = 0;

    function Node(value) {
      this.value = value;
      this.next = null;
    }

    this.push = function (value) {
      const node = new Node(value);
      if (!head) {
        head = node;
        tail = node;
      } else {
        tail.next = node;
        tail = node;
      }
      size++;
    };

    this.pop = function () {
      if (!head) {
        return null;
      } else {
        let current = head;
        let previous = null;
        while (current.next) {
          previous = current;
          current = current.next;
        }
        tail = previous;
        tail.next = null;
        size--;
        if (size === 0) {
          head = null;
          tail = null;
        }
        return current.value;
      }
    };

    this.getSize = function () {
      return size;
    };

    this.print = function () {
      let current = head;
      let result = "";
      while (current) {
        result += current.value + " -> ";
        current = current.next;
      }
      result += "null";
      console.log(result);
    };
  }

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
            src="../assets/estudiantes_login.jpg"
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
