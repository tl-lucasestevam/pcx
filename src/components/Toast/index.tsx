import {
  Button,
  Modal as ModalChakra,
  ModalBody,
  Heading,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from '@chakra-ui/react';
import Image from 'next/image';
import { FC } from 'react';
import { useToast } from '~/hooks';

const Modal: FC = () => {
  const { onClose, isOpen, description, type } = useToast();

  return (
    <ModalChakra onClose={onClose} isOpen={isOpen} isCentered>
      <ModalOverlay />
      <ModalContent
        p="4rem"
        backgroundImage="url(/assets/modalBg.svg)"
        backgroundColor="gray.900"
        backgroundPosition="center"
        borderRadius="0px"
        maxW={{
          base: '90vw',
          sm: '60vw',
          md: '40vw',
          lg: '30vw',
          xl: '25vw',
          '2xl': '30vw',
        }}
        backgroundSize="contain"
        backgroundRepeat="no-repeat"
      >
        <ModalHeader
          p="0px"
          d="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          {type === 'Success' ? (
            <Image
              width="75px"
              height="75px"
              alt="Green check icon"
              src="/assets/icons/check.svg"
            />
          ) : (
            type === 'Error' && (
              <Image
                width="75px"
                height="75px"
                alt="Red x icon"
                src="/assets/icons/x.svg"
              />
            )
          )}
          <Heading mt="4" color="white" textAlign="center">
            {type}
            {' !'}
          </Heading>
        </ModalHeader>
        <ModalBody p="0px">
          <Text variant="modal" color="gray.400" mt="4" textAlign="center">
            {description}
          </Text>
        </ModalBody>
        <ModalFooter p="0px">
          <Button onClick={onClose} w="full" variant="gray" mt="10">
            Ok
          </Button>
        </ModalFooter>
      </ModalContent>
    </ModalChakra>
  );
};

export default Modal;
