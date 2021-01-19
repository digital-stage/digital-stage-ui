import React from 'react';
import { SxStyleProp } from 'theme-ui';
import Box from './Box';

type Props = {
  children?: React.ReactNode;
  sx?: SxStyleProp;
};

const defaultSx = {
  borderRadius: 'card',
  boxShadow: 'default',
  width: 'panel.width',
  height: 'panel.height',
  m: 4,
};

const Panel = (props: Props): JSX.Element => {
  return (
    <Box
      sx={{
        ...props.sx,
        ...defaultSx,
      }}
    >
      {props.children}
    </Box>
  );
};

const DarkPanel = (props: Props): JSX.Element => {
  return (
    <Box
      sx={{
        ...props.sx,
        ...defaultSx,
        bg: 'panel.2',
      }}
    >
      {props.children}
    </Box>
  );
};

const GrayPanel = (props: Props): JSX.Element => {
  return (
    <Box
      sx={{
        ...props.sx,
        ...defaultSx,
        bg: 'panel.1',
      }}
    >
      {props.children}
    </Box>
  );
};

const LightPanel = (props: Props): JSX.Element => {
  return (
    <Box
      sx={{
        ...props.sx,
        ...defaultSx,
        bg: 'panel.0',
      }}
    >
      {props.children}
    </Box>
  );
};

export { DarkPanel, GrayPanel, LightPanel };

export default Panel;
