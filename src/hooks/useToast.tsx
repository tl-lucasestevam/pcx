import { useDisclosure } from '@chakra-ui/react';
import { createContext, FC, ReactNode, useContext, useState } from 'react';

interface ToastContextData {
  toast: Toast;
  onOpen: () => void;
  onClose: () => void;
  isOpen: boolean;
  description: string;
  type: string;
}

interface Toast {
  error: (errorDescription: string) => void;
  success: (successDescription: string) => void;
}

interface ToastProviderProps {
  children: ReactNode;
}

const ToastContext = createContext({} as ToastContextData);

export const ToastProvider: FC<ToastProviderProps> = ({ children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [description, setDescription] = useState('');
  const [type, setType] = useState('');

  const toast = {
    error: (errorDescription: string) => {
      setType('Error');
      setDescription(errorDescription);
      onOpen();
    },
    success: (successDescription: string) => {
      setType('Success');
      setDescription(successDescription);
      onOpen();
    },
  };

  return (
    <ToastContext.Provider
      value={{ toast, isOpen, onOpen, onClose, description, type }}
    >
      {children}
    </ToastContext.Provider>
  );
};

export function useToast() {
  const context = useContext(ToastContext);
  return context;
}
