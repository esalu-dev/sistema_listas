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

  const handleSubmit = (event) => {
    event.preventDefault();
    if (valueUser === "" || valuePassword === "") {
      onOpen();
      return;
    }
  };
  return (
    <>
      <div className="flex border-2 h-screen">
        <div className="px-28 w-1/2 flex flex-col justify-center max-lg:w-full">
          <h1 className="text-3xl font-bold mb-20 w-full text-center">
            Iniciar sesión como docente
          </h1>
          <AlertDialogIncomplete isOpen={isOpen} onClose={onClose} />
          <FormControl>
            <FormLabel>Usuario</FormLabel>
            <Input
              type="number"
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
