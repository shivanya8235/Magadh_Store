import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

import React from "react";
import { Button } from "@chakra-ui/react";

const ModalComp = (props) => {
  const {isOpen, onClose, heading, children} = props;
  return (
    <>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{heading}</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            {children}
          </ModalBody>

          
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalComp;
