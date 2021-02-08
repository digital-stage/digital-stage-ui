import React from 'react';
import { Box, Flex, SxStyleProp } from 'theme-ui';
import CloseButton from '../Inputs/CloseButton';
import { H4 } from '../Typography/Heading';

export const ModalHeader = (props: {
  children?: React.ReactNode;
  onClick(): void;
  sx?: SxStyleProp;
}) => {
  const { children, onClick, sx } = props;
  return (
    <Flex sx={{ justifyContent: 'space-between', alignItems: 'center', mb: 5 }}>
      <Box>
        <H4 sx={{ ml: 0, ...sx }} variant="dark">
          {children}
        </H4>
      </Box>
      <Box>
        <CloseButton onClick={onClick} />
      </Box>
    </Flex>
  );
};

export const ModalBody = (props: { children?: React.ReactNode; sx?: SxStyleProp }) => {
  const { children, sx } = props;
  return <Box sx={{ mb: 8, ...sx }}>{children}</Box>;
};

export const ModalFooter = (props: { children?: React.ReactNode; sx?: SxStyleProp }) => {
  const { children, sx } = props;
  return <Flex sx={{ justifyContent: 'center', alignItems: 'center', ...sx }}>{children}</Flex>;
};

type ModalProps = {
  children?: React.ReactNode;
  sx?: SxStyleProp;
  backDrop?: boolean;
  onClose(): void;
  isOpen: boolean;
};

const Modal = (props: React.ComponentPropsWithRef<'div'> & ModalProps): JSX.Element => {
  const { children, backDrop, onClose, isOpen } = props;

  const handleBackdrop = React.useCallback(() => {
    if (backDrop && onClose) {
      onClose();
    }
  }, [backDrop, onClose]);

  return (
    isOpen && (
      <Flex
        sx={{
          position: 'fixed',
          width: '100%',
          height: '100vh',
          bg: 'rgba(0,0,0,0.6)',
          alignItems: 'center',
          justifyContent: 'center',
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            width: '100vw',
            height: '100vh',
          }}
          onClick={handleBackdrop}
        />
        <Flex
          sx={{
            flexDirection: 'column',
            position: 'absolute',
            width: '360px',
            bg: 'text',
            borderRadius: '18px',
            p: 6,
          }}
        >
          {children}
        </Flex>
      </Flex>
    )
  );
};

export default Modal;
