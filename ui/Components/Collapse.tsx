import React from 'react';
import { Box, Flex, SxStyleProp } from 'theme-ui';
import { PrimaryIconButton } from '../Inputs/IconButton';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

export const CollapseHeader = (props: {
  children?: React.ReactNode;
  onClick?(): void;
  sx?: SxStyleProp;
  isOpen: boolean;
}) => {
  const { children, onClick, sx, isOpen } = props;

  return (
    <Flex
      sx={{ justifyContent: 'space-between', alignItems: 'center', height: '80px', p: 5, ...sx }}
    >
      <Flex sx={{ justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
        {children}
      </Flex>
      <Box>
        <PrimaryIconButton onClick={onClick}>
          {isOpen ? <IoIosArrowDown /> : <IoIosArrowUp />}
        </PrimaryIconButton>
      </Box>
    </Flex>
  );
};

export const CollapseBody = (props: {
  children?: React.ReactNode;
  isOpen: boolean;
  sx?: SxStyleProp;
}) => {
  const { children, isOpen, sx } = props;
  return isOpen && <Box sx={{ bg: 'gray.6', p: 5, ...sx }}>{children}</Box>;
};

type CollapseProps = {
  children?: React.ReactNode;
  sx?: SxStyleProp;
};

const Collapse = (props: React.ComponentPropsWithRef<'div'> & CollapseProps): JSX.Element => {
  const { children, sx } = props;
  return <Box sx={{ bg: 'gray.7', ...sx }}>{children}</Box>;
};

export default Collapse;
