import React from 'react';
import { Box, Flex, SxStyleProp } from 'theme-ui';

export const ModalHeader = () => {
  return <Box>Header</Box>;
};

export const ModalBody = () => {
  return <Box>Body</Box>;
};

export const ModalFooter = () => {
  return <Box>Footer</Box>;
};

type ModalProps = {
  children?: React.ReactNode;
  sx?: SxStyleProp;
};

const Modal = (props: React.ComponentPropsWithRef<'div'> & ModalProps): JSX.Element => {
  const { children } = props;

  return (
    <Flex
      sx={{
        position: 'relative',
        width: '100%',
        height: '100vh',
        bg: 'rgba(255,255,255,0.1)',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Flex
        sx={{
          flexDirection: 'column',
          position: 'absolute',
          width: '360px',
          height: '300px',
          bg: 'text',
          borderRadius: '18px',
          p: 6,
        }}
      >
        {children}
      </Flex>
    </Flex>
  );
};

export default Modal;
