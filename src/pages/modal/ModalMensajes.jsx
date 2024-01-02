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

export function ModalMensajes({ isOpen, onClose }) {
  return (
    <Modal onClose={onClose} size={"xl"} isOpen={isOpen}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Mensajes</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text>
            ATENCIÓN: El horario de reinscripción será publicado después de las
            11pm (hora en la que el banco proporciona la información de los
            pagos registrados) ATENCIÓN: A todos los alumnos que vayan a cursar
            segundo semestre, favor de cargar TUTORÍAS (son créditos
            complementarios), ES DE CARÁCTER OBLIGATORIO QUEREMOS ESCUCHARTE
            TIENES ALGUNA SUGERENCIA O QUEJA DE CÓMO TE BRINDAMOS EL SERVICIO
            EDUCATIVO, ESCRÍBENOS A:
            sgc.buzondequejasysugerencias@itdurango.edu.mx ES IMPORTANTE
            ESCRIBIR CORRECTAMENTE LOS DATOS DEL CORREO, PARA PODER DARLE
            SEGUIMIENTO Y ESTAR EN CONTACTO.
          </Text>
        </ModalBody>
        <ModalFooter>
          <Button onClick={onClose}>Volver</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
