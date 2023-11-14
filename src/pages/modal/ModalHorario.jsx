import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import { TableHorario } from "./TableHorario";

export function ModalHorario({ isOpen, onClose }) {
  return (
    <Modal onClose={onClose} size={"full"} isOpen={isOpen}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Horario</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <TableHorario />
        </ModalBody>
        <ModalFooter>
          <Button onClick={onClose}>Volver</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
