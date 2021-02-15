import React from 'react';
import Flex from '../../ui/Layout/Flex';

const Frame = (props: { children: React.ReactNode }) => {
  const { children } = props;

  return (
    <Flex
      sx={{
        minWidth: 'calc(100% - 25vw)',
        width: 'calc(100% - 25vw)',
        p: 0,
        m: 0,
        maxHeight: '100vh',
        overflowY: 'scroll',
        flexDirection: 'column',
        '::-webkit-scrollbar': {
          width: '5px',
          bg: 'transparent',
        },
        '::-webkit-scrollbar-track': {
          bg: 'transparent',
        },
        '::-webkit-scrollbar-thumb': {
          bg: 'gray.3',
          borderRadius: 'card',
        },
      }}
    >
      {children}
    </Flex>
  );
};

export default Frame;
