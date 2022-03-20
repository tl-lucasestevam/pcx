import { useDisclosure } from "@chakra-ui/react";
import { createContext, FC, ReactNode, useState } from "react";

interface ModalContextData {
  modal: {
    error: (errorDescription: string) => void;
    success: (successDescription: string) => void;
  };
  onOpen: () => void;
  onClose: () => void;
  isOpen: boolean;
  description: string;
  type: string;
}

interface ModalProviderProps {
  children: ReactNode;
}

export const ModalContext = createContext({} as ModalContextData);

export const ModalProvider: FC<ModalProviderProps> = ({ children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [description, setDescription] = useState("");
  const [type, setType] = useState("");

  const modal = {
    error: (errorDescription: string) => {
      setType("Error");
      setDescription(errorDescription);
      onOpen();
    },
    success: (successDescription: string) => {
      setType("Success");
      setDescription(successDescription);
      onOpen();
    },
  };

  return (
    <ModalContext.Provider
      value={{ modal, isOpen, onOpen, onClose, description, type }}
    >
      {children}
    </ModalContext.Provider>
  );
};
