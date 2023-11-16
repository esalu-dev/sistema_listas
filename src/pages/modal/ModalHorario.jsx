import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import { TableHorario } from "./TableHorario";

export function ModalHorario({ isOpen, onClose, horario }) {
  return (
    <Modal onClose={onClose} size={"full"} isOpen={isOpen}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Horario</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          {horario.length === 0 && (
            <Text fontSize={"2xl"}>No tienes materias inscritas</Text>
          )}
          {horario.length !== 0 && <TableHorario horario={horario} />}
        </ModalBody>
        <ModalFooter>
          <Button onClick={onClose}>Volver</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
